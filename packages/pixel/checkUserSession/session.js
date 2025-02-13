const Session = {
  get expired() {
    return (async () => {
      const { default: supabase } = await import("artifact/supabase");
      const { data } = await supabase.auth.getSession();
      return !data?.session?.user;
    })();
  },
};

export default Session;

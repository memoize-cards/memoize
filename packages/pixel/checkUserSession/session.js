const Session = {
  get expired() {
    return (async () => {
      const { getSession } = await import("artifact/supabase");
      const { data } = await getSession();
      return !data?.session?.user;
    })();
  },
};

export default Session;

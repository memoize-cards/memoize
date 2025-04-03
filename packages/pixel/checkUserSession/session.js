const Session = {
  get expired() {
    return (async () => {
      const { getSession } = await import("artifact/supabase");
      const { data: session } = await getSession();
      return !session?.user;
    })();
  },
};

export default Session;

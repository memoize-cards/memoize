const CurrentPage = {
  get isPublic() {
    return !/^\/(app)\//.test(location.pathname);
  },
};

export default CurrentPage;

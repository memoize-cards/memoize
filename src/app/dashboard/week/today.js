const Today = {
  is(n) {
    const date = new Date();
    date.setDate(date.getDate() - date.getDay() + n);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  },
};

export default Today;

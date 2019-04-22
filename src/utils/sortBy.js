const sortBy = key => (a, b) => {
  if (a[key] > b[key]) {
    return 1;
  }

  if (b[key] > a[key]) {
    return -1;
  }

  return 0;
};

export default sortBy;

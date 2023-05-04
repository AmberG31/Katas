selector = (budget, people) => {
  if (budget < 15 || people < 1) {
    return -1;
  }
};

module.exports = selector;

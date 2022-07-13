const add = function (n1, n2) {
  return n1 + n2;
};

const subtract = function (n1, n2) {
  return n1 - n2;
};

const sum = function (arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};

const multiply = function (arr) {
  let mul = 1;
  arr.forEach((element) => {
    mul *= element;
  });
  return mul;
};

const power = function (n1, n2) {
  let ans = 1;
  for (let i = 0; i < n2; i++) {
    ans *= n1;
  }
  return ans;
};

const factorial = function (n) {
  if (n < 0) return -1;
  else if (n == 0) return 1;
  else {
    return n * factorial(n - 1);
  }
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

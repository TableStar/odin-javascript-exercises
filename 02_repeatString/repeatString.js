const repeatString = function (word, mult) {
  let res = "";
  if (mult<0) {
    return "ERROR"
  }
  for (let i = 1; i <= mult; i++) {
    res += word;
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;

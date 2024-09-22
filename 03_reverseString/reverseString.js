const reverseString = function (words) {
  const splittedArr = words.split("");
  let newArr = []
  for (let i = splittedArr.length-1; i >= 0; i--) {
    newArr.push(splittedArr[i])
  }
  return newArr.join("")
};

// Do not edit below this line
module.exports = reverseString;

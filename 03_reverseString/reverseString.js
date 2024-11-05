const reverseString = function (str) {
  let strArray = str.split("");
  strArray.reverse();
  let strReversed = strArray.join("");

  return strReversed;
};

// Do not edit below this line
module.exports = reverseString;

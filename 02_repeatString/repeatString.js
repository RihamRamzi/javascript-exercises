const repeatString = function (str, repeats) {
  let result = "";

  if (repeats < 0) {
    result = "ERROR";
  }

  for (i = 0; i < repeats; i++) {
    result += str;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;

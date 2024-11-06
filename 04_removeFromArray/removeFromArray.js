const removeFromArray = function (array, ...multipleIndex) {
  const newArray = array.filter((item) => !multipleIndex.includes(item));
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

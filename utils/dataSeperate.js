exports.separateNumbersAndAlphabets = (data) => {
  const numbers = [];
  const alphabets = [];

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else {
      alphabets.push(item);
    }
  });

  return { numbers, alphabets };
};

exports.findHighestLowercaseAlphabet = (alphabets) => {
  const lowercaseAlphabets = alphabets.filter(
    (item) => item === item.toLowerCase() && isNaN(item)
  );
  const highestLowercaseAlphabet = lowercaseAlphabets.length
    ? [lowercaseAlphabets.sort().pop()]
    : [];
  return highestLowercaseAlphabet;
};

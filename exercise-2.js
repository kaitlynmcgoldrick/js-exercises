// Given an Array of strings, use Array.prototype.reduce to write a function that
// creates an object that contains the number of times each string occured in the array.

const someWords = ["apple", "banana", "apple", "durian", "durian", "durian"];

const countWords = words => {
  // your solution here
  return words.reduce((tally, fruit) => {
      tally[fruit] = (tally[fruit] || 0) + 1;
      //tally[fruit] = tally[fruit] += 1 : tally[fruit] = 1;
      // acc.hasOwnProperty(curr) ? acc[curr] += 1 : 1;
      return tally;
  }, {});
};

console.log(countWords(someWords));
// {
//   apple: 2,
//   banana: 1,
//   durian: 3,
// }

module.exports = countWords;

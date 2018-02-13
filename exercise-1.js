// Write a function `transformStrings` that takes an array of strings and
// only returns strings with 20 characters or less reversed.

const flavours = [
  "Cranberry",
  "Strawberry and Peanut-Butter Ice-Cream",
  "Dirty Sock",
  "Beef Casserole",
  "Peppermint",
  "Earwax",
  "Overcooked Cabbage"
];

const transformStrings = array => {
  // your solution here
  return array.filter(item => item.length <= 20)
              .map(item => item.split("").reverse().join(""));
};

console.log(transformStrings(flavours));

module.exports = transformStrings;

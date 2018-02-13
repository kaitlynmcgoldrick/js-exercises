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
  return array.reduce((acc, flavour) => {
      return (flavour.length <= 20) ?
      // if flavour.length is <= 20, we want to reverse it, then add it to an array
      acc.concat(flavour.split('').reverse().join(''))
       : acc;

  }, []);

  //return array.filter(item => item.length <= 20) {
   //array.map(item =>.split("").reverse().join(""));
   //};

};

console.log(transformStrings(flavours));

module.exports = transformStrings;

// Given an Array of strings, use Array.prototype.reduce to write a function that
// creates an object that contains the number of times each string occured in the array.

const someWords = ["apple", "banana", "apple", "durian", "durian", "durian"];

const countWords = words => {
  words.reduce((distinctWords,word) =>{
    // if(distinctWords.includes(word)){
    //   distinctWords.word++;
    // }else{
    //   distinctWords.concat("{word:0}");
    // }
    return distinctWords.concat(word);
    },{});
};

console.log(countWords(someWords));
// {
//   apple: 2,
//   banana: 1,
//   durian: 3,
// }

module.exports = countWords;

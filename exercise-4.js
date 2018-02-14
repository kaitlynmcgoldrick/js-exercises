// Implement Array.prototype.reduce using recursion.
//
// For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value.
// You may assume the initial value will always be supplied.

const numbers = [1, 2, 3, 4, 5];

const reduce = (array, fn, init) => {
  if (!array.length) {
    return init; // this is catching the base case, when the array is 0 so it returns the total
  } else {
    let total = fn(init, array.shift()); // second param is the first item in the array. array.shift() removes the first item from the array and returns that value
    return reduce(array, fn, total); // array here has the same values, minus the old first item
  }
};

const sum = (acc, val) => acc + val;

console.log(reduce(numbers, sum, 0)); // 15

module.exports = reduce;

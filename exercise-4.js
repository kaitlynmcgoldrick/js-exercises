// Implement Array.prototype.reduce using recursion.

// For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value.
// You may assume the initial value will always be supplied.

// const numbers = [1, 2, 3, 4, 5];
// const numbers = [];

const numbers = [1, 2, 3]

const reduce = (array, fn, init) => {
  if (!array.length){ // array.length === 0
    return init;
  } else {
    let total = fn(init, array[0]); //fn(0, 1)
    return reduce(array.slice(1, array.length), fn, total)
  }

  //splice vs splice
  //splice

  // my solution here
  // return array.reduce((acc, val) => {
  //
  //   return fn(acc, val);
  // }, init);

  //is this recursion?
};

const sum = (acc, val) => acc + val;

console.log(reduce(numbers, sum, 0)); // 15

//initial value is 0
//if empty, will return 0

module.exports = reduce;

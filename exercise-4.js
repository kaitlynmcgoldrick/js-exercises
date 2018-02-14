// Implement Array.prototype.reduce using recursion.
//
// For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value.
// You may assume the initial value will always be supplied.

const numbers = [1, 2, 3, 4, 5];
const reduce = (array, fn, init) => {
  if (array.length === 0) { // !array.length
    return init;
  } else {
    let total = fn(init, array[0]); // fn(0, 1)
    return reduce(array.slice(1), fn, total);
  }

  // if (array.length === 1) {
  //   return fn(init, array[0]);
  // } else {
  //   return reduce(array.slice(1), fn, reduce(array.slice(0, 1), fn, init));
  // }

  // if (!array.length) {
  //   return init;
  // } else {
  //   let total = fn(init, array.shift());
  //   return reduce(array, fn, total);
  // }

  // let acc = init;
  // let counter = 0;

  // while (counter < array.length){
  //   acc = fn(acc, array[counter]);
  //   counter++;
  // }
  // return acc;
 
};

const sum = (acc, val) => acc + val;

console.log(reduce(numbers, sum, 0)); // 15

module.exports = reduce;

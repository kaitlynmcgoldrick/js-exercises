// Implement Array.prototype.reduce using recursion.
//
// For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value.
// You may assume the initial value will always be supplied.

const numbers = [1, 2, 3, 4, 5];

const reduce = (array, fn, init) => {
  let acc = init;
  let c = 0
  while (c<array.length){
    acc = fn(acc,array[c])
    c++;
  }
  return acc;
};

const sum = (acc, val) => acc + val;

console.log(reduce(numbers, sum, 0)); // 15

// module.exports = reduce;

// let acc = 0;
// acc = sum(acc,numbers[0]);
// acc = sum(acc,numbers[1]);
// acc = sum(acc,numbers[2]);
// console.log(acc);
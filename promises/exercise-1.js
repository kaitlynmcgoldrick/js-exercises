require("es6-promise");

// Create a promise. Have it fulfilled with a value of 'FULFILLED!' in executor after a delay of 300ms, using setTimeout.
// Then, print the contents of the promise after it has been fulfilled by passing console.log to then.

const promise = new Promise(function(resolve, reject) {
  // Your solution here
  setTimeout(resolve('FULFILLED!'), 300);
});

const onResolve = value => {
  // Your solution here
  console.log(value);
};

promise.then(data => onResolve(data));

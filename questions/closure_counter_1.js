/**
 * Create a counter function that maintains its count between calls.
 * Each time the function is called, it should increment and return the count.
 *
 * const counter = createCounter();
 * console.log(counter()); // 1
 * console.log(counter()); // 2
 * console.log(counter()); // 3
 */

function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

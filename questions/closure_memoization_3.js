function memoize(fn) {}

// A simple function that takes a number and doubles it
function double(x) {
  console.log("Calculating..."); // This will only run for new inputs
  return x * 2;
}

// Create a memoized version of the double function
const memoizedDouble = memoize(double);

console.log(memoizedDouble(5)); // Calculating... 10
console.log(memoizedDouble(5)); // 10 (uses cached result)
console.log(memoizedDouble(5)); // 10 (uses cached result)
console.log(memoizedDouble(10)); // Calculating... 20

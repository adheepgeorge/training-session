function memoize(fn) {
  // Create a simple object to store results
  const cache = {};

  return function (x) {
    // If we've seen this input before, return the cached result
    if (x in cache) {
      return cache[x];
    }

    // If we haven't seen this input, calculate the result
    const result = fn(x);

    // Store the result in our cache
    cache[x] = result;

    return result;
  };
}

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

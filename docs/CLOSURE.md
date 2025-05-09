# Understanding Closures in JavaScript

### Close your eyes and imagine yourself in your kitchen 🍽️

#### Lexical Scope (Basic Case)

```javascript
function kitchen() {
  const food = "pizza";

  function eat() {
    console.log(`Eating ${food}`);
  }

  eat();
}

kitchen(); // Predict the output?
```

This is like eating pizza in the kitchen right now:

- The `food` variable is only accessible within the `kitchen` function
- The `eat` function is called immediately and only once
- Once `kitchen()` finishes, everything is cleaned up
- We can't access the pizza again after the kitchen function is done

#### Closure (Advanced Case)

```javascript
function kitchen() {
  const food = "pizza";

  return function eat() {
    console.log(`Eating ${food}`);
  };
}

const lunchbox = kitchen();
lunchbox(); // Predict the output?
lunchbox(); // Predict the output?
```

This is like getting a special lunchbox that keeps your pizza fresh:

- The `food` variable is "captured" by the returned `eat` function
- We can call the `eat` function multiple times
- The `food` variable persists in memory as long as we have a reference to the `eat` function
- We can use the `eat` function anywhere in our code

### So, What is a Closure? 🤔

A closure is a function that remembers and can access variables from its outer (enclosing) scope, even after the outer function has finished executing. Think of it as a function with a "memory" of its environment.

Closure => A Function that remembers its lexical scope

### Understanding Through Chrome DevTools > Sources Tab🔍

When you add a breakpoint inside `eat` function and inspect the Scope panel, you'll see:

1. **Local**: Shows local variables for the current function
2. **Closure (kitchen function)**: Shows `food` variable - this is the closure in action!
3. **Script**: Shows top-level variables/functions
4. **Global**: Shows global objects and functions

### Practical Use Cases 🛠️

#### 1. Module Design Pattern

```javascript
const counterModule = (function () {
  let count = 0;

  return {
    increment() {
      return ++count;
    },
    getCount() {
      return count;
    },
  };
})();

console.log(counterModule.increment()); // 1
console.log(counterModule.getCount()); // 1
```

#### 2. Function Factory

```javascript
function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(5)); // 10
```

#### 3. Maintaining State in Async Operations

```javascript
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

#### 4. Debouncing

```javascript
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

const debouncedSearch = debounce(() => console.log("Searching..."), 1000);
```

### Questions and Solutions 💡

#### 1. Basic Counter

```javascript
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
```

#### 2. Secret Holder

```javascript
function createSecretHolder(secret) {
  return {
    getSecret() {
      return secret;
    },
    setSecret(newSecret) {
      secret = newSecret;
    },
  };
}
```

#### 3. Memoization

```javascript
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
```

#### 4. Yawn once button

### Key Takeaways 🎯

1. **Remember**: A closure is a function that remembers its lexical scope
2. **Best Practice**: Use closures to create private variables and maintain state
3. **Common Uses**: Module patterns, function factories, and maintaining state in async operations
4. **Debugging**: Use Chrome DevTools to inspect closure scopes

### Summary

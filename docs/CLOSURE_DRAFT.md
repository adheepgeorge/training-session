TODOS

1. Start preparing output questions closure
2. Cover other topics

## Lexical Scope

The "lexical" part means:

1. The eat function is physically written inside the kitchen function
2. Because of this physical placement, eat can see the food variable
3. The scope is determined by the physical structure of the code, not by when or how the functions are called

## Lexical Scope vs Closure

Original (Lexical Scope): Eating pizza in the kitchen right now

Closure Version: Getting a special lunchbox that keeps your pizza fresh, so you can eat it later anywhere you want!

Lexical Scope:
The food variable is only accessible within the kitchen function
The eat function is called immediately and only once
Once kitchen() finishes executing, everything is cleaned up
We can't access the pizza again after the kitchen function is done

Closure:
The food variable is "captured" by the returned eat function
We can call the eat function multiple times
The food variable persists in memory as long as we have a reference to the eat function
We can use the eat function anywhere in our code, even in different functions

This is why closures are so powerful in JavaScript - they allow us to create functions that "remember" their environment, even after the outer function has finished executing. It's like having a lunchbox that keeps our pizza fresh and accessible whenever we need it, rather than having to eat it all at once in the kitchen!

Closure => A Function that remembers its lexical scope

APPROACH

1. Use Debugger in the browser to show 'Closure' in the scope section

---

## Functions are First-Class Citizens in Javascript

They can be:
Assigned to variables
Passed as arguments to other functions
Returned from other functions
Stored in data structures

## TASK 1 outer_inner.js: With the example of an outer function that returns an inner function.

Show how Closure works in chrome dev tools

Add a breakpoint inside innerFunction's definition

Call Stack
The call stack shows that you are currently inside innerFunction, which was called from line 12.

Scope Panel

Local: Shows local variables for the current function (innerFunction). Here, there are none.

Closure (outerFunction): This is the most important part!
It shows outerVariable: "I am from outer function".
This means innerFunction still has access to outerVariable even though outerFunction has already finished running.
The specific set of variables created during a particular call to outerFunction are kept alive if a closure needs them.

Script: Shows variables/functions defined in the script scope. ( Shows variables and functions that are defined at the top level of your script file )

Global: Shows global objects and functions.

Inner function remembered its roots!

## TASK 2 Exercise: Now, experiment by adding a third level of nesting and see how each inner function can access variables from its outer scopes.

## USE CASES

1. Module Design Pattern
2. Currying
3. Functions like once
4. Memoize
5. Maintaining state in async world
6. SetTimeouts
7. Iterators

**_QUESTION 1_**

1. Write a function createCounter that returns a function. Every time you call the returned function,

```ts
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

2. Closure with Parameters:
   Write a function multiply that takes a number x and returns a function.
   The returned function should take a number y and return x \* y.

```ts
const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(5)); // 10
console.log(multiplyByTwo(10)); // 20
```

3. Closure with State:
   Write a function createSecretHolder that takes a secret value and returns an object with two methods

```ts
const holder = createSecretHolder("hidden");
console.log(holder.getSecret()); // "hidden"
holder.setSecret("new secret");
console.log(holder.getSecret()); // "new secret"
```

4. Closure with Asynchronous Behavior:
   Write a function debounce that takes a function fn and a delay ms.
   It should return a new function that, when called, waits for ms milliseconds before calling fn.
   If the function is called again before the delay is over, it should reset the timer.

```ts
const debouncedFn = debounce(() => console.log("Hello"), 1000);
debouncedFn(); // Waits 1s, then logs "Hello"
debouncedFn(); // Cancels the previous call, waits 1s, then logs "Hello"
```

5. Closure with Memoization:
   Write a function memoize that takes a function fn and returns a new function.
   The new function should cache the results of fn for each unique set of arguments.
   If the function is called again with the same arguments,
   it should return the cached result instead of recomputing.

```ts
const expensiveFunction = (x) => x * x;
const memoizedFn = memoize(expensiveFunction);
console.log(memoizedFn(5)); // 25 (computed)
console.log(memoizedFn(5)); // 25 (cached)
console.log(memoizedFn(10)); // 100 (computed)
```

6. Closure with Event Listeners:
   Write a function createButton that creates a button element.
   When clicked, it should log the number of times it has been clicked.
   Use a closure to keep track of the count.

```ts
const button = createButton();
button.addEventListener("click", onButtonClick);
button.click(); // Logs "Button clicked 1"
button.click(); // Logs "Button clicked 2"
button.click(); // Logs "Button clicked 3"
```

7. Closure with Promises:

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

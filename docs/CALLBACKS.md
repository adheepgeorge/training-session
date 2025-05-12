# Understanding Callbacks in JavaScript

### Functions are First-Class Citizens in JavaScript

In JavaScript, functions are first-class citizens, meaning they can be:

- Assigned to variables
- Passed as arguments to other functions
- Returned from other functions
- Stored in data structures

### What are Callbacks? 🤔

<img src="../assets/call_me.gif" width="400" height="300" alt="sid call me"/>

A callback is simply a function that is passed as an argument to another function and is executed after the completion of some operations. Think of it as a "call me back later" mechanism in JavaScript.

### Types of Callbacks

#### 1. Synchronous Callbacks

These execute immediately, like a waiter who brings your water right away.

<img src="../assets/what_are_you_waiting_for.gif"  alt="waiting for"/>

```javascript
// Example: Array methods with synchronous callbacks
const numbers = [1, 2, 3, 4, 5];

// map() uses a callback to transform each element
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

// filter() uses a callback to select elements
const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]
```

#### 2. Asynchronous Callbacks

<img src="../assets/oogway.gif"  alt="oogway"/>

These execute after some time or when an event occurs, like waiting for your food to be cooked.

```javascript
// Example: setTimeout with asynchronous callback
console.log("Order placed!");

setTimeout(function () {
  console.log("Food is ready!");
}, 2000);

console.log("Waiting for food...");

// Output:
// Order placed!
// Waiting for food...
// Food is ready! (after 2 seconds)
```

### Custom Callback Example

Here's a practical example of creating and using a custom callback:

```javascript
// Function that simulates processing an order
function processOrder(order, callback) {
  console.log(`Processing order: ${order}`);

  // Simulate some processing time
  setTimeout(() => {
    const result = `Order ${order} is ready!`;
    callback(result);
  }, 2000);
}

// Using the callback
processOrder("Pizza", function (result) {
  console.log(result);
});
```

### The Evolution: From Callbacks to Modern JavaScript

While callbacks are powerful, they can lead to "Callback Hell" when nested deeply:

<img src="../assets/hell.gif"  alt="hell"/>

```javascript
// Callback Hell Example
getUser(function (user) {
  getOrders(user.id, function (orders) {
    getOrderDetails(orders[0].id, function (details) {
      console.log(details);
    });
  });
});
```

This led to the development of:

- Promises
- Async/await

### Key Takeaways 🎯

1. **Remember**: A callback is just a function passed as an argument to another function
2. **Best Practice**: Keep callbacks simple and avoid deep nesting
3. **Modern Approach**: Consider using Promises or async/await for complex async operations

### Summary

<img src="../assets/block.gif"  alt="block"/>

Callbacks are fundamental to JavaScript's asynchronous nature. They allow us to handle operations that take time without blocking the main thread.

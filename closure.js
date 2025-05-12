function kitchen() {
  let food = "pizza"; // This is like having pizza in the kitchen

  return function eat() {
    console.log(`Eating ${food}`); // This function remembers the food even when used outside
  };
}

// Create a function that remembers the pizza
const eatPizza = kitchen();

// Now we can eat the pizza anywhere, even outside the kitchen!
eatPizza(); // Prints: "Eating pizza"
eatPizza(); // Prints: "Eating pizza"

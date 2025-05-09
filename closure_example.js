function kitchen() {
  let food = "pizza"; // This is like having pizza in the kitchen

  return function eat() {
    console.log(`Eating ${food}`); // This function remembers the food even when used outside
    food = null;
  };
}

// Create a function that remembers the pizza
const takePizza = kitchen();
const takePizza2 = kitchen();

// Now we can eat the pizza anywhere, even outside the kitchen!
takePizza(); // Prints: "Eating pizza"
takePizza(); // Prints: "Eating pizza"
takePizza2();

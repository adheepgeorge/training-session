function kitchen() {
  // Level 1: kitchen's scope
  let food = "pizza"; // This is like having pizza in the kitchen

  function eat() {
    // Level 2: eat's scope
    console.log(food); // The eat function can see the pizza because it's in the kitchen
  }

  eat();
}

kitchen();

function outerFunction() {
  let outerVariable = "I am from outer function";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}

const closureFunction = outerFunction();

closureFunction();

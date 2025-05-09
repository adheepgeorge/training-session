/**
 * Predict the output of the following code:
 */

function outerFunction() {
  let outerVariable = "I am from outer function";
  function innerFunction() {
    console.log(outerVariable);
  }
  outerVariable = "I've changed";
  return innerFunction;
}

const closureInnerFunction = outerFunction();
closureInnerFunction();

function createCounter() {
  let count = 0;

  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      count++;
      console.log(`Count is: ${count}`);
    }, 1000 * i);
  }
}

createCounter();

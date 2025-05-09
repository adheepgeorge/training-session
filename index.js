document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("clickMe");
  let clickCount = 0;

  button.addEventListener("click", () => {
    clickCount++;
    button.textContent = `Clicked ${clickCount} times!`;
  });
});

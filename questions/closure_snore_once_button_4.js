// Complete definition of the createSnoreHandler function - If you've snored once, you can't snore again
function createSnoreOnceHandler() {}

// Use this function to play the snore sound
const playSnoreAudio = () => {
  const snoreSound = document.getElementById("snore-sound");
  snoreSound.play();

  // Stop the audio after 5 seconds
  setTimeout(() => {
    snoreSound.pause();
    snoreSound.currentTime = 0; // Reset to beginning
  }, 5000);
};

// Create the handler function
const snoreOnceHandler = createSnoreOnceHandler();

// Attach the handler to the button
document
  .getElementById("snore-once-button")
  .addEventListener("click", snoreOnceHandler);

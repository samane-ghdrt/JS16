// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer
const messageBox = document.querySelector(".message");
const closeButton = document.querySelector(".ri-close-line");

closeButton.addEventListener("click", function() {
  messageBox.style.display = "none";
});
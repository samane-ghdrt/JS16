// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer
const messageBox = document.getElementById("myMessageBox");
const closeButton = document.getElementById("");

closeButton.addEventListener("click", function() {
  messageBox.style.display = "none";
});
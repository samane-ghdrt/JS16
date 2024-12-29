// ? Qustion-4:Write a code that changes the background color of the stars when we click on them.
// hint: watch help.mp4
//! answer
const starsEl= document.querySelectorAll('.stars i');

starsel.forEach(star => {

star.addEventListener('click',(e)=>{
e.target.classlist.toggle('.solid');})
})

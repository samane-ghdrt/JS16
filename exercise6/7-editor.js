/*
Look at editor.png, you should create a text editor similar to that.

- The first button removes the last letter when clicked.
- The second button deletes the entire text when clicked.
- The third button bolds the text when clicked.
- The fourth button italicizes the text when clicked.
*/
const reoveEl=document.querySelector('.remove');
reoveEl.addEventListener('click',()=>{
    let textElement = document.querySelector(".input");
    let currentText = textElement.value;
  
    if (currentText.length > 0) {
      let newText = currentText.slice(0, -1); // Remove the last character
      textElement.value= newText;
    }  
})
const deleteEl=document.querySelector('.delete');
deleteEl.addEventListener('click',()=>{
    let textElement = document.querySelector(".input");
    let currentText = textElement.value;
  
    if (currentText.length > 0) {
      let newText = ""; 
      textElement.value= newText;
    }  
})
const boldEl=document.querySelector('.bold');
boldEl.addEventListener('click',()=>{
    let textElement = document.querySelector(".input");
    let currentText = textElement.value;
  
    if (currentText.length > 0) {
      let newText = currentText.style.fontWeight= "bolder"; 
      textElement.value= newText;
    }  
})
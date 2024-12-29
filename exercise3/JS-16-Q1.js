//? look at the code in html file and say how we can attach an eve.nt to all of the buttons without actually giving it to them and selecting the button tag? write it's code .
//Note: your code should log the text content of the clicked button to the console.

// ! answer ===========================================
const parent=document.querySelector('.parent button');
parent.addEventListener('click', (event) => {
    // Check if the clicked element is a button
    if (event.target.tagName === 'BUTTON') {
      console.log(event.target.textContent);
    }
  });
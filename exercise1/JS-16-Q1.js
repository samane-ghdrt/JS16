// ? Question-1:Write a code that, upon clicking the heart icon (.cards__card__img__icon i), changes its color and increments the counter (#counter) displayed alongside it.
// hint: watch help.mp4
// !Answer:
const heart =document.querySelector('.cards__card__img__icon i');
const counter =document.querySelector('.cards__card__img__icon__text');
heart.addEventListener("click",function(e){
e.target.style.backgroundColor="#e15c8f";
let i=parseInt(counter.textContent);
while(i<120){
    i++;
    counter.textContent=i;

}

})


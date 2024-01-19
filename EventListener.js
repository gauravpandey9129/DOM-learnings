const form = document.querySelector("form")
const fruits=document.querySelector(".fruits")
form.addEventListener('submit',function(event){
  event.preventDefault();
  const fruittoadd=document.getElementById('fruit-to-add');
  const newli=document.createElement('li')
  newli.innerHTML=fruittoadd.value+'<button class="delete-btn>x</button>"'
  fruits.appendChild(newli);
})
fruits.addEventListener('click',function(event){
  if(event.target.classList.contains('delete-btn')){
    const fruittodelete=event.target.parentElement;
    fruits.removeChild(fruitstodelete)
  };
  });

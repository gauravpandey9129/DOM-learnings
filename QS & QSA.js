const main=document.querySelector("#main-heading");
main.style.textAlign="right";
const fruits=document.querySelector(".fruits");
fruits.style.backgroundColor="gray"
fruits.style.padding="30x"
fruits.style.margin="30x"
fruits.style.width="50%"
fruits.style.borderRadius="5px"
fruits.style.listStyleType="none"
const basket=document.querySelector("h2");
basket.style.color="brown"
basket.style.marginLeft="30px"
const fruititem=document.querySelectorAll(".fruit")
for(let i=0;i<fruititem.length;i++){
  fruititem[i].style.backgroundColor="brown"
  fruititem[i].style.padding="10px"
  fruititem[i].style.margin="10px"
  fruititem[i].style.borderRadius="5px"
  fruititem[i].style.color="white"
}
const oddfruit=document.querySelectorAll(".fruit:nth-child(odd)");
for(let i=0;i<oddfruit.length;i++){
  oddfruit[i].style.backgroundColor="lightgray"
}






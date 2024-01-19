const para =document.createElement('p')
const paraText= document.createTextNode("Total Fruits : 4")
para.appendChild(paraText);
const divs=document.getElementsByTagName("div")
const secondDiv=divs[1];
secondDiv.appendChild(para);
const fruits=document.querySelector('.fruits')
const bascketHeading=document.getElementById("basket-heading");
para.className="fruitCount"
para.Id="fruits-total"
para.setAttribute("title","fruitsTotal")
console.log(para)
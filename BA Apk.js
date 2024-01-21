const buton=document.getElementById('form');
buton.addEventListener('submit',function(event){
    event.preventDefault();
    let button=document.createElement('button');
    button.id="removeButton";
    button.type="click"
    let buttonText=document.createTextNode("x");
    button.appendChild(buttonText);

    let name=document.getElementById('name').value;
    let email=document.getElementById('useremail').value;
    let phoneNo=document.getElementById('mob').value;

    let li= document.createElement('li');
     
    let text= document.createTextNode(`${name} - ${email} - ${phoneNo}`);
    li.appendChild(text);
    li.className="li";
    li.appendChild(button)
    
    let ul=document.querySelector('.list');
    ul.appendChild(li);

    let obj={
        Name :`${name}`,
        Email :`${email}`,
        Mobile:`${phoneNo}`
    
    }
    let stringifyObj=JSON.stringify(obj);

    localStorage.setItem(`${name}`,stringifyObj);

         

    
button.onclick=(event)=>{
    event.preventDefault();
    ul.removeChild(li);
    localStorage.removeItem(name)

}


})  
  



       

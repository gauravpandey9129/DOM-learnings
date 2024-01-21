const buton=document.getElementById('form');
buton.addEventListener('submit',function(event){
    event.preventDefault();
    let editbtn=document.createElement('button')
    let button=document.createElement('button');
    button.id="removeButton";
    editbtn.id="edit"
    editbtn.type="click"
    button.type="click"
    let buttonText=document.createTextNode("x");
    let editbtnText=document.createTextNode("Edit");
    editbtn.appendChild(editbtnText);
    button.appendChild(buttonText);

    let name=document.getElementById('name').value;
    let email=document.getElementById('useremail').value;
    let phoneNo=document.getElementById('mob').value;

    let li= document.createElement('li');
     
    let text= document.createTextNode(`${name} - ${email} - ${phoneNo}`);
    li.appendChild(text);
    li.className="li";
    li.appendChild(button)
    li.appendChild(editbtn);
    
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
editbtn.onclick=(event)=>{
event.preventDefault();
localStorage.removeItem(name);
ul.removeChild(li);
document.getElementById('name').value=name;
document.getElementById('useremail').value=email;
document.getElementById('mob').value=phoneNo;



}


})  
  



       

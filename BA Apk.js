const button=document.getElementById('form');
button.addEventListener('submit',function(event){
    event.preventDefault();
    let name=document.getElementById('name').value;
    let email=document.getElementById('useremail').value;
    let phoneNo=document.getElementById('mob').value;

    let li= document.createElement('li');
     
    let text= document.createTextNode(`${name} - ${email} - ${phoneNo}`);
    li.appendChild(text);
    li.className="li";
    let ul=document.querySelector('.list');
    ul.appendChild(li);

    let obj={
        Name :`${name}`,
        Email :`${email}`,
        Mobile:`${phoneNo}`
    
    }
    let stringifyObj=JSON.stringify(obj);

    localStorage.setItem('data',stringifyObj);





})
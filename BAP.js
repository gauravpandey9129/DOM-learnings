const button=document.getElementById('form');
button.addEventListener('submit',function(event){
    event.preventDefault();
    let name=document.getElementById('name').value;
    let email=document.getElementById('useremail').value;
    let phoneNo=document.getElementById('mob').value;

    localStorage.setItem('Name',name)
    localStorage.setItem('Email',email);
    localStorage.setItem('MobileNumber',phoneNo)
    console.log("working")

})
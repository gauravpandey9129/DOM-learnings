const filter= document.getElementById('filter');
filter.addEventListener('keyup',function(e){
    
    let textEntered=e.target.value.toLowerCase();
    const fruits=document.querySelectorAll('.fruit');
    for(let i=0;i<fruits.length;i++){
        const currentText=fruits[i].firstChild.textContent.toLowerCase();
        if(currentText.indexOf(textEntered)===-1){
            fruits[i].style.display="none";
        }else{
            fruits[i].style.display="flex";
        }
    }
});
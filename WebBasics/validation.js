let myValidation = ()=>{
    let myValue = document.getElementById('myform').value
    if(isNaN(myValue) || myValue < 1 || myValue > 20){
        console.log('not a valid input');
        
    }
    else{
        console.log('valid input');
    }
}

//form validaion

// document.querySelector('.myform').addEventListener('submit',(event)=>{
    // console.log('hello');
    // console.log(event.target.username);
    
// })

document.querySelector('.myform').addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.name.value);
    event.target.username.value = ""
    event.target.name.value = ""


})
    
    

     



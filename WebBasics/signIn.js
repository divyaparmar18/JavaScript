let myValidation = ()=>{
    let myPass = document.getElementById('pass').value
    let checkMyPass = document.getElementById('checkpass').value
    if(myPass === checkMyPass){
        alert("thnx for signing in");
        
    }
    else{
        const myParah = document.createElement('p')
        myParah.textContent = 'your passwprd did not match please try againc'
        document.querySelector('body').appendChild(myParah)
        
        
    }
}

document.querySelector('.myform').addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log(event.target.checkpass.value);
    event.target.username.value = ""
    event.target.name.value = ""
    event.target.email.value = ""
    event.target.password.value=""
    event.target.checkpass.value=""


})
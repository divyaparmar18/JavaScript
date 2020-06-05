if(true){
    console.log('I am inside if block');
}
else{
    console.log('i am inside else block');
    
}

if(false){
    console.log('I am inside if block');
}
else{
    console.log('i am inside else block');
    
}

if(false){
    console.log('I am inside if block');
}
else if (true) {
    console.log('i am inside else if  block');
    
}
else{
    console.log('notice this part');
    
}

//LCO

var whoIsHere = 'user';
if(whoIsHere === 'user'){
    console.log('Greeting message for user');
    console.log('allow access to view all courses');
}
else if(whoIsHere == 'teacher'){
    console.log('Greeting message for teacher');
    console.log('allow access to his courses');
}
else{
    console.log('Message : please verify your email');
    console.log('send msg for verification');
}
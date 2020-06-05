const sayHello = function(name){
    console.log('hy user');
    console.log(`hey ${name}`);
}

sayHello('danny');

const fullNameMaker = function (firstName, lastName){
    console.log(`Welcome to LCO`);
    console.log(`Happy to have you ${firstName} ${lastName}`);
}

fullNameMaker('danny','patel');

let myAdder = function (num1,num2){
    return num1+num2
}
console.log(myAdder(3,5));

let myMultiplier = function (num1,num2){
    return num1*num2
}
console.log(myMultiplier(4,5));

//what if you not paas the parameters

let guestUser = function(name,courseCount){
    return `Hello ${name} your course count is ${courseCount}`
}

console.log(guestUser());

// YOu can just give default parameters so that when you don't pass it can take the default one

let guestUser1 = function(name = 'unname',courseCount = 0){
    return `Hello ${name} your course count is ${courseCount}`
}

console.log(guestUser1('danny',5));




let userEmail = 'abc123dhg';
let passowrd = '1234';

let userChecker = function(myString){
    if (myString.includes(123) && (myString.length > 6) ) {
        return true
    }
    return false
}

let passChecker = function(myPass){
    if (myPass.includes(123) && (myPass.length > 8)) {
        return true
    }
    return false
}

console.log(userChecker(userEmail));
console.log(passChecker(passowrd))
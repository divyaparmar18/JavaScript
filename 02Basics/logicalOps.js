// && operator and || operator

let isVerified = true;
let isLoggedIn = true;
let hasPaymentToken = true;
let isGuest = true;

if(isVerified && isLoggedIn && hasPaymentToken){
    console.log('Geeting Message to user');
    console.log('grant access to the paid course');
}
else if(isLoggedIn || isGuest){
    console.log('Allow free previews');
}
else{
    console.log('Message: please contact Admin');
}
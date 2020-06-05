let iAmGlobal = 'somw value';

if(true){
    // don't use var for iAmLocal so that it can't be accessed out of the scope
    let iAmLocal = 'soemmorevalue'
    iAmGlobal = 'superman'
    console.log(iAmGlobal);
    console.log(iAmLocal);
    
}

// console.log(iAmLocal);
console.log(iAmGlobal);


// function asynfunc(){
//     return new Promise(
//         (resolve,reject)=>{
//             resolve(result);
//             reject(error);
//         }
//     )
// }

// asynfunc()
// .then(result => { 5900956957})
// .catch(error => {454576})

let myp = new Promise((resolve,reject)=>{
setTimeout(()=>{resolve("hurray");
},1000)
})

myp
.then((v)=>{
console.log(v);

})
.catch(()=>{
    console.log(reject);
    
})

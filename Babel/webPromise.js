// function testCall(url){
// return new Promise((resolve,reject)=>{
//     var request = new XMLHttpRequest();
//     request.open('Get',url)
//     request.onload = function(){
//         if(request.status == 200){
//             resolve(request.response)
//         }
//         else{
//             reject(Error(request.statusText))
//         }
//     }
//     request.onerror = ()=>{
//         reject(Error('network issue'))
//     }
//     request.send();
// });
// }

// testCall('https://randomuser.me/api')
// .then((response)=>{
// console.log("hurry we are avle to do");
// },(error)=>{
// console.log('error there')
// })

function testcall(url){
    return new Promise((resolve,reject)=>{
      var request = new XMLHttpRequest();
      request.open('Get',url)
      request.onload = ()=>{
        if(request.status == 200){
          resolve(request.response)
        }
        else{
          reject(Error(request.statusText))
        }
      }
      request.onerror = ()=>{
        reject(Error('network issues'))
      }
      request.send();
      
    });
 }
 
 testcall('https://randomuser.me/api')
 .then((response)=>{
   console.log("it worked")
 },(error)=>{
   console.log("error")
 })
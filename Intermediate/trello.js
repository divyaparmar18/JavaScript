// const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

// // const sayHello = function(name){
// //     // console.log('hy user');
// //     console.log(`hey ${name}`);
// // }

// days.forEach(function(day,index){
//     console.log(day,index);  
// })

// for (let index = days.length -1 ; index >= 0; index--) {
//     console.log(days[index])
    
// }

const myTodos = [];

myTodos.push('buy bread')
myTodos.push('record videos')
myTodos.push('go to the gym')

// console.log(myTodos);
myTodos.forEach(function (todo, index){
    console.log(`your task number ${index + 1} is ${todo}`);
    
})

for (let index = myTodos.length-1; index >= 0; index--) {
    console.log(`your task number ${count++} is ${myTodos[index]}`);
}


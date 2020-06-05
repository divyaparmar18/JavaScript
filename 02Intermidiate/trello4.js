const myTodos = ['buy bread','go to the gym','record videos']
// console.log(myTodos.indexOf('go to the gym'));


const newTodos = [{
    title : 'buy bread',
    isDone : false,
},{
    title : 'go to the gym',
    isDone : false,
},{
    title : 'record videos',
    isDone : true,
}]

// let index = newTodos.findIndex(function(todo){
//     console.log(todo);
    
//     return todo.title === 'go to the gym'
// })
// console.log(index);

// const findTodo = function(myTodos,title){
//     const index = myTodos.findIndex(function(todo,index){
//         return todo.title.toLowerCase() === title.toLowerCase();
//     })
//     return myTodos[index]

// }
// let printMe = findTodo(newTodos,'buy Bread')

// console.log(printMe);

const findTodo = function(myTodos,title){
    const titleReturned = myTodos.find(function(todo,index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}



let printMe = findTodo(newTodos,'go to the gym')
console.log(printMe);


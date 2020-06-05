const todos = [{
    title:'buy bread',
    isDone : true
},{
    title:'go to gym',
    isDone : true,
},{
    title:'record videos',
    isDone : false,
    
},{
    title:'complete js',
    isDone:false,
},{
    title : 'job',
    isDone:false
},{
    title:'calm',
    isDone:false
}]


const thingsNotDone = todos.filter((todo)=>todo.isDone === false)
console.log(thingsNotDone);

// thingsNotDone.forEach(todo =>console.log(todo.title))



 







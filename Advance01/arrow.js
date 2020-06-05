const sayHello = (name) => `hey hello ${name}`
;
// console.log(sayHello('danny'));

const todos = [{
    title:'buy bread',
    isDone : true
},{
    title:'go to gym',
    isDone : false,
},{
    title:'record videos',
    isDone : false
}]

const thingsDone = todos.filter((todo)=>{
    return todo.isDone === true
})

// console.log(thingsDone);

const camera = {
    price :600,
    weight : 2000,
    myDescription : function(){
        return `this canon camera is of ${this.price}`
    }
}




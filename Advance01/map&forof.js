var john = {
    name : 'I am john',
    age : 24,
    isActive : true

}

var mary = {
    name : 'I am marry',
    age : 23,
    isActive : true
}
var sam = {
    name : 'i am sam',
    age : 29,
    isActive : false
}

let users = new Map;
// console.log(typeof(users))

users.set('john',john);
users.set('mary',mary)
users.set('sam',sam)

console.log(users.size)
console.log(users.get('john'))
console.log(users.values())

for (const key of users.keys()) {
    console.log(key)
    
}
for (const value of users.values()) {
    console.log(value)
}

for (const [key,values] of users.entries()) {
    console.log(`the name of key ${key} is ${values.name}`)
}

users.forEach((values, key)=>{
    console.log(`the name of key ${key} is ${values.name}`)
})

var arr = [['one',1],['two',2],['three',3]]

var newArr = new Map(arr)
console.log(newArr)


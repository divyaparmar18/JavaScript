let symbl = Symbol('batman');
let symbl1 = Symbol('batman')
// console.log(symbl);
// console.log(typeof(symbl));
console.log(symbl == symbl1);
// console.log(typeof(symbl));

let obj = {
    batman : 'bruce',
    power : 'detactive',
    [symbl] : 2345
}

console.log(obj);

//use case 1
const M_key = Symbol();
let obj = {};

obj[M_key] = 9879

//use case 2

const colorRed = Symbol('Red')






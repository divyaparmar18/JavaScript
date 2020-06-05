// alert('hii')

// console.log(document.title);

// document.title = 'i got'
// console.log(document.getElementById('idone'));
// console.log(document.getElementsByClassName('classOne'));

// const myElement = document.querySelectorAll('p')
// console.log(myElement[4]);

// const myElementOne = document.querySelectorAll('#idone')
// console.log(myElementOne);

// const myPELements = document.querySelector('p')
// myPELements.textContent = "this is being chnged using js"

const myPELements = document.querySelectorAll('p');

myPELements.forEach(element => {
    element.textContent = 'i am chngd using js loop'
});

const myParah = document.createElement('p')
myParah.textContent = 'i was added via js'

document.querySelector('body').appendChild(myParah)

document.querySelector('button').addEventListener('click',(event)=>{
    event.target.textContent = 'I was clicked'
})

//track input form

document.querySelector('#myform').addEventListener('input',(event)=>{
    console.log(event.target.value);
    
})

var myValue = document.createTextNode("Hello World")

h.appendChild(myValue )
document.querySelector('h1').appendChild(h)






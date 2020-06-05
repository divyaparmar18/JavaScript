let myYouTubeVideo = {
    title : 'loops in javascript',
    length : 15,
    author : 'Zoyaa',
    videoDiscription : 'this is a video discription and a long one'
}

let myYouTubeVideoOne = {
    title : 'functions in javascript',
    length : '12',
    author : 'Zoyaa',
    videoDiscription : 'this is a video discription and a long one'
}

// console.log(myYouTubeVideo);
// console.log(`Hey new Video on ${myYouTubeVideo.title} by ${myYouTubeVideo.author}`);

//Assignment

// let myCourse = {
//     name : 'javascript',
//     author : 'Zoyaa',
//     price : 799,
//     courseDiscription : "this is a js course based on you don't know js"
// }

// myCourse.name = 'hvzufdlbhziluf'

// console.log(`There is a ${myCourse.name} course by author ${myCourse.author} at price ${myCourse.price}`)
// console.log(myCourse);

let changeVideoLength = (function(myObj){
    return (`time of this video is : ${myObj.length + 3}`)

})
let changeObject = (function(myObj){
    return {
        formatOne : `time of this video is : ${myObj.length + 3}` ,
        formatTwo : `time of this video is : ${myObj.length + 5}` 
    }
})

// console.log(changeVideoLength(myYouTubeVideo));
let addOne = (changeObject(myYouTubeVideo));

console.log(addOne.formatOne);

console.log(myYouTubeVideo);









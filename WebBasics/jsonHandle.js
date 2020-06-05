const student = {
    name : "john",
    age : 27,
    active : true,
}

//convert object into string to be stored into local storage

var studentObjToString = JSON.stringify(student);

// localStorage.setItem('student',studentObjToString)

console.log(typeof(studentObjToString));

const toJson = JSON.parse(studentObjToString)

console.log(typeof(toJson));

console.log(toJson.age);





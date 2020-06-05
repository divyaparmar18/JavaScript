let getGrades = (function(marks,totalMarks){
    let grade;
    let percent = (marks/totalMarks)*100
    if(percent >= 90){
        grade = 'A'
    }
    else if(percent >= 75 ){
        grade = 'B'
    }
    else if(percent >= 60 ){
        grade = 'c'
    }
    else if(percent >= 45 ){
        grade = 'D'
    }
    else{
        grade = 'E'
    }
    return(`your percent is ${percent} % so your grade is ${grade}`)
})

console.log(getGrades(460,500));

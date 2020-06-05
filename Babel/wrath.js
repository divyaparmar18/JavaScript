let wrath = "angry"

let myObj = {
  user: 'john',
  score : 200,
  angry : 99,
  highScore(){
  return("your score is " + this.score)
}
};
console.log(myObj.score)
  
console.log(myObj.highScore())

console.log(myObj[wrath])

class User {
    constructor(firstName,lastName,credits){
        this.firstName = firstName;
        this.lastName = lastName;
        this.credits = credits;
    

    }

    getFullName (){
          return  `${this.firstName} ${this.middleName} ${this.lastName} is my full name`
         
    }
    editName(newName){
        const myName = newName.split(' ') 
        this.firstName = myName[0]
        this.lastName = myName[1]
    }
    getMiddleName(middleName){
        this.middleName = middleName;
    }
}

class Teacher extends User{
    constructor(firstName,lastName,credits,subject){
        super(firstName,lastName,credits);
        this.subject = subject
    }
    getFullName (){
        return  `${this.firstName} ${this.middleName} ${this.lastName} is my full name and I teach ${this.subject}`
       
  }
}

var john = new Teacher('john','patel',34,'python');

const samme = new User();

// john.editName('danny patel')
john.getMiddleName("pratik")
console.log(john.getFullName());
// console.log(samme);


 
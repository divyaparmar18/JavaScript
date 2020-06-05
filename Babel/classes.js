class Marvel {
    constructor(name){
        this.name = name;
    }

    superPower(){
        return("here is your superpower named : " + this.name);
        
    }
}

let superman = new Marvel("knt");
console.log(superman.superPower());
console.log(superman.name);



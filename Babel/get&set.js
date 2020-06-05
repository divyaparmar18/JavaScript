class Driver{
    constructor(name){
      this._name = name
    }
    
    get myName(){
      return this._name
    }
    
    set myName(val){
        if(val.length > 6){
      this._name = val
        }
    }
    
  }
  
  let drive = new Driver("john");
  
  console.log(drive.myName)
  
  drive.myName = "dannyPatel"
  
  console.log(drive.myName)
  
  
//jshint esnext = true

let pikachu = {
    name : "pickachu",
    power : " I can electrify",
    
  }
  
  let cliferry = {
    name : "cliferry",
    power : " I am cute",
    
  }
  let charmender = {
    name : "charmender",
    power : " I throw fire" ,
    
  }
  
  let pokemon = new Map();
  pokemon.set("pika",pikachu);
  pokemon.set("clif",cliferry);
  pokemon.set("char",charmender)
  
  // console.log(pokemon.size)
  // console.log(pokemon.get("char"));
  // console.log(pokemon.keys())
  
  // for (key of pokemon.keys()){
  //   console.log(key)
  // }
  
  // for (val of pokemon.values())
  //   console.log(val)
// }

for (a of pokemon){
    console.log(a)
  }
  
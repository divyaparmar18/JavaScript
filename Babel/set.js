let marvel = new Set(["batman","flash","batman"]);

marvel.add("superman")
marvel.add('superman')
marvel.add('hulk')

for(a of marvel){
  console.log(a)
}

console.log(marvel.has('wonderwomen'));
marvel.delete('superman')

for(a of marvel){
  console.log(a)
}





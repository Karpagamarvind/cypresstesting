var array =[12,13,14,15,16]

//var evenarray=array.filter(score=>score%2==0)

//console.log(evenarray)

//var mapparray=evenarray.map(score=>score*3)

//console.log(mapparray)

let final=array.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)

console.log(final)
console.log("NEW CHECKOU")
added new ListeningStateChangedEvent
var person = {firstName:"Farshid", lastName:"Farjad", age:38, eyeColor:"black"};
console.log(person);
function printObject(object){
  for (var properity in object) {
    console.log("key => " + properity + ",  value => " + object[properity]);
  }
}
printObject(person);
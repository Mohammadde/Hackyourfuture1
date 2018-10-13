let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;


console.log(o1);
console.log(o2);
console.log(o3);

o1.foo = "black"
console.log(o1);
console.log(o2); //changing o1 will not change o2
console.log(o3); //changing o1 will not change o3
console.log("changing o1 will not change o3");
console.log("changing o1 will not change o2");

o2.foo = "white"
console.log(o1); //changing o2 will not change o1
console.log(o2); 
console.log(o3); //changing o2 will change o3 
console.log("changing o2 will change o3");

o3.foo = "pink";
console.log(o1); //changing o3 will not change o1
console.log(o2); //changing o3 will change o2
console.log(o3);
console.log("changing o3 will change 02");
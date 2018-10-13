let x = [1,2,3];
let y = [1,2,3];
let z = y; //
x == y ? console.log("they are equal") : console.log("they are not equal!"); //they are not equal
x === y ? console.log("they are equal") : console.log("they are not equal!");//they are not equal
z == x ? console.log("they are equal") : console.log("they are not equal!");//they are not equal
z === x ? console.log("they are equal") : console.log("they are not equal!");//they are not equal
z == y ? console.log("they are equal") : console.log("they are not equal!");//they are equal. 
z === y ? console.log("they are equal") : console.log("they are not equal!");//they are equal.
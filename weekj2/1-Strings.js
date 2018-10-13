let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log("Original String is: " + myString);
console.log("The length of myString is: " + myString.length);
myString = myString.replace(/,/g , " ");
console.log("The new myString is: " + myString);
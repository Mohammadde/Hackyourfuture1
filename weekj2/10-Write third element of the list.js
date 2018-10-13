console.log("Third item of the list is: " + list[2]);

//9
function vehicle(color,code,age){
        if(age > 1) {
            console.log('a ' + color + ' used ' + list[code])
        } else if(age <= 1) {
            console.log('a ' + color + ' new ' + list[code])
        } 
}
console.log("vehicle('green', 3, 1) ===>  " + vehicle("green", 3, 1));
vehicle("green", 3, 1);
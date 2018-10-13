function vehicleType(color, code, age) {
    if (code == 1 && age <= 1) {
      return "a " + color + " new " + "car"; 
    }else if(code == 1 && age > 1) {
      return "a " + color + " old " + "car";
    }
    else if (code == 2 && age <= 1){
      return "a " + color + " new " + "motorbike"; 
    }
    else if (code == 2 && age > 1){
      return "a " + color + " old " + "motorbike"; 
    }
}
console.log("vehicleType('blue', 1, 5)  ===>  " + vehicleType("blue", 1, 5));
console.log("vehicleType('red', 1, 1)   ===>  " + vehicleType("red", 1, 1));
console.log("vehicleType('blue', 2, 3)  ===>  " + vehicleType("blue", 2, 3));
console.log("vehicleType('black', 2, 1) ===>  " + vehicleType("black", 2, 1));
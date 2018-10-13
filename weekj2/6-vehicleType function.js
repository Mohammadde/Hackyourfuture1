function vehicleType(color, code) {
    if (code == 1) {
      return "a " + color + " " + "car"; 
    } else if (code == 2){
      return "a " + color + " " + "motorbike"; 
    }
  }
  console.log("vehicleType('blue', 1) ===> " + vehicleType("blue", 1));
  console.log("vehicleType('red', 2) ===> " + vehicleType("red", 2));
var vechileList = ["car", "motorbike", "caravan", "bike"];
let message = "Amazing Joe's Garage, we service";
function Advertise(list, msg) {
  for( i = 0; i < list.length; i++){
    if(i == 0) {
      msg += " " + list[i]+"s";
    }else if (i == list.length-1) {
      msg += " and " + list[i]+"s.";
    }else {
      msg += ", " + list[i]+"s";
    }
  }
  return msg;
}

console.log("The list is: " + vechileList);
console.log(Advertise(vechileList, message));
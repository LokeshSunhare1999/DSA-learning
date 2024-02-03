//======================================
var fruits = [];
fruits.push("apple");
fruits.push("mango");
console.log("---", fruits);

fruits.pop();
console.log(fruits); // ['apple']
// ======================================

function arrayBuilder(one, two, three) {
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}

const simpleArr = arrayBuilder("apple", "pear", "plum");
console.log("SimpleArr", simpleArr);

var car = {};

car.mileage = 98765;
car.color = "red";
console.log(car);

car.turnKey = function () {
  console.log("Engine running");
};
car.lightsOn = function () {
  console.log("The lights are on.");
};
console.log("car", car.turnKey());
console.log("car", car.lightsOn());

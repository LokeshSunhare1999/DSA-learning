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

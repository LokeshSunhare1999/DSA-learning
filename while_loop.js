let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
console.log("Counting completed!");

let j = 5;
while (j >= 1) {
  console.log(j);
  j = j - 1;
}
console.log("Countdown finished!");

let year = 2018;
while (year <= 2022) {
  console.log(year);
  year = year + 1;
}
var cubes = "ABCDEFG";
//styling console output using CSS with a %c format specifier
for (let i = 0; i < cubes.length; i++) {
  var styles =
    "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
  console.log("%c" + cubes[i], styles);
}

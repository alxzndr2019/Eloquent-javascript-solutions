/////////LOOPING A TRIANGLE////////
var hash = "#";
for (hash.length = 1; hash.length < 8; hash += "#") {
  console.log(hash);
}
//////////FIZZBUZZ///////////////
x = a % 3 == 0;
y = a % 5 == 0;
if (x) {
  str += "fizz";
}
if (y) {
  str += "buzz";
}
if (!(x || y)) {
  str += a;
}
str += "\n";

console.log(str);
///////////////CHESSBOARD///////////////
//create a variable and assign a space to it
let result = " ";
//create a nested for loop for the 8 X 8 tiles.
for (let x = 0; x < 8; x++) {
  for (let z = 0; z < 8; z++) {
    //Replace each even character by space
    if (0 == (z + x) % 2) {
      result += " ";
    } else if (0 != (z + x) % 2) {
      //otherwise replace each odd character by a "#"
      result += "#";
    }
  }
  //to keep each line blocks of 8, use \n
  result += "\n";
}
//to print in a straight line, console.log outside the forloop
console.log(result);

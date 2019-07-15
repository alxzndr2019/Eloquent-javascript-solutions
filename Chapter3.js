//////MINIMUM/////////
function min(a, b) {
  let mine = Math.min(a, b);
  return mine;
}
console.log(min(5, 2));
//////RECURSION///////
function isEven(x) {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(50));
///////BEAN COUNTING///////
function getB(string) {
  var placesOfB = [];
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == "b") {
      placesOfB.push(i);
    }
  }
  return placesOfB;
}

console.log(getB(string));

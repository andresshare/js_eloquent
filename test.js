//CODE 1

let stringEmpty = '';

for (let i = 0; i < 7; i++) {
    stringEmpty += '#';
    console.log(stringEmpty);
}

//CODE2
function fizzBuzz() {
  for (i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log("FizzBuzz");
    } else if ((i % 3 !== 0) && (i % 5 === 0)) {
      console.log("Buzz");
    } else if ((i % 3 === 0) && (i % 5 !== 0)) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}


console.log(fizzBuzz())

//code3

function chessTable(number) {

let size = number;
let board = "";

for (let i = 1; i <= size; i++) {
  for (let j = 1; j <= size; j++) {
    if ((i + j) % 2 == 0) { 
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n"; 
}  
 return board
}

console.log(chessTable(8));

//code 4 
var min = function(x, y) {
    return (x <= y) ? x : y;
};

//code 5

ar isEven = function(num) {
    num = Math.abs(num); 
    if (num === 0)
        return true;
    else if (num === 1)
        return false;
    else
        return isEven(num - 2);
};


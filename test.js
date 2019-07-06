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

let isEven = function(num) {
    num = Math.abs(num); 
    if (num === 0)
        return true;
    else if (num === 1)
        return false;
    else
        return isEven(num - 2);
};

//code 6

let countString = function(str){
  return str.match(/B/g).length
}

console.log(countString('BBC'))

//code 7


var range = function(start, end, step) {
    var arr = [];
    for (var i = start; step > 1 || step === undefined ? i <= end : i >= end; step ? i = i + step : i++)
        arr.push(i);
    return arr;
};

var sum = function(arr) {
    return arr.reduce(function(x, y) {
        return x + y;
    });
};

//code 8

var reverseArray = function(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--)
        newArr.push(arr[i]);
    return newArr;
};
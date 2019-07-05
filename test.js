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


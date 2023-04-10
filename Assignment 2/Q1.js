// Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

function addNumberClosure(number) {
  function addNumber(num) {
    return num + number;
  }
  return addNumber;
}


let outerFunction = addNumberClosure(5);
console.log(outerFunction(10));



var currentNumber = 1;
var previousNumber = 0;
var temp;

while (currentNumber < 100) {
    console.log(currentNumber);
    temp = currentNumber;
    currentNumber += previousNumber;
    previousNumber = temp;
}
var currentNumber = 1,
    previousNumber = 0,
    temp,
    interval = 1000;

while (currentNumber < interval) {
    console.log(currentNumber);
    temp = currentNumber;
    currentNumber += previousNumber;
    previousNumber = temp;
}
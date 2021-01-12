function fibonacci(maxNumber) {
    var currentNumber = 1,
    previousNumber = 0,
    tempNumber;

    while (currentNumber < maxNumber) {
        console.log(currentNumber);
        tempNumber = currentNumber;
        currentNumber += previousNumber;
        previousNumber = tempNumber;
    }
}

fibonacci(100);


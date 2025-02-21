let currentInput = '';
        let firstNumber = null;
        let operator = null;

        function appendNumber(num) {
            currentInput += num;
            updateDisplay();
        }

        function setOperator(op) {
            if (currentInput === '') return;
            if (firstNumber === null) {
                firstNumber = parseFloat(currentInput);
                operator = op;
                currentInput = '';
            }
            updateDisplay();
        }

        function calculateResult() {
            if (firstNumber === null || currentInput === '') return;
            let secondNumber = parseFloat(currentInput);
            let result;

            switch (operator) {
                case '+':
                    result = firstNumber + secondNumber;
                    break;
                case '-':
                    result = firstNumber - secondNumber;
                    break;
                case '*':
                    result = firstNumber * secondNumber;
                    break;
                case '/':
                    result = secondNumber !== 0 ? firstNumber / secondNumber : 'Error';
                    break;
                default:
                    return;
            }
            
            currentInput = result.toString();
            firstNumber = null;
            operator = null;
            updateDisplay();
        }

        function clearDisplay() {
            currentInput = '';
            firstNumber = null;
            operator = null;
            updateDisplay();
        }

        function updateDisplay() {
            document.getElementById('display').value = currentInput;
        }
// Shunting Yard algorithm:
function infixToPostfix(expression) {
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };

    const isOperator = (char) => ['+', '-', '*', '/', '^'].includes(char);
    
    const output = [];
    const stack = [];

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                output.push(stack.pop());
            }
            stack.pop(); // Pop the '('
        } else if (isOperator(char)) {
            while (
                stack.length > 0 &&
                isOperator(stack[stack.length - 1]) &&
                precedence[char] <= precedence[stack[stack.length - 1]]
            ) {
                output.push(stack.pop());
            }
            stack.push(char);
        } else {
            // Operand
            output.push(char);
        }
    }

    while (stack.length > 0) {
        output.push(stack.pop());
    }

    return output.join('');
}

const infixExpression = "a+b-c+d*(e-f)/g+(h*(i/j))";
const postfixExpression = infixToPostfix(infixExpression);
console.log(postfixExpression); // Output: "ab+c-def-*g/+hij/*+"

// Given an array of N elements, find the next greater element for each element in the array, print -1 if it does not exits. Refer to the sample I/O for better understanding

function findNextGreaterElements(arr) {
    const result = [];
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
            result[stack.pop()] = arr[i];
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        result[stack.pop()] = -1;
    }

    return result;
}

const inputArray = [4, 5, 2, 10, 8];
const nextGreaterElements = findNextGreaterElements(inputArray);

console.log(nextGreaterElements);

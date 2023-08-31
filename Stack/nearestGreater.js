function findNextGreaterElements(arr) {
    const n = arr.length;
    const result = new Array(n).fill(-1);
    const stack = [];

    for (let i = 0; i < n * 2; i++) {
        const currentIndex = i % n;
        while (stack.length > 0 && arr[currentIndex] > arr[stack[stack.length - 1]]) {
            const poppedIndex = stack.pop();
            result[poppedIndex] = arr[currentIndex];
        }
        if (i < n) {
            stack.push(currentIndex);
        }
    }

    return result;
}

const inputArray = [3, 1, 4, 2, 7, 5, 8, 6];
const nextGreaterElements = findNextGreaterElements(inputArray);

console.log(nextGreaterElements);

function mergeSortDescending(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return mergeDescending(mergeSortDescending(left), mergeSortDescending(right));
}

function mergeDescending(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage:
const n = 5;
const arr = [2, 3, 1, 4, 5];
const sortedArrayDescending = mergeSortDescending(arr);

console.log(sortedArrayDescending.join(' ')); // Output: 5 4 3 2 1

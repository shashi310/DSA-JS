function quickSortDescending(arr, left = 0, right = arr.length - 1) {
    if (arr.length > 1) {
        let index = partitionDescending(arr, left, right);

        if (left < index - 1) {
            quickSortDescending(arr, left, index - 1);
        }

        if (index < right) {
            quickSortDescending(arr, index, right);
        }
    }

    return arr;
}

function partitionDescending(arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (arr[i] > pivot) {
            i++;
        }

        while (arr[j] < pivot) {
            j--;
        }

        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }

    return i;
}

// Example usage:
const n = 5;
const arr = [2, 3, 1, 4, 5];
const sortedArrayDescending = quickSortDescending(arr);

console.log(sortedArrayDescending.join(' ')); // Output: 5 4 3 2 1

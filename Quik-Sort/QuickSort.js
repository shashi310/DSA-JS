function quickSort(arr, left = 0, right = arr.length - 1) {
    if (arr.length > 1) {
        let index = partition(arr, left, right);

        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }

        if (index < right) {
            quickSort(arr, index, right);
        }
    }

    return arr;
}

function partition(arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }

        while (arr[j] > pivot) {
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
const N = 5;
const arr = [3, 5, 0, 9, 8];
const sortedArray = quickSort(arr);

console.log(sortedArray.join(' ')); // Output: 0 3 5 8 9

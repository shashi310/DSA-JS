function findLargestIncreasingArray(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    // Find the first decreasing element from the left
    while (left < right && arr[left] < arr[left + 1]) {
      left++;
    }
  
    // Find the first decreasing element from the right
    while (right > left && arr[right] < arr[right - 1]) {
      right--;
    }
  
    // Remove the middle subarray
    let subarrayLength = right - left - 1;
    let result = arr.slice(0, left + 1).concat(arr.slice(right));
  
    // Check if the resulting array is increasing
    let isIncreasing = true;
    for (let i = 0; i < result.length - 1; i++) {
      if (result[i] >= result[i + 1]) {
        isIncreasing = false;
        break;
      }
    }
  
    if (isIncreasing) {
      return result;
    } else {
      // Remove one element from the left or right subarray
      let leftArray = arr.slice(0, left).concat(arr.slice(left + 1));
      let rightArray = arr.slice(0, right).concat(arr.slice(right + 1));
  
      // Find the largest increasing array after removal from the left and right
      let largestLeft = findLargestIncreasingArray(leftArray);
      let largestRight = findLargestIncreasingArray(rightArray);
  
      // Return the larger of the two arrays
      if (largestLeft.length >= largestRight.length) {
        return largestLeft;
      } else {
        return largestRight;
      }
    }
  }
  
  // Example usage:
  const array = [1, 3, 2, 4, 7, 6, 8, 9, 5, 11, 13, 12];
  const largestIncreasingArray = findLargestIncreasingArray(array);
  console.log("Largest increasing array:", largestIncreasingArray);
  
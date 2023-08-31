function findUpperBound(arr, k) {
    let left = 0;
    let right = arr.length - 1;
    let upperBound = arr.length; // Initialize the upper bound to the length of the array
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] > k) {
        // If the element at mid is greater than k, update the upper bound and search the left half
        upperBound = mid;
        right = mid - 1;
      } else {
        // If the element at mid is less than or equal to k, search the right half
        left = mid + 1;
      }
    }
  
    return upperBound;
  }
  
  // Test cases
  const arr1 = [2, 4, 6, 8, 10];
  const k1 = 5;
  console.log(findUpperBound(arr1, k1)); // Output: 2 (Index of the first number greater than 5 is 2)
  
  const arr2 = [1, 3, 5, 7, 9];
  const k2 = 10;
  console.log(findUpperBound(arr2, k2)); // Output: 5 (Index of the first number greater than 10 is 5)
  
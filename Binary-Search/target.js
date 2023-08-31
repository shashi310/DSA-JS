function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      const mid = ((low + (high-low)/2));
      
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return -1;
  }
  
  // Example usage:
  const sortedArray = [2, 4, 7, 10, 13, 19, 23];
  const targetValue = 13;
  const resultIndex = binarySearch(sortedArray, targetValue);
  console.log("Target found at index:", resultIndex); // Output: Target found at index: 4
  
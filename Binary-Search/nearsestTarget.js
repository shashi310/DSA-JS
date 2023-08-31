function binarySearchNearest(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let nearestIndex = -1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
  
      // Update the nearestIndex if the current element is closer to the target
      if (nearestIndex === -1 || Math.abs(arr[mid] - target) < Math.abs(arr[nearestIndex] - target)) {
        nearestIndex = mid;
      }
  
      if (arr[mid] === target) {
        return mid; // Target found, return its index
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return nearestIndex;
  }
  
  // Example usage:
  const sortedArray = [1, 2, 3, 4, 7, 10, 20];
  const targetValue = 6;
  const resultIndex = binarySearchNearest(sortedArray, targetValue);
  console.log("Nearest target found at index:", resultIndex); // Output: Nearest target found at index: 4 (index of element 13)
  
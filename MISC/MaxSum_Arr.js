function maxSumFromCorners(arr, k) {
    const n = arr.length;
    if (k > n) {
      return null; // Invalid input
    }
  
    let left = 0;
    let right = n - 1;
    let sum = 0;
  
    // Pick k elements from either end until k becomes 0
    while (k > 0) {
      if (arr[left] >= arr[right]) {
        sum += arr[left];
        left++;
      } else {
        sum += arr[right];
        right--;
      }
      k--;
    }
  
    return sum;
  }
  
  // Example usage:
  const array = [1, 4, 2, 3, 5, 6, 8, 7];
  const k = 3;
  
  const maxSum = maxSumFromCorners(array, k);
  console.log("Maximum sum:", maxSum);
  
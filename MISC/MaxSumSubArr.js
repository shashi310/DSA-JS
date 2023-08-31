// function maxSubarraySum(arr) {
//     let maxSum = arr[0];
//     let currentSum = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       // Compare current element with the sum of current element and previous sum
//       currentSum = Math.max(arr[i], currentSum + arr[i]);
  
//       // Update the maximum sum
//       maxSum = Math.max(maxSum, currentSum);
//     }
  
//     return maxSum;
//   }
  
//   // Example usage:
//   const array = [1, -3, 2, 1, -1, 4, -2, 5];
//   const maxSum = maxSubarraySum(array);
//   console.log("Maximum sum of subarray:", maxSum);
  


// Using the Sliding window

function maxSubarraySum(arr) {
    let maxSum = 0;
    let currentSum = 0;
    let start = 0;
  
    for (let end = 0; end < arr.length; end++) {
      // Add the current element to the window
      currentSum += arr[end];
  
      // Shrink the window if the current sum becomes negative
      while (currentSum < 0) {
        currentSum -= arr[start];
        start++;
      }
  
      // Update the maximum sum if the current sum is greater
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  
  // Example usage:
  const array = [1, -3, 2, 1, -1, 4, -2, 5];
  const maxSum = maxSubarraySum(array);
  console.log("Maximum sum of subarray:", maxSum);
  

//   In this code, the maxSubarraySum function takes an array arr as input. It initializes variables maxSum and currentSum to 0, and start to 0. maxSum stores the maximum sum found so far, currentSum keeps track of the sum of the current subarray, and start represents the starting index of the current subarray.

// The function uses a sliding window approach with two pointers, start and end. The end pointer iterates through the array, adding the current element to the currentSum.

// If the currentSum becomes negative, it means that including the current element in the subarray would decrease the overall sum. In this case, the function shrinks the window by moving the start pointer to the right and subtracting the corresponding element from the currentSum.

// After each iteration, the function compares the currentSum with the maxSum and updates maxSum if the currentSum is greater.

// Finally, the function returns the maxSum, which represents the maximum sum of a subarray within the given array.

// You can modify the array variable to test the code with different input arrays.
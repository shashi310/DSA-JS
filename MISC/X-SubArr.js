
// Given a array A having N positive integers. Count all the subarrays of A
// having length X, such that each subarray has no integer greater than
// K.

  // Example usage:
  const A = [1, 2, 3, 4, 5];
  const X = 3;
  const K = 3;
  const subarrayCount = countSubarrays(A, X, K);
  console.log(subarrayCount); // Output: 3

// code

function countSubarrays(A, X, K) {
    const n = A.length;
    let count = 0;
  
    for (let i = 0; i <= n - X; i++) {
      let isValidSubarray = true;
  
      for (let j = i; j < i + X; j++) {
        if (A[j] > K) {
          isValidSubarray = false;
          break;
        }
      }
  
      if (isValidSubarray) {
        count++;
      }
    }
  
    return count;
  }
  

  
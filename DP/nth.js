// Compute the Nth term A(n) of the series, where
// A(0) = 10 , A(1) = 10 , A(2) = -19
// A(i) = (i/6) + (A(i-1) + A(i-3)) , if i > 2 and i is divisible by both 2 and 3.
// A(i) = (i/2) - (A(i-1) + A(i-2)) , if i > 2 and i is only divisible by 2.
// A(i) = (i/3) + (A(i-1) + A(i-3)) , if i > 2 and i is only divisible by 3.
// A(i) = A(i-1) , otherwise




function computeNthTerm(n) {
  const dp = [];
  
  // Initialize the base cases
  dp[0] = 10;
  dp[1] = 10;
  dp[2] = -19;
  
  // Compute the remaining terms using dynamic programming
  for (let i = 3; i <= n; i++) {
    if (i % 6 === 0 && i % 2 === 0 && i % 3 === 0) {
      dp[i] = (i / 6) + (dp[i - 1] + dp[i - 3]);
    } else if (i % 2 === 0) {
      dp[i] = (i / 2) - (dp[i - 1] + dp[i - 2]);
    } else if (i % 3 === 0) {
      dp[i] = (i / 3) + (dp[i - 1] + dp[i - 3]);
    } else {
      dp[i] = dp[i - 1];
    }
  }
  
  return dp[n];
}

// Test the computeNthTerm function
const n = 5;
const nthTerm = computeNthTerm(n);
console.log(`A(${n}) = ${nthTerm}`);

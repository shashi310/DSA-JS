// Sandhya is running up a staircase with N steps, and can hop(jump) eit
// her 1 step, 2 steps or 3 steps at a time. You have to count, how many
// possible ways Sandhya can run up to the stairs.


// No of the ways for n=4 are:- 7
// 1 1 1 1 
// 1 1 2
// 2 1 1
// 1 2 1
// 1 3
// 3 1
// 2 2


// code

console.log(runthisprogram(4));

function runthisprogram(n){
  
    if (n == 0 || n == 1) {
    return 1;
  } else if (n == 2) {
    return 2;
  } else {
    let dp = new Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }
    return dp[n];
  }




}

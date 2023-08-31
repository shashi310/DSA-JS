//  Given a string s, return the longest palindromic substring in s.

function longestPalindrome(s) {
    if (s.length < 1) {
      return "";
    }
  
    const n = s.length;
    let longest = "";
    const dp = Array.from({ length: n }, () => Array(n).fill(false));
  
    // All substrings of length 1 are palindromes
    for (let i = 0; i < n; i++) {
      dp[i][i] = true;
      longest = s[i];
    }
  
    let maxLen = 1;
  
    // Check for substrings of length 2
    for (let i = 0; i < n - 1; i++) {
      if (s[i] === s[i + 1]) {
        dp[i][i + 1] = true;
        longest = s.substring(i, i + 2);
        maxLen = 2;
      }
    }
  
    // Check for substrings of length 3 and above
    for (let len = 3; len <= n; len++) {
      for (let start = 0; start <= n - len; start++) {
        const end = start + len - 1;
  
        if (s[start] === s[end] && dp[start + 1][end - 1]) {
          dp[start][end] = true;
  
          if (len > maxLen) {
            longest = s.substring(start, end + 1);
            maxLen = len;
          }
        }
      }
    }
  
    return longest;
  }
  
  // Example usage:
  const inputString = "babad";
  const result = longestPalindrome(inputString);
  console.log(result); // Output: "bab" or "aba" (both are valid palindromes)
  
function isPalindrome(str) {
    // Remove any non-alphabetic characters and convert to lowercase
    str = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  
    // Check if the string is empty or has only one character
    if (str.length <= 1) {
      return true;
    }
  
    // Compare characters from both ends of the string
    let left = 0;
    let right = str.length - 1;
  
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
  
    return true;
  }
  
  // Example usage:
  const string = "A man, a plan, a canal: Panama";
  
  if (isPalindrome(string)) {
    console.log("The string is a palindrome.");
  } else {
    console.log("The string is not a palindrome.");
  }
  
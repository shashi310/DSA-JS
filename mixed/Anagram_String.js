// ‘Worth’ is an anagram of 'throw'
// a word or phrase that is made by arranging the letters of another word or phrase in a different order




function areAnagrams(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^a-zA-Z]/g, "").toLowerCase();
    str2 = str2.replace(/[^a-zA-Z]/g, "").toLowerCase();
  
    // Check if the lengths are different
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Create frequency counters for each string
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};
  
    // Count the frequency of characters in str1
    for (let char of str1) {
      frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }
  
    // Count the frequency of characters in str2
    for (let char of str2) {
      frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }
  
    // Compare the frequency counters
    for (let key in frequencyCounter1) {
      if (frequencyCounter1[key] !== frequencyCounter2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  const string1 = "listen";
  const string2 = "silent";
  
  if (areAnagrams(string1, string2)) {
    console.log("The strings are anagrams.");
  } else {
    console.log("The strings are not anagrams.");
  }
  
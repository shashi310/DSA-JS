// Write Js code- using Binary search, where an arr contains certains same elements and you task is to find the index in form of an arr of given target


function findFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let firstOccurrence = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        firstOccurrence = mid;
        right = mid - 1; // Look for the target in the left subarray
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return firstOccurrence;
  }
  
  function findLastOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let lastOccurrence = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        lastOccurrence = mid;
        left = mid + 1; // Look for the target in the right subarray
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return lastOccurrence;
  }
  
  function findAllOccurrences(arr, target) {
    const firstIndex = findFirstOccurrence(arr, target);
    const lastIndex = findLastOccurrence(arr, target);
  
    if (firstIndex === -1 || lastIndex === -1) {
      // Target not found in the array
      return [];
    }
  
    // Collect all indexes of occurrences
    const occurrences = [];
    for (let i = firstIndex; i <= lastIndex; i++) {
      occurrences.push(i);
    }
  
    return occurrences;
  }
  
  // Example usage:
  const arr = [2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9];
  const target = 5;
  const result = findAllOccurrences(arr, target);
  console.log(result); // Output: [3, 4, 5] (indexes of all occurrences of 5 in the array)
  
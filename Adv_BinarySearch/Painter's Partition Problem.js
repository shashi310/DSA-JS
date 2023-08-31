// Function to check if it's possible to paint all the boards within the given time
function isPossibleToPaint(A, n, p, time) {
    let painters = 1;
    let timeTaken = 0;
  
    for (let i = 0; i < n; i++) {
      // If the time taken for the current painter exceeds the given time, it's not possible
      if (A[i] > time) {
        return false;
      }
      
      timeTaken += A[i];
  
      // If the timeTaken exceeds the given time, assign the work to the next painter
      if (timeTaken > time) {
        painters++;
        timeTaken = A[i];
      }
    }
  
    // Check if the number of painters required is less than or equal to the available painters
    return painters <= p;
  }
  
  // Function to find the minimum time to complete the job
  function findMinimumTimeToCompleteJob(A, n, p) {
    let left = Math.max(...A); // Minimum time it takes for a painter to paint a single board
    let right = A.reduce((a, b) => a + b, 0); // Maximum time it takes for a single painter to paint all boards
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (isPossibleToPaint(A, n, p, mid)) {
        // If it's possible to paint all the boards within time 'mid', move to the left half
        right = mid;
      } else {
        // Otherwise, move to the right half
        left = mid + 1;
      }
    }
  
    return left;
  }
  
  // Example usage:
  const boards = [4, 8, 1, 7, 6];
  const paintersAvailable = 3;
  const minTime = findMinimumTimeToCompleteJob(boards, boards.length, paintersAvailable);
  console.log("Minimum time to complete the job:", minTime);
  
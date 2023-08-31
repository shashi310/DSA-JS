function findMinimumTime(N, studentPositions, roomPositions) {
    // Step 1: Sort both studentPositions and roomPositions arrays
    studentPositions.sort((a, b) => a - b);
    roomPositions.sort((a, b) => a - b);
  
    let minTime = 0;
  
    // Step 2: Assign students to rooms
    for (let i = 0; i < N; i++) {
      const time = Math.abs(studentPositions[i] - roomPositions[i]);
      minTime = Math.max(minTime, time);
    }
  
    return minTime;
  }
  
  // Example usage:
  const N = 3;
  const studentPositions = [4, -4, 2];
  const roomPositions = [4, 0, 5];
  
  const minimumTime = findMinimumTime(N, studentPositions, roomPositions);
  console.log("Minimum time to hide in a room:", minimumTime, "minute(s)"); // Output: 4
  


// It's party time in a hostel, and you are partying with your friends in the hostel's lobby. You can visualise the lobby as a 1-dimensional line (x-axis). All of you are scattered along that X-axis. Suddenly, you come to know that the warden is coming to the hostel. So, all of you want to hide inside a room. So, you will be given x-coordinates of hostel rooms as well as your current location (as x-axis coordinate). Anyone can stay at his position, move one step right from x to x + 1, or move one step left
// from x to x -1. Any of these moves consume1 minute. You have to find out the minimum time in which everyone in the lobby can go to any room and hide inside.

// input-format 
// First line of input contains N whichis the total number of students present in the lobby
// Second line contains N space-separatedintegers representing current
// x-coordinates of students scattered in lobby
// The third line also contains N spaceseparated integers representing xcoordinates of the rooms present in the lobby

// 3
// 4 -4 2
// 4 0 5

// output
// 4

// Sample 1 Explanation
// Assign student at position x = 4 to room at position x = 4 : Time taken is
// 0 minutes
// Assign student at position x=-4 to room at position x = 0 : Time taken is
// 4 minutes
// Assign student at position x=2 to room at position x = 5: Time taken is 3
// minutes
// After 4 minutes all of the students are in the rooms. Since, there is no co
// mbination possible where the last student's time is less than 4,
// So, answer = 4.
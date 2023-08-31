function canAccommodateCustomers(distances, C, minDistance) {
    let count = 1;
    let prevPosition = distances[0];
    
    for (let i = 1; i < distances.length; i++) {
      if (distances[i] - prevPosition >= minDistance) {
        count++;
        prevPosition = distances[i];
      }
    }
  
    return count >= C;
  }
  
  function findLargestMinimumDistance(distances, C) {
    distances.sort((a, b) => a - b);
  
    let left = 0;
    let right = distances[distances.length - 1] - distances[0];
    let result = 0;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (canAccommodateCustomers(distances, C, mid)) {
        result = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const diningTablePositions = [1, 5, 10, 15];
  const customers = 4;
  
  const largestMinimumDistance = findLargestMinimumDistance(diningTablePositions, customers);
  console.log("Largest minimum distance:", largestMinimumDistance);
  
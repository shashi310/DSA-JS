// const map = new Map();

// // // Adding key-value pairs to the map
// // map.set("key1", "value1");
// // map.set("key2", "value2");
// // map.set("key3", "value3");

// // // Retrieving values from the map
// // const value1 = map.get("key1");
// // console.log(value1); // Output: "value1"

// // // Checking if a key exists in the map
// // console.log(map.has("key2")); // Output: true

// // // Removing a key-value pair from the map
// // map.delete("key3");

// // // Checking the size of the map
// // console.log(map.size); // Output: 2

// map.set(0,1)
// map.set(1,2)
// map.set(2,3)
// console.log(map.get(0));
// console.log(map.size);


// map.set(1,3)
// console.log(map);
// map.get(1) 
// console.log(map);



function generatePiratedromes(N) {
    const result = [];
  
    // Recursive helper function
    function backtrack(number, index, evenSum, oddSum) {
      // Base case: If the number is complete
      if (index === N) {
        result.push(number);
        return;
      }
  
      // Iterate through all possible digits
      for (let digit = (index === 0) ? 1 : 0; digit <= 9; digit++) {
        // Calculate the new sums
        const newEvenSum = index % 2 === 0 ? evenSum + digit : evenSum;
        const newOddSum = index % 2 !== 0 ? oddSum + digit : oddSum;
  
        // Ensure the sums are equal
        if (newEvenSum === newOddSum) {
          // Construct the new number with the current digit
          const newNumber = number + digit;
  
          // Recurse to the next index
          backtrack(newNumber, index + 1, newEvenSum, newOddSum);
        }
      }
    }
  
    // Start the backtracking process
    backtrack('', 0, 0, 0);
  
    return result;
  }
  
  // Example usage:
  const N = 2; // Number of digits in the Piratedromes
  const piratedromes = generatePiratedromes(N);
  
  // Print the Piratedromes in increasing order
  console.log(piratedromes.join(' '));
  
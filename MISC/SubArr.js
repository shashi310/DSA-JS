function masaiPalSubArr(A){
  for(let i=0;i<A.length;i++){
      let subArr=[]
      for(let j=i;j<A.length;j++){        
          subArr.push(A[j])
           console.log(subArr);
      }
  }
}

masaiPalSubArr([1,2,3])







// function generateSubarrays(arr) {
//     const result = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i  ; j < arr.length; j++) {
//         const subarray = arr.slice(i, j + 1 );
//         result.push(subarray);
//       }
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   const array = [1, 2, 3];
//   const subarrays = generateSubarrays(array);
//   console.log("All subarrays:", subarrays);
  
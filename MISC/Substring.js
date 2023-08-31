function masaiPalSubString(S){
  for(let i=0;i<S.length;i++){
      let substring=""
      for(let j=i;j<S.length;j++){
          substring+=S[j];
           console.log(substring);
      }
  }
}
masaiPalSubString("abc")


// inFormOf2D arr =>

// function generateSubstrings(str) {
//     const result = [];
  
//     for (let i = 0; i < str.length; i++) {
//       for (let j = i + 1 ; j <= str.length; j++) {
//         const substring = str.slice(i, j);
//         result.push(substring);
//       }
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   const string = "abc";
//   const substrings = generateSubstrings(string);
//   console.log("All substrings:", substrings);




  
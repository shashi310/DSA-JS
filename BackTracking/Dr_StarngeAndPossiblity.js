function runthisprogram(num){
    const subsets = [];
 
   backtrack(1, []);
 
   function backtrack(start, currentSubset) {
     subsets.push(currentSubset.slice());
     console.log(currentSubset.join(` `))
     for (let i = start; i <= num; i++) {
       currentSubset.push(i);
       backtrack(i + 1, currentSubset);
       currentSubset.pop();
     }
   }
 }


 console.log(runthisprogram(7));

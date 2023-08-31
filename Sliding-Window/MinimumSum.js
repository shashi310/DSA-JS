function runthisprogram(n,k,arr){
    

    // BruiteForce

    //     let minSum=Infinity; 
    //   for (let i=0; i<=n-k;i++) {
    //     let sum = 0; 
    //     for (let j=i; j<i+k; j++) {
    //       sum += arr[j];
    //     }
      //     if (sum < minSum) {
    //       minSum = sum;
    //     }
    //   }  
    //   return minSum;
    
    let currentSum = 0;
     for (let i=0; i<k; i++) {
        currentSum += arr[i];
      }
    let minSum = currentSum;
       for (let i =k; i<n; i++) {
        currentSum += arr[i] - arr[i - k];
    
        if (currentSum < minSum) {
          minSum = currentSum;
        }
      }
    
      return minSum;
      
      
      
    }
    
    // sliding window
    // n this optimized version of the code, we use a sliding window of K elements and calculate the sum of the first K elements of the array. We then slide the window through the array and calculate the sum of each K consecutive elements by adding the next element and subtracting the first element of the previous K elements. This allows us to calculate the sum of K consecutive elements in constant time. We update the minimum sum whenever we find a new sum that is smaller than the current minimum sum. This reduces the time complexity of the algorithm from O(n^2) to O(n).
    
    
    function runProgram(input){
        input=input.trim().split("\n");
        var tc=+input[0];
        let line=1
        for(let i=0;i<tc;i++){
        var test= input[line++].trim().split(" ")
        var n= +test[0]
        var k= +test[1]
        var arr= input[line++].trim().split(" ").map(Number)
        console.log(runthisprogram(n,k,arr))
        }
    
    
        
        
    // 	runthisprogram()
    }
    
    if (process.env.USER === "") {
        runProgram(``);
    } else {
            process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
            read += input;
      });
      process.stdin.on("end", function () {
            read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
      });
      process.on("SIGINT", function () {
            read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
      });
    }
let [arr,k,n]=[[-10,-5,-3,-1,1],2,5]

//output should be yes
// -10, -5, -3, -1, 1
arr.sort((a, b) => a - b)
// arr.sort((a, b) => b-a)
    // console.log(arr)
    let l=0
    let r=n-1
    let flag=false
    while(l<r){
        let diff=arr[r]-arr[l]
        // console.log(diff)
        if(diff>k){
            r--
        }else if(diff<k){
            l++
        }else if(diff==k){
            flag=true
            break;
        }
    }
    if(flag==true){
        console.log("Yes")
    }else{
        console.log("No")
    }

 
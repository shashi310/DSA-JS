// is there any subarr with the given sum(retuen true false)
let arr=[1,4,2,10,23,3,1,0,20]
let n=9
let sum=33

let window_sum=0
let j=0
for(let i=0;i<n;i++){
    while(window_sum<sum && j<n){
        window_sum+=arr[j]
        j++
    }

if(window_sum==sum){
    console.log("true")
}
window_sum-=arr[i]
i++
}
console.log("false")


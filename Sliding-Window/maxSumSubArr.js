let arr=[1,4,2,10,23,3,1,0,20]
// max sumof all subArrr pf size k
let k=4
let n=9
let max=-Infinity
let sum=0
for(let i=0;i<k;i++){
    sum+=arr[i]
}
if(sum>max){
    max=sum
}
// add the next ele and rem the prev
for(let i=k;i<n;i++){
    sum+=arr[i]
    sum-=arr[i-k]
    if(sum>max){
        max=sum
    }
}
console.log(max)

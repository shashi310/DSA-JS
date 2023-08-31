let arr=[1,4,2,10,23,3,1,0,20]
// max sumof all subArrr pf size k
let k=4
let n=9

let max_sum=Infinity
for(let i=0;i<=n-k;i++){
    let sum=0
    for(let j=i;i<i+k;j++){
        sum+=arr[j]
    }
    if(sum>max_sum){
        max_sum=sum
    }
}
console.log(max_sum)
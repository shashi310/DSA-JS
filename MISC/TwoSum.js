// Given a sorted array of integers, return indices of two numbers such th
// at they add up to a target value.
// Print -1 -1 if not found.


// function runthisprogram(n,k,arr){
//     let a=0
//     let b=n-1
// let i=-1 ; let j=-1
//     while(a<b){
//         let sum=arr[a]+arr[b]
//         if(sum==k){
//             i=a
//             j=b
//             break;
//         }
//         else if(sum<k){
//             a++
//         }
//         else if(sum>k){
//             b--
//         }
//     }
//     console.log(i,j)  
// }

// let n=4
// let k=9
// let arr=[2,7,11,15]

// let n=3
// let k=6
// let arr=[3,2,4]

// runthisprogram(n,k,arr)




function runthisprogram(nums,target){
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        const complement = target - nums[i];
        if(map.has(complement))
            return [map.get(complement),i];
        map.set(nums[i], i);
    }
    return [];
};

let n=3
let target=6
let nums=[3,2,4]

console.log(runthisprogram(nums,target));
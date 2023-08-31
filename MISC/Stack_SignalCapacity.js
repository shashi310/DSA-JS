// Signal's Capacity
// There are many signal towers present in Bangalore.Towers are aligned
// in a straight horizontal line(from left to right) and each tower transmits
// a signal in the right to left direction.
// Tower X shall block the signal of Tower Y if Tower X is present to the le
// ft of Tower Y and Tower X is taller than Tower Y. So,the power of a sign
// al of a given tower can be defined as :
// {(the number of contiguous towers just to the left of the given tower wh
// ose height is less than or equal to the height of the given tower) + 1}.
// You need to write a program that finds the power of each tower.

function runthisprogram(n,arr){
    let stack=[]
    let ans=[]
    
    for(let i=0;i<n;i++){
        let pow=1
        while(stack.length>0 && arr[i]>=arr[stack[stack.length-1]]){
            pow+=ans[stack.pop()]
        }
        ans.push(pow)
        stack.push(i)
    }
    console.log(ans.join(` `))    
}

let n1=7
let arr1=[100,80,60,70,60,75,85]
let n2=5
let arr2=[3,5,0,9,8]
runthisprogram(n1,arr1)
runthisprogram(n2,arr2)
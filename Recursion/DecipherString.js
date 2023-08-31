
let str= "a2b1c2" // output=aabcc
console.log(runthisprogram(str));

function runthisprogram(str){
    if(str===""){
        return ""
    }

let out=str[0].repeat(str[1])

return out+runthisprogram(str.substring(2))


}
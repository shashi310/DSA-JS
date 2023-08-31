// arrange the two sorted array
let arr1=[2,4,6,8,12]
let arr2=[1,3,10,11,13]
let n1=5
let n2=5
function logic(arr1,arr2,n1,n2){
    arr3= new Array(n1+n2)
    i=0;
    j=0
    k=0
    while(i<n1 && j<n2){
        if(arr1[i]<arr2[j]){
            arr3[k]=arr1[i]
            i++
            k++
        }else{
            arr3[k]=arr2[j]
            j++
            k++
        }
    }
    console.log(arr3)
}
logic(arr1,arr2,n1,n2)
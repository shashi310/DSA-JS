function masaiPalSubString(S){
    //write code here
    let max=0
    
    for(let i=0;i<S.length;i++){
        let substring=""
        for(let j=i;j<S.length;j++){
            substring=substring+S[j];
            let pln=""
             for(let k=substring.length-1;k>=0;k--){
                pln=pln+substring[k];
                if(substring==pln && max<substring.length ){
                    max=substring.length
                   
                }
            }
        }
        
    }
    console.log(max)
}
masaiPalSubString("abc")
let arr = [20,52,1,8,20,62,85,11,21];
let sum = 0;
for(let a=0;a<arr.length;a++){
    p = arr[a]
    b = String(arr[a]).split("");
    let sum = 0;
    for(let j=0; j<b.length;j++){
        let p = parseInt(b[j]);
        sum = sum + p
    }
    flag = 0;
    for(let i=2; i<sum; i++){
        if(sum%i == 0){
            flag = 1;
        }
    }
    if(flag==0){
        console.log(sum , "->" , p);
    }
}
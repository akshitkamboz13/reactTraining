//functions


function sum1(a,b){
    return a+b;
}
let c = sum1(5,4);
console.log(c);


//default paras
function sum2(a,b,c=10){
    return a+b+c;
}
let aac = sum2(5,2,2);
console.log(aac,"default");

//we can call fun before defining called hosting
//nested function
console.log(computition()(2,3));

function computition(){
    function multiply(a,b) {
        return a*b;
    }
    return multiply;
}

//closures
function cooo() {
    x=10;
    y=5;
    function mul() {
        return x*y;
    }
    return mul;    
}
console.log(cooo()());
// cooo()(); == let qq = cooo(); let rr = qq();


function coooo(x) {
    function mul(y) {
        return x*y;
    }
    return mul;    
}
console.log(coooo(10)(20));
//     ==
let qq = coooo(10);
let rr = qq(20);
console.log(rr);

// arrow function
const arfun = (c,d) => c+d; 
console.log(arfun(4,5));


const arfun2 = (c,d) => {
    return c+d;
};
console.log(arfun2(4,5));

//Timeout , Interval
setTimeout(()=>{
    console.log("hello");
},[5000])


const clock = document.getElementById("clock");
setInterval(()=>{
    console.log(new Date().getHours() , ":",new Date().getMinutes() , ":", new Date().getSeconds())
},[3000])

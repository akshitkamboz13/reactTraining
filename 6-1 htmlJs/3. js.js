let obj1 = {
    name : "ram",
    age : "2100000",
    father : "dashrat"
};

console.log(obj1);
console.log(obj1.name);

console.log(obj1["name"]);

let rrr = "age";
console.log(obj1[rrr]);

//Objects Methods and function


console.log(Object.keys(obj1));

 let obj2 = {...obj1};

 console.log(obj2);

 obj2.name = "modi";

 let obj3 = {
    car : {
        vw : "polo",
        rr : "velar"
    },
    model : "2020"
 }
console.log(obj3);

let obj4 = {...obj3};

console.log(obj3.car);
console.log(obj4.car);
obj4.car.vw = "zeta"

console.log(obj3.car);
console.log(obj4.car);

let obj5 = JSON.parse(JSON.stringify(obj3));
// obj --> JSON (by using stringify) --> obj(hard copy (by using parse))
console.log(obj5);
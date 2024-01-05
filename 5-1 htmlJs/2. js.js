//Methods



//concate
let arr1 = [1,1,15,5,25,1,5,2,65,2,45,85,5];
let arr2 = ["dds","sds","ds"];

let crr1 = arr1.concat(arr2);
console.log(crr1);

//clone
let crr2 = [].concat(arr2);
console.log(crr2);

//new method to concate
let crr3 = [...arr2,"akshit","kamboj"];
console.log(crr3);

let crr4 = arr2.concat(crr2,[1,6,5]);
console.log(crr4);

let crr5 = arr1.slice(0).concat("lalalala","jajajaja","hahahaha");
console.log(crr5);
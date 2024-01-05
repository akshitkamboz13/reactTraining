//Array

let arr1 = [1, 6, 7, 5, 6, 5, 7, 54, 1, 21];
let arr2 = ["akshit", "aman", "ankit"];
let arr3 = ["sajan", 55, "dcds"];
let arr4 = ["sajan", 55, "dcds"];

console.log(arr3 == arr4);

arr4 = arr3;
console.log(arr3 === arr4);

arr3.push("baman");
console.log(arr4);

//array properties and inbuild function
console.log(arr1.length);

console.log(arr2[0]);
console.log(arr2[arr2.length - 1]);

arr2.pop();
console.log(arr2);

arr1.sort(function (a, b) {
  return a - b;
});
console.log(arr1);

let arr5 = [];
arr5 = arr3.slice(0);
console.log(arr5);
console.log(arr5 === arr3);

arr4.unshift("neww");
console.log(arr4);
arr4.shift();
console.log(arr4);


let str1 = "Hello World";

let str2 = str1.split(" ");
let arr3 = [];
for (let i in str2) {
    arr3.push(str2[i].split("").reverse().join(""));
}
console.log(arr3.join(" "));

// another way

let reu = str1.split("").reverse().join("").split(" ").reverse().join(" ");
console.log(reu);

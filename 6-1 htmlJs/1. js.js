//array methods

let arr1 = [1,5,99,45,99,145,155,15,99,525];

let mmap = arr1.map((ii)=> arr1[ii]);
console.log(mmap);

arr1.splice(2,2,77,66);
console.log(arr1);
//filter

let arr2 = arr1.slice(2,4);
console.log(arr2);

let arr3 = arr1.find((item)=> item>5);
console.log(arr3);

let findIndex1 = arr1.findIndex((item)=> item == 99);
console.log(findIndex1);

let lastIndex = arr1.findLastIndex((item)=> item == 99);
console.log(lastIndex);

//join
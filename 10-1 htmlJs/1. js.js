let arr = [0, 3, 2, 4, 0, 6, 6, 7, 0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
        for (let j = i; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1];
        }
        arr[arr.length - 1] = 0;
    }
}

console.log(arr);

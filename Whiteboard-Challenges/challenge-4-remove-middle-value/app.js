function RemoveMiddleValue(arr) {
    let midIndex = 0;
    let length = arr.length;
    while (length > 1) {
        length -= 2;
        midIndex++;
    }
    let result = new Array(arr.length - 1);
    for (let i = 0, j = 0; i < arr.length; i++)
        if (i !== midIndex) result[j++] = arr[i];
    return result;
}

console.log(RemoveMiddleValue([1, 2, 3, 4, 5]));
console.log(RemoveMiddleValue([27, 8, 15, 73, 27]));
console.log(RemoveMiddleValue([7, 9, 13, 25, 5, 17]));

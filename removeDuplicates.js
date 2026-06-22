let array = [1, 1, 1, 2, 3, 4, 5, 6, 7, 7];

console.log(array.filter((ele, index, arr) => arr.indexOf(ele) == index));

let arr1 = [1, 2, 3, 0, 0, 0];
let arr2 = [3, 4, 6];

let i = (j = 0);
let arr1Copy = arr1.slice(0, arr1.length);

for (let i = 0; i < arr1.length; i++) {
  if (j > arr2.length || (i < arr1.length && arr1Copy[i] < arr2[j])) {
    arr1[i] = arr1Copy[i];
    i++;
  } else {
    arr1[i] = arr2[j];
    j++;
  }
}

console.log(arr1)
let arr = [1, 2, 3, 6, 2, 7,7];

let secondLargest = arr[0];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] != largest) {
    secondLargest = arr[i];
  }
}

console.log(secondLargest);

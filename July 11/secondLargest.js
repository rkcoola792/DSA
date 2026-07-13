let arr = [2, 4, 5, 1, 7];

let largest = (second = 0);

for (let i = 0; i < arr.length; i < i++) {
  if (arr[i] > largest) {
    second = largest;
    largest = arr[i];
  } else if (arr[i] > second && arr[i] != largest) {
    second = arr[i];
  }
}
console.log(second)

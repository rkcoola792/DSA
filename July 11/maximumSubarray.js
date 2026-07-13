let arr = [2, -1, 2, 3, 4, -5]

let max = 0;
let currSum = 0;

for (let i = 0; i < arr.length; i++) {
  currSum = Math.max(currSum + arr[i], arr[i]);
  max = Math.max(currSum, max);
}

console.log(max);

let arr = [3, 2, 4]
let target = 6;

//with sort
function twoSumSorted() {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else if (sum === target) {
      return [left, right];
    } else return false;
  }
}

function twoSum() {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    let rem = target - arr[i];

    if (map[rem] && map[rem] != i) {
      return [i, map[rem]];
    }
  }
}

let res = twoSum();

console.log(res);

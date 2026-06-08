function twoSum(arr, target) {
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

console.log(twoSum([3, 2, 4], 6));

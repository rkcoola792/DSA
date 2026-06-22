let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

let sortedArr = arr.slice();
let map = {};
for (let i = 0; i < sortedArr.length; i++) {
  sortedArr[i] = sortedArr[i].split("").sort().join("");
}

for (let i = 0; i < sortedArr.length; i++) {
  if (!map[sortedArr[i]]) {
    map[sortedArr[i]] = [arr[i]];
  } else {
    map[sortedArr[i]].push(arr[i]);
  }
}

console.log(map);

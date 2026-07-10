let a = "aabbcdde";
let map = {};
for (let i = 0; i < a.length; i++) {
  map[a[i]] = (map[a[i]] ?? 0) + 1;
}
console.log(map);
// for (let ele of Object.keys(map)) {
//   if (map[ele] == 1) {
//     console.log(ele);
//     return;
//   }
// }

for (let i = 0; i < a.length; i++) {
  if (map[a[i]] == 1) {
    console.log(i);
    return;
  }
}

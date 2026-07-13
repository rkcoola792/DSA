let s = "rat";
let t = "car";

let map = {};

for (let ele of s) {
  map[ele] = (map[ele] ?? 0) + 1;
}

for (let ele of t) {
  map[ele] = (map[ele] ?? 0) - 1;
}

for (let key of Object.keys(map)) {
  if (map[key] !== 0) {
    console.log(false);
    return;
  }
}

return console.log(true);

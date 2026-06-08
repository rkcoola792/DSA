var isAnagram = function (s, t) {
  let map = {};

  for (let ele of s) {
    map[ele] = (map[s] ?? 0) + 1;
  }
  for (let ele of t) {
    map[ele] = (map[s] ?? 0) - 1;
  }
  for (let key of Object.keys(map)) {
    if (map[key] !== 0) return false;
  }
  return true;
};

console.log(isAnagram("a", "a"));

let a = [1, 3, 5];
let b = [2, 4, 6];

let res = [];
let p1 = (p2 = 0);

while (p1 < a.length && p2 < b.length) {
  if (a[p1] < b[p2]) {
    res.push(a[p1]);
    p1++;
  } else {
    res.push(b[p2]);
    p2++;
  }
}
while (p1 < a.length) {
  res.push(a[p1]);
  p1++;
}

while (p2 < b.length) {
  res.push(b[p2]);
  p2++;
}

console.log(res);

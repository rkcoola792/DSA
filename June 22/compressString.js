let s = "cbaebabacd";


let count = 1;
let result = "";

for (let i = 0; i < a.length; i++) {
  if (a[i] == a[i + 1]) {
    count++;
  } else {
    result += a[i] + count;
    count = 1;
  }
}

console.log(result)
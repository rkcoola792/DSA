let s = "abc";
let t = "ahbgdc";

let p1 = (p2 = 0);

while (p1 < s.length && p2 < t.length) {
  if (s[p1] == t[p2]) {
    p1++;
    p2++;
  } else {
    p2++;
  }
}

return console.log(p1 == s.length);

let haystack = "hello";
let needle = "ll";

for (let i = 0; i <= haystack.length - needle.length; i++) {
  if (haystack.slice(i, i + needle.length) == needle) {
    console.log(i);
    return;
  }
}

return (console.log(-1))
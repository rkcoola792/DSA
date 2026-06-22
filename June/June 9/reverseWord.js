let s = "The sky is blue today";

let arr = s.split(" ");
let newArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}
console.log(newArr);

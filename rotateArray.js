let arr = [1, 2, 3, 4, 5];


let k= 2;

let temp = [];

for (let i = 0; i < arr.length; i++) {
  temp[(i + k) % arr.length]=arr[i]
}
console.log(temp)
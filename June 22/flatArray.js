function flatten(arr) {
  let stack = [...arr];
  let result = [];

  while (stack.length) {
    let item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      result.push(item);
    }
  }
}

let arr = [1, 2, [2, 3, 4, [5, 6]]];

let res = flatten(arr);
console.log(res.reverse());

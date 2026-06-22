let str = "{})";

let map = {
  "{": "}",
  "(": ")",
  "[": "]",
};

let stack = [];

for (let ele of str) {
  if (map[ele]) {
    stack.push(ele);
  } else {
    let top = stack.pop();

    if (!top || ele != map[top]) {
      console.log("false");
      return;
    }
  }
}
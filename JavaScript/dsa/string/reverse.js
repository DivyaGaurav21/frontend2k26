


// function reverse(str) {
//   return str.split("").reverse().join("");
// }

function reverse(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

// function reverse(str) {
//   if (str.length === 1) return str;
//   let smallAns = reverse(str.slice(1));
//   return smallAns + str[0];
// }

const str = "divya";
console.log(reverse(str));
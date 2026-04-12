// function replacePi(str) {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     if (i < str.length - 1 && str[i] === "p" && str[i + 1] === "i") {
//       res += 3.14;
//       i++;
//     } else {
//       res += str[i];
//     }
//   }
//   return res;
// }


let str = "abcpi sapippifssdpi";
console.log(replacePi(str));// abc3.14 sa3.14p3.14fssd3.14


function replacePi(str) {
  if (str.length <= 1) {
    return str; // base case
  }

  if (str[0] === "p" && str[1] === "i") {
    return "3.141" + replacePi(str.substring(2));
  } else {
    return str[0] + replacePi(str.substring(1));
  }
}

console.log(replacePi("pip"));
console.log(replacePi("xpix"));
// Output
// 3.141p
// x3.141x

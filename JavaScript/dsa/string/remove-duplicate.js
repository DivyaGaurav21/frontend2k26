
function removeDuplicate(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (!res.includes(str[i])) {
      res += str[i];
    }
  }
  return res;
}
let str = "programming";
console.log(removeDuplicate(str));
console.log(removeDuplicates("programming")); // "progamin"

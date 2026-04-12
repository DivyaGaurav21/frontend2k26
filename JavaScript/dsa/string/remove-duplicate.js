
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
console.log(removeDuplicates("programming")); // "progamin" // O(n2)

// ---optimal ---

function removeDuplicate(str) {
  let set = {};
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (!set[str[i]]) {
      set[str[i]] = 1;
      res += str[i];
    } else {
      set[str[i]]++;
    }
  }
  return res;
}

// ----

function removeDuplicate(str) {
  let set = new Set();
  let res = "";

  for (let char of str) {
    if (!set.has(char)) {
      set.add(char);
      res += char;
    }
  }

  return res;
}

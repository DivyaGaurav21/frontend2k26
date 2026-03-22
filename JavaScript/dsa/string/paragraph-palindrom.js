// leet code - 125. Valid Palindrome

function reverse(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}
var isPalindrome = function (s) {
  s = s.toLowerCase();
  // let filterStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let filterStr = "";
  for (let i = 0; i < s.length; i++) {
    if (/[a-z0-9]/.test(s[i])) {
      filterStr += s[i];
    }
  }
  return filterStr === reverse(filterStr);
};

// ----------------------

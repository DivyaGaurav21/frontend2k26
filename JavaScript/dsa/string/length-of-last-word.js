// leetcode 58. Length of Last Word
// App - 1
var lengthOfLastWord = function(s) {
   let sArr = s.trim().split(" ");
   return sArr[sArr.length - 1].length;
};

// App - 2
var lengthOfLastWord = function (s) {
  let lastIndex = s.length - 1;
  let count = 0;
  for (let i = lastIndex; i >= 0; i--) {
    if (s[i] == " ") {
      lastIndex--;
    } else {
      break;
    }
  }
  for (let j = lastIndex; j >= 0; j--) {
    if (s[j] != " ") {
      count++;
    } else {
      break;
    }
  }
  return count;
};

// App -3 
var lengthOfLastWord = function(s) {
  let i = s.length - 1;

  // skip spaces
  while (i >= 0 && s[i] === " ") i--;

  let count = 0;

  // count characters
  while (i >= 0 && s[i] !== " ") {
    count++;
    i--;
  }

  return count;
};
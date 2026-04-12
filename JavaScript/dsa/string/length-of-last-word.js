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
  //skip white space
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
    // s= s.trim();
    let j = s.length - 1;
  while (s[j] === " ") j--;
    let count = 0;
    while(j >= 0 && s[j] !== " "){
      count++;
      j--;
    }
    return count;
};
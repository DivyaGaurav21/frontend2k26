// 1796. Second Largest Digit in a String

var secondHighest = function (s) {
  let arr = s
    .split("")
    .filter((ch) => !isNaN(ch))
    .map((ch) => Number(ch));
  console.log(arr);
  
  let max = -1;
  let secondMax = -1;
  for (let ele of arr) {
    if (ele > max) {
      secondMax = max;
      max = ele;
    } else if (ele > secondMax && ele != max) {
      secondMax = ele;
    }
  }
  return secondMax;
};

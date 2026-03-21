//  first index occurances of element in array
function firstIndexOfEle(arr, si=0, elem) {
  if (si === arr.length) {
    return -1; // base case
  }

  if (arr[si] === elem) {
    return si;
  }

  return firstIndexOfEle(arr, si + 1, elem);
}

console.log(firstIndexOfEle([2, 4, 6, 4, 7], 4)); // 1

// kast index occurance of element in array
function lastIndexOfEle(arr, si, elem) {
  if (si === arr.length) {
    return -1;
  }
  let smallAns = lastIndexOfEle(arr, si + 1, elem);
  if (smallAns === -1) {
    if (arr[si] === elem) {
      return si;
    }
    return -1;
  }
  return smallAns;
}

console.log(lastIndexOfEle([2, 4, 6, 4, 7], 0, 4)); // 3


// function lastIndexOfEle(arr, si, elem) {
//   if (si === arr.length) return -1;

//   const smallAns = lastIndexOfEle(arr, si + 1, elem);

//   if (smallAns !== -1) return smallAns;

//   return arr[si] === elem ? si : -1;
// }
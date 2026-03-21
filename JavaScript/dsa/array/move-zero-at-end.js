// leetcode - 283. Move Zeroes

// approach - 1
function moveZeroAtEnd(arr) {
  let sortZero = [];
  // const temp = new Array(arr.length);
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      sortZero[j] = arr[i];
      j++;
    }
  }
  for (let i = j; i < arr.length; i++) {
    sortZero[i] = 0;
  }
  for (let k = 0; k < arr.length; k++) {
    arr[k] = sortZero[k];
  }
  return sortZero;
}

// approach - 2
function moveZeroAtEnd(arr) {
  let nonZeroIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroIndex] = arr[i];
      nonZeroIndex++;
    }
  }
  for (let j = nonZeroIndex; j < arr.length; j++) {
    arr[j] = 0;
  }
  return arr;
}

let arr = [1, 0, 5, 0, 5, 0, 8, 9, 7];
moveZeroAtEnd(arr);
console.log(arr.join(" "));
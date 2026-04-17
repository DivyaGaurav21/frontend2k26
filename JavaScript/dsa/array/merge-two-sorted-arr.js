// merge two sorted arr 


// function mergeTwoSortArr(arr1, arr2) {
//   let res = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       res.push(arr1[i]);
//       i++;
//     } else {
//       res.push(arr2[j]);
//       j++;
//     }
//   }
//   return [...res, ...arr1.slice(i), ...arr2.slice(j)];
// }

// let arr1 = [1, 3, 5, 7, 9, 11, 13];
// let arr2 = [2, 4, 6];
// console.log(mergeTwoSortArr(arr1, arr2));


function mergeSortedArr(arr1, arr2) {
  let finalArr = new Array(arr1.length + arr2.length);
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      finalArr[k] = arr1[i];
      i++;
      k++;
    } else {
      finalArr[k] = arr2[j];
      j++;
      k++;
    }
  }
  while (i < arr1.length) {
    finalArr[k] = arr1[i];
    i++;
    k++;
  }
  while (j < arr2.length) {
    finalArr[k] = arr2[j];
    j++;
    k++;
  }
  return finalArr;
}

const nums1 = [1, 2, 3];
const nums2 = [2, 5, 6, 5, 7, 9];
console.log(mergeSortedArr(nums1, nums2));

// merge two sorted arr 

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

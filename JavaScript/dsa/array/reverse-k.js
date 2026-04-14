// Given an array arr[] and an integer k, find the array after reversing every subarray of consecutive k elements in place. If the last subarray has fewer than k elements, reverse it as it is. Modify the array in place, do not return anything.

// Examples: 

//  Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], k = 3 
// Output: [3, 2, 1, 6, 5, 4, 8, 7]
// Explanation: Elements is reversed: [1, 2, 3] → [3, 2, 1], [4, 5, 6] → [6, 5, 4], and the last group [7, 8](size < 3) is reversed as [8, 7]. 

//  Input: arr[] = [1, 2, 3, 4, 5], k = 3
// Output: [3, 2, 1, 5, 4]
// Explanation: First group consists of elements 1, 2, 3. Second group consists of 4, 5.

//  Input: arr[] = [5, 6, 8, 9], k = 5
// Output: [9, 8, 6, 5]


function reverseInGroups(arr, k) {
  let n = arr.length;

  for (let i = 0; i < n; i += k) {
    let left = i;
    let right = Math.min(i + k - 1, n - 1);

    // reverse current group
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
reverseInGroups(arr, 3);
console.log(arr); // [3, 2, 1, 6, 5, 4, 8, 7]
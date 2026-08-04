//---------------- find second largest in array ---------------//

function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && secondLargest != largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let arr = [2, 3, 1, 6, 3, 5];
console.log(findSecondLargest(arr));

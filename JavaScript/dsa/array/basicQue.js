// --------------- search element in array----------------------//
// const searchElement = (arr, element) => {
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === element){
//             return i;
//         }
//     }
//     return -1;
// }

// const arr = [3,5,7,2,6,8,9,1,4];
// let result = searchElement(arr, 6);
// console.log(result);

// ----------------- count negative total number ---------------//
// const countNegative = (arr) => {
//     let count = 0;
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] < 0){
//              count++;
//         }
//     }
//     return count;
// }

// let arr = [1, 3, -3, -4, 5, -4, -4];
// console.log(countNegative(arr));

//---------------- find largest element in array ---------------//

// function findLargestElement(arr) {
//     let largest = -Infinity; // arr[0]
//     for(let i=1; i<arr.length; i++){
//       if(arr[i] > largest){
//         largest = arr[i];
//       }
//     }
//     return largest;
// }

// const arr = [1, 14, 6, 4, -6, 13];
// console.log(findLargestElement(arr));
// console.log(Math.max(...arr), "rest")


//---------------- find second largest in array ---------------//
function findSecondLargest(arr){

    let firstMax = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i ++){
        if(arr[i] > firstMax){
            secondMax = firstMax;
            firstMax = arr[i];
        }
    }

    return 3
}

const arr = [1, 4, 12, 4 ,3, 11 , 9];
console.log(findSecondLargest(arr))
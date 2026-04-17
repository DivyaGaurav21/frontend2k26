// leetcode 2149. Rearrange Array Elements by Sign // order should be maintained
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let segArr = [];
    let pos = 0;
    let neg = 1;

    for(let i = 0; i < nums.length; i++){
      if(nums[i] > 0){
        segArr[pos] = nums[i]
        pos += 2;
      }else{
         segArr[neg] = nums[i]
         neg += 2;
      }
    }

return segArr;
};
// var rearrangeArray = function(nums) {
//     let neg = [], pos = [];

//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] < 0){
//             neg.push(nums[i]);
//         }else{
//             pos.push(nums[i]);
//         }
//     }

//     for(let i = 0; i < Math.floor(nums.length/2); i++){
//       nums[2*i] = pos[i];
//       nums[2*i + 1] = neg[i];
//     }
//  return nums;
// };
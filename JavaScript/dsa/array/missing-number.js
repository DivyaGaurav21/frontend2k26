// leetcode- 268. Missing Number
// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.

// Input: nums = [3,0,1]
// Output: 2

var missingNumber = function(nums) {
    let sum = 0;
    let n = nums.length;
    for(let num of nums){
        sum += num;
    }
    let nSum = (n * (n + 1))/2;
    return nSum - sum;
};
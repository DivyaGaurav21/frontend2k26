// leetcode 643. Maximum Average Subarray I

var findMaxAverage = function(arr, k) {
    let maxSum = -Infinity;
    for(let i = 0; i <= arr.length - k; i++){
        let sum = 0;
        for(let j = i; j < i+k; j++){
            sum = sum + arr[j];
        }
        maxSum = Math.max(maxSum , sum);
    }
    return maxSum/k;
}

var findMaxAverage = function(arr, k) {
    let sum = 0, maxSum = 0;
    for(let i = 0; i < k; i++){
          sum = sum + arr[i];
    }
    maxSum = sum;

    for(let i = k; i < arr.length; i++){
        sum = sum + arr[i];
        sum = sum - arr[i-k];
        maxSum = Math.max(maxSum , sum);
    }
    return maxSum/k;
};
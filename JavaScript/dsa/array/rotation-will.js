function rotate(nums, k) {
    k = k % nums.length;

    // Reverse entire array
    reverse(nums, 0, nums.length - 1);

    // Reverse first k elements
    reverse(nums, 0, k - 1);

    // Reverse remaining elements
    reverse(nums, k, nums.length - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}
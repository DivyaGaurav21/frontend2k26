// leetcode - 69. Sqrt(x) 

var mySqrt = function(x) {
    if(x < 2) return x;
    let i = 1;
    while(i*i <= x){
        i++;
    }
    return i - 1;
};




var mySqrt = function(x) {
    if (x < 2) return x;

    let left = 1;
    let right = x;
    let ans = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // left + Math.floor((right-left) / 2);

        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            ans = mid;       // store possible answer
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
};
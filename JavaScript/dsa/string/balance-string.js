// leetcode 1221. Split a String in Balanced Strings 

var balancedStringSplit = function(s) {
    let balanceStr = 0;
    let lCount = 0;
    let rCount = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === "L"){
            lCount ++;
        }else{
            rCount ++;
        }
        if(lCount === rCount){
            balanceStr++;
            lCount = 0;
            rCount = 0;
        }
    }
    return balanceStr;
};
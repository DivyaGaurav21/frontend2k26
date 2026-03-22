// leetcode 242. Valid Anagram

// var isAnagram = function(s, t) {
//     return s.split("").sort().join("") === t.split("").sort().join("");
// };
//TC- O(nlogn) - due to sorting
//SC- O(n) - due to array in split


// Approach - 2 

var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    let map = {};
    for(let i = 0; i < s.length; i++){
        map[s[i]] = (map[s[i]] || 0) + 1;
    }
    for(let j = 0; j < t.length; j++){
        if(!map[t[j]] || map[t[j]] < 0){
            return false;
        }else{
            map[t[j]]--;
        }
    }
    return true;
};

// TC - O(n)
//SC - O(1) due to alphabet

// leetcode 3541. Find Most Frequent Vowel and Consonant

/**
 * @param {string} s
 * @return {number}
 */

// var maxFreqSum = function(s) {
//     let freq = {};
//     let vowels = new Set(['a', 'e' , 'i' , 'o' , 'u']);

//     // for(let i = 0; i < s.length; i++){
//     //    freq[s[i]] = (freq[s[i]] || 0) + 1;
//     // }
    
//     for(let char of s){
//         freq[char] = (freq[char] || 0) + 1;
//     }
//     let maxVowel = 0;
//     let maxConsonent = 0;
//     for(let key in freq){
//        if(vowels.has(key)){
//          maxVowel = Math.max(freq[key] , maxVowel);
//        }else{
//         maxConsonent = Math.max(freq[key] , maxConsonent);
//        }
//     }
//     return maxVowel + maxConsonent;
// };

var maxFreqSum = function(s) {
    let map = {};
    for(let i = 0; i < s.length; i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        }else{
            map[s[i]] ++;
        }
    }
    let maxVowel = 0;
    let maxConsonent = 0;
    let vowels = ['a', 'e' , 'i' , 'o' , 'u'];
    for(let key in map){
        if(vowels.includes(key)){
          if( map[key] > maxVowel){
            maxVowel = map[key];
          } 
        }else{
            if( map[key] > maxConsonent){
            maxConsonent = map[key];
          } 
        }
    }
    return maxVowel + maxConsonent;
}
// leetcode - 49. Group Anagrams 

var groupAnagrams = function(strs) {
    let map = {};
    for(let i = 0; i < strs.length; i++){
        let sortedEle = strs[i].split("").sort().join();
        if(!map[sortedEle]){
            map[sortedEle] = [strs[i]]
        }else{
            map[sortedEle].push(strs[i])
        }
    }
    return [...Object.values(map)];
};
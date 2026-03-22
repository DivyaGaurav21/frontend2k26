function getUnique(arr) {
  return [...new Set(arr)];
}

const arr = [1, 2, 2, 3, 4, 4, 5];

console.log(getUnique(arr));
// Output: [1, 2, 3, 4, 5]

// Set automatically removes duplicates
// ... (spread) converts it back to array


// can set takes direct array as argument ?
// Yes ✅ Set can take an array directly as an argument.


// const arr = [1, 2, 2, 3];
// const uniqueSet = new Set(arr);
// console.log(uniqueSet); 
// Output: Set {1, 2, 3}
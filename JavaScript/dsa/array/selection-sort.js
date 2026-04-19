function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndecx= i;
    for (let j = i + 1; j < n; j++) {
        if(arr[j] < arr[minIndecx]) {
            minIndecx = j;
        }
    }
    [arr[i], arr[minIndecx]] = [arr[minIndecx], arr[i]];
  }
    return arr;
}

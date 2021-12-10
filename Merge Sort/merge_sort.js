//  O(n * log(n)) 

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
  
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    const helperArr = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) helperArr.push(left.shift());
      else helperArr.push(right.shift());
    }
  
    return [...helperArr, ...left, ...right];
  }
  

  console.log(mergeSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32])); 
  console.log('\n \n');
  console.log(mergeSort([0, -10, 7, 4])); 
// O(n^2)

function selectionSort(arr) {
    let min;
  
    for (let i = 0; i < arr.length; i++) {
      min = i;
  
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) min = j;
      }
      if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  
    return arr;
  }

  console.log(selectionSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32])); 
  console.log(selectionSort([0, -10, 7, 4])); 
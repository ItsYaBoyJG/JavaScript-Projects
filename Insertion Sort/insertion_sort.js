
 //O(n^2) 


function linearSearch(arr, val) {
    for (let i = 0; i < arr.lenght; i++) {
        if (arr[i] === val) return i;
    }
    return - 1;
}

linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)


 // linearSearch([10, 15, 20, 25, 30], 15) 
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) 
//  linearSearch([100], 100) 
//  linearSearch([1, 2, 3, 4, 5], 6) 
//  linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) 
//  linearSearch([100], 200) 
 
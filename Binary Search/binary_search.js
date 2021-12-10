// O(log (n))

function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middleIndex = Math.floor((start + end) / 2);
        let middleEl = arr[middleIndex];
        
        if (middleEl === val) return middleIndex;
        if(middleEl < val) start = ++middleIndex;
        if (middleEl > val) end = --middleIndex;
    }

    return -1;
}

console.log(binarySearch([45,65,76,324,78,90]));

//  binarySearch([1,2,3,4,5], 2) 
//  binarySearch([1,2,3,4,5], 5) 
//  binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10) 
//  binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95) 
//  binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 100) 
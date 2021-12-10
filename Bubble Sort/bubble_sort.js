//O(n^2)
 function bubbleSort(arr) {
    let noChanges;
    for (let i = arr.length; i > 0; i--) {
        noChanges = true;
        for (let j = 0; j < i - 1; j++) {
			//console.log(arr, arr[j], arr[j+1]);
            console.log(arr);
            console.log(arr[j]);
            console.log(arr[j+1]);
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noChanges = false;
            }
        }
        if (noChanges) break;
		console.log(arr);
    }

    return arr;
}

console.log(bubbleSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]));
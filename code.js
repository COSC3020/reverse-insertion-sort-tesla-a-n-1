function insertionSortReverse(array) {
    const n = array.length
    for( var i = n - 1; i >= 0; i--) { //Start at the end of the list and move to the lowest index
        var val = array[i];
        for( var j = i; j < n && array[j+i] < val; j++) { 
            array[j] = array[j + 1];
        }
        array[j] = val;
    }
    return array;
}

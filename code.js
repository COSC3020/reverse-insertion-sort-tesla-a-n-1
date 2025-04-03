function insertionSortReverse(array) {
    const n = array.length
    for(var i = n - 1; i >= 0; i--) {
      var val = array[i];
      var j;
      for(j = i; j < n && array[j+1] < val; j++) {
        array[j] = array[j+1];
      }
      array[j] = val;
    }
    return array;
}

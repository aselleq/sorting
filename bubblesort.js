const bubbleSort = function (array, lastInd = array.length - 1) {
    // Base Case
    if (lastInd === 0) { //if our array is empty
      return array; //returns itself
    }
    else {
    for (let i = 0; i < lastInd; i++) {
      //3 2
      if (array[i] > array[i + 1]) { //if first ind is larger than next
        let temp = array[i + 1]; //temp=2 save in temp next ind, which is smaller
        array[i + 1] = array[i]; //2=3 assign the next one [smaller] to the larger ind value
        array[i] = temp; //3=2
      }
    }   
    }
    // Recursive call on smaller portion of the array
    return bubbleSort(array, lastInd - 1);  
  };
  
  //bubbleSort([1,4,6,2,8])
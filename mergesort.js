




// merge sort
merge = (left, right) => {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
};


mergeSort = (array) => {
    const half = array.length / 2
    
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }


console.log("[5, 6, 7, 1, 2, 3, 4]->",mergeSort([5, 6, 7, 1, 2, 3, 4]));
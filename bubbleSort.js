
//  function swap(a,b){
//      let s = a ;
//      a = b;
//      b = s ;

//      return [a,b];
//  } 
function bubbleSort(arr, fn, len) {
  if (len <= 1) return; // Termination condition

  let swapped = false; // Keep track if any elements were swapped in this iteration
  for (let i = 0; i < len - 1; i++) {
    if (fn(arr[i]) > fn(arr[i + 1])) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      swapped = true;
    }
  }

  if (swapped) {
    // If any elements were swapped in the last iteration, continue sorting
    bubbleSort(arr, fn, len - 1);
  }
}

var sortBy = function (arr, fn) {
  let len = arr.length;
  bubbleSort(arr, fn, len);
  return arr;
};

// // Example usage:
let myArr = [4, 2, 7, 1, 5];
let sortedArr = sortBy(myArr, (x) => x);
console.log(sortedArr);

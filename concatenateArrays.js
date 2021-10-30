//concatenate the multiple arrays into a single array
function concat(arr1, arr2){
  let finalArray = arr1.concat(arr2);
  return finalArray;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]));
console.log(concat([], [ 9, 7, 2 ]));
console.log(concat([ 5, 10 ], []));
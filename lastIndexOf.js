//this function is given an array and a value, it should return the index of the last time the value occurs in the array. 
//If the value never occurs, the function should return -1.

function lastIndexOf(traverseArray, num){
  let lastIndex = 0;
  let count = 0;
  
  if(traverseArray.length !== 0){
    
    for(let i = 0; i < traverseArray.length; i++){    
      if(traverseArray[i] === num){
        lastIndex  = i;
        count += 1;        
      }  
    }
  }else {
    return -1;
  }
  if(count !== 0){
    return lastIndex;
  }else{
    return -1;
  }  
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));
console.log(lastIndexOf([3], 3));
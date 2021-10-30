//The function takes 3 integer parameters: start, end, and step.
//The function should return an array of numbers from start to end counting by step.

function range(start, end, step){
  let rangeArray = [];
  if(start < end && step > 0){
    while(start <= end){  
      rangeArray.push(start);
      start += step;
    }  
  }else{
    return rangeArray;
  }
  return rangeArray;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(-5, 2, 0));
console.log(range(2, -2, 0));
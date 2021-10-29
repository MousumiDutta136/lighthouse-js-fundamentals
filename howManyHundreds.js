//Each container on the space ship can hold exactly 100 bottles of maple syrup. 
//A container will only be sent if it's full.
//to determine how many containers can be filled and sent
function howManyHundreds(num){
  let noOfHundreds = Math.floor(num / 100);
  return noOfHundreds;
}
console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));
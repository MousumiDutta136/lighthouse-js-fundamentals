//Iterating Over Arrays: Banana Bread
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
let i = 0;
while(i < ingredients.length){
  console.log(ingredients[i]);
  i++;  
}
// Write a for loop that prints out the contents of ingredients:

for (ifor = 0; ifor <ingredients.length; ifor++ ){
  console.log(ingredients[ifor]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let iback = ingredients.length -1;
while(iback >= 0){
  console.log(ingredients[iback]);
  iback--;  
}
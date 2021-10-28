// Program prints the numbers from 100 to 200 with three execptions
//1)If the number is a multiple of 3, print the string "Loopy" instead of the number.
//2)If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
//3)If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.

for (let x = 100; x <= 200; x++) 
{
  if(x % 3 === 0 && x % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if(x % 4 === 0) {
    console.log("Lighthouse");
  } else if(x % 3 === 0) {
    console.log("Loopy");
  } else {
    console.log(x);
  }  
}
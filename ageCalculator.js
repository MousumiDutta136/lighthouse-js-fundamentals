// To determine age of someone  by given date of birth and current year(Age Calculator)
function ageCalculator(name, dob, cy){
  let result = "";
  let age = 0;
  if(cy > dob){
    age = cy - dob;
    result = name + " " + "is" +  " " + age +  " " + "years old.";
  }else if (cy === dob){
    age = cy - dob;
    result = name + " " + "is" +  " " + age +  " " + "years old.";
  }
  return result;
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
console.log(ageCalculator("Ali", 2015, 2015));

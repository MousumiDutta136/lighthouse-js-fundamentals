//Calculation whichSchool be selected based on age
const whichSchool  = function (age) {
  if (age < 13){
    return "Elementary School";  // Elementary School if age is below 13
  } else if (age >= 13 && age <= 18){
    return "Secondary School";  // secondary School if age is between 13 & 18
  } else {
    return "Lighthouse Labs"; //  for other options always Lighthouse Labs
  }
}
// calling the function whichSchool
whichSchool(40);
whichSchool(2);
whichSchool(13);
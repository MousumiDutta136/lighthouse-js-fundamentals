//To curve a pumpkin program will calculate the areas of rectangle, traingle and circle.
//formula for Area (rectangle: length × width, triangle: base × height / 2, circle: π × radius2)
//To access the value of π in your JavaScript code, use Math.PI

// Function of Rectangle
function calculateRectangleArea(length, width){
  let areaOfRectangle = length * width;
  if (areaOfRectangle > 0){
    return areaOfRectangle;
  }  
}
// Function of Traingle
function calculateTriangleArea(base, height){
  let areaOfTraingle = base * height / 2;
  if (areaOfTraingle > 0){
    return areaOfTraingle;
  } 
}

//Function of Circle
function calculateCircleArea(radius){
  if (radius > 0){
    let areaOfCircle = Math.PI * radius * radius;
    return areaOfCircle;
  } 
}

// Calculate Area of the Rectangle
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

// Calculate Area of the Traingle
console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

// // Calculate Area of the Circle
console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
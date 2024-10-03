/* Pseudocode Method
problem :
write a code to find area of rectangle

Hint : 
    1. Find out how to count area of retangle
    2. The formula is length x width = area

Solutions in pseudocoe 
    1. define variable and assign value to variable
        const rectangleLength = 5
        const rectangleWidth = 3
    2. define variable to keep the result and implement the formula area of rectangle
        cons rectangleArea = rectangleLength * rectangleWidth
*/

const rectangleLength: number = 5
const rectangleWidth: number = 3

const rectangleArea = rectangleLength * rectangleWidth

console.log(rectangleArea);

const rectanglePerimeter = 2 * rectangleLength + 2 * rectangleWidth

console.log(rectanglePerimeter);
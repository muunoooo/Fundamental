/*
    Find Diameter, Circumference, and area of circle
    radius of circle = 5
    phi = 3.14159
*/

const radius: number = 5
const phi: number = 3.14159

const diameter: number = 2 * radius
const circumference: number = 2 * phi * radius
const area: number = phi * radius ** 2

console.log (diameter);
console.log (circumference);
console.log (area.toFixed(3));
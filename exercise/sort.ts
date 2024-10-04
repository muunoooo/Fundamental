let num1 = 42;
let num2 = 27;
let num3 = 18;

let largest, middle, smallest;

if (num1 > num2 && num1 > num3) {
    largest = num1;
    middle = (num2 > num3) ? num2 : num3;
    smallest = (num2 > num3) ? num3 : num2;
} else if (num2 > num1 && num2 > num3) {
    largest = num2;
    middle = (num1 > num3) ? num1 : num3;
    smallest = (num1 > num3) ? num3 : num1;
} else {
    largest = num3;
    middle = (num1 > num2) ? num1 : num2;
    smallest = (num1 > num2) ? num2 : num1;
}

console.log(`Sorted numbers: ${smallest}, ${middle}, ${largest}`);


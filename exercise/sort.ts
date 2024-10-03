const num1 : number = 42
const num2 : number = 23
const num3 : number = 15

let largest, middle, smallest;

if (num1 >= num2 && num1 >= num3){
    largest = num1;
    if (num2 >= num3){
        middle = num2;
        smallest = num3;
    } else {
        middle = num3;
        smallest = num2
    }
} else if (num2 >= num1 && num2 >= num3){
    largest = num2;
    if (num1 >= num3){
        middle = num1;
        smallest = num3;
    } else {
        middle = num3;
        smallest = num1
    }
} else (num3 >= num2 && num3 >= num1);{
    largest = num3;
    if (num1 >= num2){
        middle = num1;
        smallest = num2;
    } else {
        middle = num2;
        smallest = num1
    }
}

console.log(`${largest} , ${middle}, ${smallest}`)

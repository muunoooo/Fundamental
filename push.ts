/*

Write a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

*/

function addUniqueElement(arr: number[], newElement: number) {
    if (arr.includes(newElement) == false) {
        arr.push(newElement);
    }
    return arr;
}

let arr1 = [1, 2, 3, 4];

console.log(addUniqueElement(arr1, 7)); 
console.log(addUniqueElement(arr1, 3));
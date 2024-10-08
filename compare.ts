const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]

// console.log(arr1 == arr2)

// console.log(typeof arr1)

const obj1 = { name: "Andi"}
const obj2 = { name: "Andi"}

// console.log(obj1 == obj2)

// non- primitive tidak dapat dibandingkan, kecuali satu databse yang sama

const null1 = null
const null2 = null

// console.log (null1 == null2)

const target = { a: 1, b: 2};
const course = { b: 4, c: 5};
const final = Object.assign(target, course);

console.log(final)

const n:number[] = [1, 2, 3];
n[2] = 10
n[4] = 5

console.log(n)


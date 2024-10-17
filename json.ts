const obj1 = { name : 'andi', age : 25}
const obj2 = { 
    name : 'andi', 
    age : 25
}


const ar1 = [1,2,3]


const json1 = JSON.stringify(obj1);
const json2 = JSON.stringify(obj2);

console.log(json1);
console.log(obj1);
console.log(JSON.stringify(ar1));
console.log(ar1);
console.log(JSON.parse(json1));




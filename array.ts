let arr: string[] = ["A", "B", "C"];
let arr2: number[] = new Array(4, 5, 6);
let arr3: (string | number)[] = ["A", 3, 5, "B"];

// console.log(arr[1]);
// console.log(arr[0], arr2[2]);
// console.log(arr[0].concat(arr[2]));

// menambahkan value di belakang
arr.push("D");

// menghapus value terakhir
arr.pop();

// menambahkan value di depan
arr.unshift("E");

// mengahapus value pertama
arr.shift();

// menghapus / menambahkan index ke ?
arr.splice(1, 0, "Z");

// console.log(arr);
// console.log(arr.sort()); // sort asc alphabet
// console.log(arr.sort().reverse()) // sort  desc alphabet

const numArr: number[] = [1, 3, 44, 6, 13, 2];

// numArr.sort((a, b) => a - b); // sort asc, kecil ke besar
// numArr.sort((a, b) => b - a); // sort desc, besar ke kecil 

const oddNumber: number[] = numArr
    .filter((item) => item % 2 == 1 && item > 2)
    .sort((a,b) => a - b);

// console.log(oddNumber);
// console.log(oddNumber.find((item) => item == 3));
// console.log(oddNumber.findIndex((item) => item % 2 == 1));
// console.log(oddNumber.includes(3));

const arr4: string[] = ["H", "E", "L", "L", "O"]
// console.log(arr4.join(""))

const str: string = "kasur rusak"
// console.log(str.split("").reverse().join(""));

const newArr: number[] = [10, 20, 30, 40];
const newArr2: number[] = newArr.map((item) => item += 5);
const newArr3: number[] = []

newArr.forEach((item) => {
    newArr3.push(item + 5);
})
// newArr.forEach((item, idx) => {
//     console.log(item, idx) ;
// })

// newArr.map((item, idx) => {
//     console.log(item, idx) ;
// })

// console.log(newArr2);
// console.log(newArr3);

// looping for ... of (array)
for (let item of newArr) {
    console.log(item);
}

// array.recude , menjumlah isi array
const x: number [] = [1,2,3]
const xJumlah = x.reduce((a, b) => a + b)

// console.log(xJumlah)
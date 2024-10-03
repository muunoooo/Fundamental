const age:number = 17

if (age >= 17){
    console.log("You can now create an ID card")
} else {
    console.log("You are not old enough to create an ID card")
}

let grade: string = "B"

if (grade === "A"){
    console.log("Excellent Result!");
} else if (grade === "B"){
    console.log("Great Result!");
} else if (grade === "C"){
    console.log("Average Result!");
} else {
    console.log("Invaild Grade!");
}

//ternary method , menyingkat "if else"
console.log(grade === "A" ? "Excellent Result!" : grade === "B" ? "Great Result!" : "Invalid Grade");

const date: Date = new Date ("2024-10-02");
const day: number = date.getDay();

switch(day){
    case 0:
        console.log("Minggu");
        break
    case 1:
        console.log("Senin");
        break
    case 2:
        console.log("Selasa");
        break
    case 3:
        console.log("Rabu");
        break
    case 4:
        console.log("Kamis");
        break
    case 5:
        console.log("Jumat");
        break
    case 6:
        console.log("Sabtu");
        break
    default:
        console.log("Invalid Day!");
}

const x: number = 6
const y: number = 3

console.log(x >= 6 && y< 10); // "&&" menandakan "dan"
console.log(x > 10 || y == 3) // "||" menandakan "atau"
console.log(!(x < 10)); // "!" menandakan kebalikannya


const value: string = ""

const result1: string = value && "Bandung"
const result2: string = value || "Bandung"

console.log(result1);
console.log(result2);
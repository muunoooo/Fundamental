let name: string = "Andi"               // immutable, untuk primivite
let newName: string = name

name = "Buddy"

// console.log(name)

const arr: number[] = [1, 2, 3]         // Mutable, untuk non- primitive
const newArr: number[] = arr            // penyimpanan data yang sama dengan arr
const NewArr: number[] = [...arr]       // hanya mengopi isi arr, dinamakan copy value (spread operator/...)

arr.push(4)

// console.log(newArr,NewArr);

interface Iperson {
    name: string
    age: number
}

const person = {
    name: "Andi",
    age: 25
}

// const newPerson = person;
// const NewPerson = {...person}

// newPerson.name = "Budi"

// console.log(person, newPerson, NewPerson);


// looping object
for (let key in person) {
    console.log(key)
    console.log(person[key as keyof typeof person])
}
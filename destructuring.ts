const person = {
    name: "David",
    age: 25,
    hobby: "Coding"
}

//object destructing
const {name, age, hobby} = person

// console.log(name)
// console.log(age)
// console.log(hobby)

const arr: number[] = [1, 2, 3]
const [a, b, c] = arr

// console.log(a)
// console.log(b)
// console.log(c)

const user = {
    firstName: "Franky",
    lastName: "Sihombing",
    greet(){
        console.log(`Hello ${this.firstName}`)
    }
}

user.firstName = "Ujang"

// user.greet()

// console.log(Object.entries(user))
// Object.freeze(user) // tidak bisa mengubah (menambah mengurang) ketika sudah difreeze, namun masih dapat dipakai

console.log(Object.values(user))
interface Icar { 
    brand: string                   // ini namanya properti
    model: string
    price?: number
}

type Car = {
    brand: string,
    model: string,
    price: number
}

const car: Car = {
    brand: "BMW",                   // dalam propoerti terdapat "key : value"
    model: "M135i xDrive",
    price: 8000000000
}

interface Iuser {
    name: string
    hobby?: string
    adress?: {
        street: string
        country: string
    }
    greeting?(input: string) : void      // void = tidak retrun apa apa, kalau retrun sesuatu "return: number"
}

const user: Iuser = {                      // dalam suatu object, terdapat properti dan/atau method
    name: "David",
    greeting(input: string) {
        console.log("Hello " + input)
    }
}

console.log(user.name)              // menggunakan "."
console.log(user["name"])           // menggunakan siku + " x "

// user.greeting()

user.hobby = "ngoding"
console.log(user)

delete user.hobby
console.log(user)

user.adress = {
    street: "Braga",
    country: "Indonesia"
}

// concept optional chaining
console.log(user.adress);

console.log(Object.keys(user));

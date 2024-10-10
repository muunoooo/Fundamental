// for (let i = -10; i <= 0; i++) {
//     if (i !== -5 && i !== -6) {
//         console.log(i)
//     }
// }

// function twoSum(nums: number[], target: number): number[] {
//     for (let i = 0; i < nums.length; i++){
//         for (let j = i + 1; j < nums.length; j++){
//             if (nums[i] + nums[j] == target){
//                 return [i, j]
//             }
//         }
//     }
//     return []
// };

// console.log(twoSum([1, 2, 3, 4], 6))

// template object
class User {
    firstName = ""
    #lastName = "" // privat
    static word = "Hello World" // static

    constructor(first: string, last: string) {
        this.firstName = first
        this.#lastName = last
    }

    greet() {
        console.log(`Hello ${this.firstName}`)
    }

    getLastName() {
        return this.#lastName
    }
}

const user1 = new User("Frengky", "Sihombing")
const user2 = new User("John", "Doe")
const user3 = new User("Jane", "Dine")

console.log(user1.getLastName())
console.log(user2.getLastName())
console.log(user3.getLastName())

console.log(User.word)

// user1.greet()
// user2.greet()
// user3.greet()


const arr: number[] = [1, 2, 3, 4, 5]

console.log(arr.some((item) => item > 3))
console.log(arr.every((item) => item > 3))

// function defangIPaddr(address: string): string {
    // return address.replace(".","[.]"\r)
// };

// function getConcatenation(nums: number[]): number[] {
//     return nums.concat([1])
// };

// console.log(getConcatenation([1, 2, 3]))

function mySqrt(x: number): number {
    let y = Math.floor(Math.sqrt(x))
    return y
};

console.log(mySqrt(8))
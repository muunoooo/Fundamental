class User {
    firstName = "";
    #lastName = ""; //private class
    static word : "Hello world"

    constructor(first: string, last: string = "") {
        this.firstName = first;
        this.#lastName = last;
    }
    
    greet () {
        console.log(`Hello ${this.firstName}`);
    }

    getLastName() {
        return this.#lastName
    }
}

const user1 = new User("Franky","Sihombang");
const user2 = new User("John", "Doe");
const user3 = new User("Jane", "Dine");

// user1.greet()
// console.log(user2.getLastName())
// console.log(user3.getLastName())

console.log(User.word)
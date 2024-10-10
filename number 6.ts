// /**
//  * ● Specifications :
// ○ Create a program to calculate total salary based on employee type
// ○ There are two types of employee : full-time & part-time
// ○ Salary for full-time employee :
// ■ IDR 100.000 / hour
// ■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
// ○ Salary for part-time employee :
// ■ IDR 50.000 / hour
// ■ IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
// ● Requirements :
// ○ Create an Employee as a parent class
// ○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
// ■ Create a method in that class to add working hour per day
// ■ Create a method in that class to calculate total salary
// ○ Use inheritance concept
//  */

// class Employee {
//     name = ""
//     type = ""

//     constructor(name: string, tipe: string){
//         this.name = name
//         this.type = tipe
//     }
// }

// class FullTimeEmployee extends Employee {
//     workinghour = 0
//     salary = 0
//     hour = 0
    

//     constructor (nama: string, type: string, hour:number){
//         super(nama, type)
//         this.hour = hour
//         }

//     Salary (hour:number) {
//         if (this.hour < 6) {
//             let gaji = 100000 * this.hour
//             return gaji
//         } else {
//             let uanglembur = this.hour - 6
//             let gaji = 100000 * this.hour - 6
//             let Total = uanglembur + gaji
//             this.salary += Total
//         }
//     }
//     }

// const employee1 = new FullTimeEmployee ("Kemal","Fulltime", 8)

// console.log(employee1.Salary(6))


// class PartTimeEmployee extends Employee {

// }


// let x: {"Kemal", "Fulltime", 8}
// // output x: ("berapa lama kerja","Salary")

class employee {
    name = ""
    type = ""
    #hour = 0
    #bSallary = 0
    #otSallary = 0

    constructor(name: string, type: string, bSallary: number, otSallary: number) {
        this.name = name
        this.type = type
        this.#bSallary = bSallary
        this.#otSallary = otSallary
    }

    setHour (n: number) {
        this.#hour += n
    }

    getSalary() {
        if (this.#hour <= 6) {
            return this.#bSallary * this.#hour
        } else {
            return this.#bSallary * 6 + this.#otSallary * (this.#hour - 6)
        }
    }
}

class FullTimeEmployee extends employee {
    constructor (name: string) {
        super (name, "Full-time", 100000, 75000)
    }
}

class PartTimeEmployee extends employee {
    constructor (name: string) {
        super (name, "Part-time", 70000, 30000)
    }
}

const employee1 = new FullTimeEmployee ("Kemal")
employee1.setHour(10)
console.log(employee1.getSalary())
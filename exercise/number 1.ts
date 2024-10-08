class Student {
    name = ""
    email = ""
    dob = ""
    score = 0

    constructor (nama: string, surel: string, tanggal: string, nilai: number) {
        this.name = nama
        this.email = surel
        this.dob = tanggal
        this.score = nilai
    }

    getAge() {
        let Age: Date = new Date(this.dob)
        let Today: Date = new Date()
        let diff = Today.getTime() - Age.getTime()

        return Math.floor(diff/ (24 * 60 * 60 * 1000) / 365 )
    }
}

const student1 = new Student("Andi", "Andi@gmail.com", "2002-01-01", 80)
const student2 = new Student("Budi", "Budi@gmail.com", "2000-01-01", 85)
const student3 = new Student("Caca", "Caca@gmail.com", "1998-01-01", 90)

const arrStudent = [student1, student2, student3]

function calculate(arr: Student[]) {
    const dataScore = arrStudent.map((item) => item.score).sort((a, b) => a - b);
    const dataAge = arrStudent.map((item) => item.getAge()).sort((a, b) => a - b);

    return {
        score: {
            lowest: dataScore[0],
            highest: dataScore[dataScore.length - 1],
            average: dataScore.reduce((a, b) => a + b) / dataScore.length,
        },
        age: {
            lowest: dataAge[0],
            highest: dataAge[dataScore.length - 1],
            average: dataAge.reduce((a, b) => a + b) / dataAge.length, 
        }
    }
}

console.log(calculate(arrStudent))
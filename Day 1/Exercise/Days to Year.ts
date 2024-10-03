/* 
    converts day to year
    notes : 1 year 365 days, and 1 month 30 days

    case1 : 400 days
    case2 : 366 days

    * Math.floor() untuk membulatkan kebawah
    Math.ceil() untuk membulatkan ke atas
    Math.round() untuk membulatkan sesuai aturan matematika
*/

const DaysInYear: number = 365
const DaysInMonth: number = 30
// const n: number = 400

// const years: number = Math.floor(n/ DaysInYear) 

// let months: number = n - DaysInYear
// months = Math.floor(months / DaysInMonth)

// let days: number = n - DaysInYear
// days = days - DaysInMonth

// // console.log(years);
// // console.log(months);
// // console.log(days);

// console.log(`${years} years ${months} months ${days} days`)

const n: number = 400

const sisa: number = n % DaysInYear
const sisa2: number = sisa % 30 // 5

const tahun: number = (n-sisa) / 365
const bulan: number = (sisa - sisa2) / 30
const hari: number = sisa2

const result: string= `${tahun} year, ${bulan} months, ${hari} days`

console.log(result)
console.log(tahun)


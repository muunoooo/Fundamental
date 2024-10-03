/*


*/

const date1: Date = new Date ("2022-01-20")
const date2: Date = new Date("2022-01-22")

const diff: number = (date2.getTime() - date1.getTime())

console.log(diff/ (24 * 60 * 60 * 1000));




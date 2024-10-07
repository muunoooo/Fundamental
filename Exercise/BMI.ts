/*
    Create a function to calculate Body Mass Index (BMI)
    ● Formula : BMI = weight (kg) / (height (centimeter))²
    ● Parameters : weight & height
    ● Return values :  
    ○ < 18.5 return “less weight”
    ○ 18.5 - 24.9 return “ideal”
    ○ 25.0 - 29.9 return “overweight”
    ○ 30.0 - 39.9 return “very overweight”
    ○ > 39.9 return “obesity”z
*/

// BMI = Body Mass Index
function BMI (weight:number, height:number){
    const score: number = weight/ ((height / 100) ** 2 )
    if (score < 18.5) {
        return "less weight"
    } else if (score < 24.9) {
        return "ideal"
    } else if (score < 29.9) {
        return "overweight"
    } else if (score < 39.9) {
        return "very overweight"
    } else {
        return "obesity"
    }
}

console.log(BMI(80,170))
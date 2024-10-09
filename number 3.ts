/*
● Create a function to merge two array of student data and remove duplicate data
● Student data : name & email
● Example :
Array1 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 2’, email : ‘student2@mail.com’ }
]
Array2 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 3’, email : ‘student3@mail.com’ }
]
● Result :
ArrayResult → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 2’, email : ‘student2@mail.com’ },
{ name: ‘Student 3’, email : ‘student3@mail.com’ }
]
*/

// interface Student {
//     name: string;
//     email: string;
// }

// function mergeAndRemoveDuplicates(arr1: Student[], arr2: Student[]): Student[] {
//     const combinedArray = [...arr1, ...arr2];

//     const studentMap = new Map<string, Student>();

//     combinedArray.forEach(student => {
//         studentMap.set(student.email, student);
//     });

//     return Array.from(studentMap.values());
// }

// const array1: Student[] = [
//     { name: 'Student 1', email: 'student1@mail.com' },
//     { name: 'Student 2', email: 'student2@mail.com' }
// ];

// const array2: Student[] = [
//     { name: 'Student 1', email: 'student1@mail.com' },
//     { name: 'Student 3', email: 'student3@mail.com' }
// ];

// const result = mergeAndRemoveDuplicates(array1, array2);
// console.log(result);


interface Student {
    name: string;
    email: string;
}

const array1: Student[] = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 2', email: 'student2@mail.com' }
];

const array2: Student[] = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 3', email: 'student3@mail.com' }
];

function mergeArr (arr1: Student[], arr2: Student[  ]) {
    const result: Student[] = arr1 

    for (let item of arr2) {
        const idx = result.findIndex((val) => val.name == item.name && val.email == item.email)
        if (idx == -1) result.push(item)
    }

    return result
}

console.log(mergeArr(array1, array2));

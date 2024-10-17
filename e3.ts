/**
 * ● Given an integer numRows, return the first numRows of
Pascal's triangle.
● In Pascal's triangle, each number is the sum of the two
numbers directly above it as shown →
● Example 1:
○ Input: numRows = 5
○ Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
● Example 2:
○ Input: numRows = 1
○ Output: [[1]]
 */

// function trianglePascal(input: number): number[][] {
//   let res: number[][] = [];

//   if (input === 0) return res;

//   res.push([1]);

//   for (let i = 1; i < input; i++) {
//     const oldArr = res[i - 1];
//     const newArr: number[] = [];
//     newArr.push(1);

//     for (let j = 1; j < oldArr.length; j++) {
//       newArr.push(oldArr[j - 1] + oldArr[j]);
//     }

//     newArr.push(1);

//     res.push(newArr);
//   }

//   return res;
// }

// console.log(trianglePascal(5));

function pascal(input: number):number[][] {
  const res: any[] = [];

  for (let i = 0; i < input; i++) {
    const arr = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        arr.push(1);
      } else {
        arr.push(res[i - 1][j - 1] + res[i - 1][j]);
      }
    }
    res.push(arr);
  }
  return res;
}
console.log(pascal(5));

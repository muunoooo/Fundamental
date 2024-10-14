/**
 * input = [1, 2, 3, 4, 5, 6] pasti genap
 * output = [6, 1, 5, 2, 4, 3]
 *
 * input = [11, 21, 22, 5, 30, 14]
 * output = [30, 5, 22, 11, 21, 14]
 */

/* this function only works on values of the array is 6*/
function BigSmall(num: number[]): number[] {
  const x = num.sort((a, b) => b - a);

  if (x[1] > x[5]) [x[1], x[5]] = [x[5], x[1]];
  if (x[5] > x[2]) [x[5], x[2]] = [x[2], x[5]];
  if (x[3] > x[4]) [x[3], x[4]] = [x[4], x[3]];
  if (x[5] > x[4]) [x[5], x[4]] = [x[4], x[5]];

  return x;
}

const x: number[] = [11, 14, 68, 31, 2, 6];

console.log(BigSmall(x));

function sortByMaxFirst (num: number[]) : number[] {
    const arr = num.sort((a, b) => a - b)
    const res: number[] = []
    
    let left = 0;
    let right = arr.length - 1

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            res.push(arr[right]);
            right--;
        } else {
            res.push(arr[left]);
            left++;
        }
    }
    return res;
}


function myFunc(num: number[]) {
    num.sort((a,b) => a-b)
    const res: number[] = []

    for (let i = 0; i < num.length - 1; i++){
        res.push(num[num.length -1 - i])
        res.push(num[i])
    }
    return res
}

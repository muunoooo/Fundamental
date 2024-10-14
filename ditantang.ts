/**
 * a=1
 * b=2
 * c=3
 * ...
 * z=26
 *
 */

// const words: string[] = ["a", "b", "c", "d", "e",
//     "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// const number: string[] = ["1","2","3","4","5","6","7","8","9","10","11","12"
//     ,"13","14","15","16","17","18","19","20","21","22","23","24","25","26"]

function wordstovalue(str: string): number {
  const Words: { [key: string]: number } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const x = str.toLowerCase().split(" ").join("");
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    const current = Words[x[i]];
    sum += current;
  }
  return sum;
}

console.log(wordstovalue("Purwadhika"));

function myFunc(str: string) {
  const alphabet: string[] = " abcdefghijklmnopqrstuvwxyz".split("");

  return str
    .split("")
    .map((item) => alphabet.indexOf(item.toLowerCase()))
    .reduce((a, b) => a + b);
}

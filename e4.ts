/**
 * ● You are given an array prices where prices[i] is the price of a given stock on the ith day.
● You want to maximize your profit by choosing a single day to buy one stock and choosing a different
day in the future to sell that stock.
● Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit,
return 0.
● Example 1:
○ Input: prices = [7,1,5,3,6,4]
○ Output: 5
○ Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
○ Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you
sell.
● Example 2:
○ Input: prices = [7,6,4,3,1]
○ Output: 0
○ Explanation: In this case, no transactions are done and the max profit = 0.
Exercise
 */

// function maxProfit(input: number[]): number {
//   if (input.length < 2) return 0;

//   let minPrice = Infinity;
//   let maxProfit = 0;

//   for (let i = 1; i < input.length; i++) {
//     if (input[i] < minPrice) {
//       minPrice = input[i];
//     }
//     let potentialProfit = input[i] - minPrice;

//     if (potentialProfit > maxProfit) {
//       maxProfit = potentialProfit;
//     }
//   }

//   return maxProfit;
// }
// const prices1 = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices1));

// const prices2 = [7, 6, 4, 3, 1];
// console.log(maxProfit(prices2));

function maxProfit(prices: number[]): number {
  let profit = 0;
  let termurah = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < termurah) {
      termurah = prices[i];
    } else if (prices[i] - termurah > profit) {
      profit = prices[i] - termurah;
    }
  }

  return profit;
}

let prices = [2, 9, 7, 1, 5, 3];
console.log(maxProfit(prices));

function Profit(input: number[]) {
  // const min = Math.min(...input)
  // const idxMin = input.indexOf(min)
  // const newArr = input.splice(idxMin)
  // const max = Math.max(...newArr)

  // return max - min
  const res = [];
  for (let i = 0; i <= input.length; i++) {
    for (let j = i + 1; i <= input.length; j++) {
        res.push(input[i] - input[j])
    }
  }
  return Math.max(...res)
}

console.log(Profit([2, 9, 7, 1, 5, 3]));

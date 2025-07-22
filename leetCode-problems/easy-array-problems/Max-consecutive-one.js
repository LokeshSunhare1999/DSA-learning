// Example 1:
// Input: prices = {1, 1, 0, 1, 1, 1}
// Output: 3

let arr = [1, 1, 0, 1, 1, 1];

function maxProfit(prices) {
  let max = 0;
  let curr = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] == 1) {
      curr++;
      max = Math.max(max, curr);
    } else {
      curr = 0;
    }
  }
  return max;
}

console.log(maxProfit(arr));

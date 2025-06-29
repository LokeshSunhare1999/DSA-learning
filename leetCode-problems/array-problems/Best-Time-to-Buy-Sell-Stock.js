// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
const prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
  if (prices.length === 0) return 0;
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if(prices[i] < minPrice) {
      minPrice = prices[i]; // Update the minimum price
    }
    else{
        const profit = prices[i] - minPrice; // Calculate profit if sold at current price
        if(profit > maxProfit){
            maxProfit = profit;
        }
    }
  }
  return maxProfit; // Return the maximum profit found
};


console.log(maxProfit(prices)); // Output: 5

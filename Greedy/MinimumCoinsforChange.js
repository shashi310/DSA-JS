// You are given an amount of money (in cents) and a list of coin denominations. Your task is to find the minimum number of coins needed to make the given amount using the available coin denominations.

// Example:
// Amount: 63 cents
// Coin denominations: [1, 5, 10, 25]

// Solution using Greedy:
// To solve this problem using a Greedy algorithm, we will always choose the largest coin denomination that is less than or equal to the remaining amount and subtract it from the remaining amount until the remaining amount becomes zero.

function minCoinsForChange(amount, coinDenominations) {
    coinDenominations.sort((a, b) => b - a); // Sort denominations in descending order
    let coinCount = 0;
  
    for (let i = 0; i < coinDenominations.length; i++) {
      while (amount >= coinDenominations[i]) {
        amount -= coinDenominations[i];
        coinCount++;
      }
    }
  
    return coinCount;
  }
  
  const amount = 63;
  const coinDenominations = [1, 5, 10, 25];
  const coinsNeeded = minCoinsForChange(amount, coinDenominations);
  console.log(`Minimum coins needed: ${coinsNeeded}`);
  
// Piyush went to fight for Coding Club. There were N soldiers with various powers. There will be Q rounds to fight and in each round Piyush's power will be varied. With power M, Piyush can kill all the soldiers whose power is less than or equal to M(<=M). After each round, All the soldiers who are dead in previous round will reborn.Such that in each round there will be N soldiers to fight. Count the number of soldiers that he can kill in each round and total sum of their powers.


function countAndSumSoldiersPowers(N, powers, Q, rounds) {
    let result = [];
  
    for (let i = 0; i < Q; i++) {
      let M = rounds[i];
      let count = 0;
      let totalSum = 0;
  
      for (let j = 0; j < N; j++) {
        if (powers[j] <= M) {
          count++;
          totalSum += powers[j];
        }
      }
  
      result.push({ round: i + 1, soldiersKilled: count, totalSumOfPowers: totalSum });
  
      // All the soldiers will reborn for the next round
    }
  
    return result;
  }
  
  // Example usage:
  const N = 5; // Number of soldiers
  const powers = [10, 5, 8, 15, 12]; // Powers of the soldiers
  const Q = 3; // Number of rounds
  const rounds = [9, 14, 7]; // Powers of Piyush in each round
  
  const result = countAndSumSoldiersPowers(N, powers, Q, rounds);
  console.log(result);
  
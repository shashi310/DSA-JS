// Masai School will be hosting its Prom Night on 29th Feb.There would be M boys and N girls at the prom tonight. Each boy wants a girl who is strictly shorter than him. A girl can dance with only one boy and vice-versa.
// Given the heights of all the boys and girls comment whether it is possible for all boys to get a girl.

function canAllBoysGetAGirl(boyHeights, girlHeights) {
    // Sort boys and girls heights in ascending order
    boyHeights.sort((a, b) => a - b);
    girlHeights.sort((a, b) => a - b);
  
    let boyIndex = 0;
    let girlIndex = 0;
  
    while (boyIndex < boyHeights.length && girlIndex < girlHeights.length) {
      // Find the next girl who is strictly shorter than the current boy
      while (girlIndex < girlHeights.length && girlHeights[girlIndex] >= boyHeights[boyIndex]) {
        girlIndex++;
      }
  
      // If there are no more girls shorter than the current boy, return false
      if (girlIndex >= girlHeights.length) {
        return false;
      }
  
      // Move to the next boy and girl
      boyIndex++;
      girlIndex++;
    }
  
    // If all boys have found a girl, return true
    return boyIndex === boyHeights.length;
  }
  
  // Example usage:
  const boysHeights = [170, 165, 175, 180];
  const girlsHeights = [160, 165, 170, 175, 180];
  const possible = canAllBoysGetAGirl(boysHeights, girlsHeights);
  console.log("Do All Boys Get A Girl - ",possible?"YES":"NO"); 
  
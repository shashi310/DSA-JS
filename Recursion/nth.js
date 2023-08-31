// Compute the Nth term A(n) of the series, where
// A(0) = 10 , A(1) = 10 , A(2) = -19
// A(i) = (i/6) + (A(i-1) + A(i-3)) , if i > 2 and i is divisible by both 2 and 3.
// A(i) = (i/2) - (A(i-1) + A(i-2)) , if i > 2 and i is only divisible by 2.
// A(i) = (i/3) + (A(i-1) + A(i-3)) , if i > 2 and i is only divisible by 3.
// A(i) = A(i-1) , otherwise




function computeNthTerm(n) {
    if (n === 0 || n === 1 || n === 2) {
      return 10;
    } else if (n % 6 === 0 && n % 2 === 0 && n % 3 === 0) {
      return (n / 6) + (computeNthTerm(n - 1) + computeNthTerm(n - 3));
    } else if (n % 2 === 0) {
      return (n / 2) - (computeNthTerm(n - 1) + computeNthTerm(n - 2));
    } else if (n % 3 === 0) {
      return (n / 3) + (computeNthTerm(n - 1) + computeNthTerm(n - 3));
    } else {
      return computeNthTerm(n - 1);
    }
  }
  
  // Test the computeNthTerm function
  const n = 5;
  const nthTerm = computeNthTerm(n);
  console.log(`A(${n}) = ${nthTerm}`);
  
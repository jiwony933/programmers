function solution(balls, share) {
  let denominator = 1;
  let numerator = 1;

  for (let i = balls; i > balls - share; i--) {
    denominator *= i;
  }

  for (let j = share; j > 0; j--) {
    numerator *= j;
  }

  return denominator / numerator;
}

console.log(solution(3, 2));

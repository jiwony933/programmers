function solution(numer1, denom1, numer2, denom2) {
  var answer = [];

  let newNumer = numer1 * denom2 + numer2 * denom1;
  let newDenom = denom1 * denom2;

  const gcd = getGcd(newNumer, newDenom);

  answer = [newNumer / gcd, newDenom / gcd];
  return answer;
}

const getGcd = (num1, num2) => {
  if (num1 % num2 === 0) return num2;
  return getGcd(num2, num1 % num2);
};

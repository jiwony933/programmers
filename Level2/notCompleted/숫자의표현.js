function solution(n) {
  let divisors = [];

  for (let i = 0; i <= Math.sqrt(n); i++) {
    n % i === 0 && divisors.push(i);
  }

  let count = divisors.filter((el) => el % 2 === 1);

  return count;
}

console.log(solution(5));
console.log(solution(15));
console.log(solution(10));

function solution(M, N) {
  var answer = 0;

  answer = M - 1 + (N - 1) * M;

  return answer;
}

console.log(solution(2, 2));
console.log(solution(2, 5));
console.log(solution(1, 1));

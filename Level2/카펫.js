function solution(brown, yellow) {
  var answer = [];
  let size = brown + yellow;

  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i !== 0) continue;
    if ((i + 2) * (yellow / i + 2) === size) {
      answer = [yellow / i + 2, i + 2];
    }
  }
  return answer;
}

console.log(solution(10, 2));
console.log(solution(8, 1));

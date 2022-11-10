function solution(number) {
  var answer = 0;

  for (i = 0; i < number.length; i++) {
    for (j = i + 1; j < number.length - 1; j++) {
      let findNum = -1 * (number[i] + number[j]);
      let count = number.slice(j + 1).filter((e) => e === findNum).length;
      answer += count;
    }
  }
  return answer;
}

console.log(solution([-2, 3, 0, 2, -5]));
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
console.log(solution([-1, 1, -1, 1]));

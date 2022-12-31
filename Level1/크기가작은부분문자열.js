function solution(t, p) {
  var answer = 0;

  const num = Number(p);
  const numLength = p.length;

  for (let i = 0; i < t.length - p.length + 1; i++) {
    let slicedNum = Number(t.slice(i, i + p.length));
    if (slicedNum <= num) answer += 1;
  }

  return answer;
}

console.log(solution("3141592", "271"));
console.log(solution("500220839878", "7"));
console.log(solution("10203", "15"));

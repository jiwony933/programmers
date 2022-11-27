function solution(s) {
  let num = s;
  let count = 0;
  let deletedZero = 0;

  while (s === "10") {
    s.toString();
  }

  return [count, deletedZero];
}

console.log(solution("110010101001")); // [3,8]
console.log(solution("01110")); // [3,3]
console.log(solution("1111111")); // [4,1]

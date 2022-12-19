function solution(n) {
  let three = n.toString(3);

  let newArr = three.split("");
  let answer = 0;
  for (i = 0; i < newArr.length; i++) {
    answer += 3 ** i * newArr[i];
  }

  return answer;
}

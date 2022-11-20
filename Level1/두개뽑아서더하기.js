function solution(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    for (k = 1; k < arr.length - i; k++) {
      result.push(arr[i] + arr[i + k]);
    }
  }

  let answer = result.filter((a, b) => result.indexOf(a) === b);
  answer.sort((a, b) => a - b);

  return answer;
}

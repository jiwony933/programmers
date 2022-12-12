function solution(array, commands) {
  let answer = [];
  for (index = 0; index < commands.length; index++) {
    let i = commands[index][0];
    let j = commands[index][1];
    let k = commands[index][2];
    sliced = array.slice(i - 1, j);
    sorted = sliced.sort((a, b) => a - b);
    ans = sorted[k - 1];
    answer.push(ans);
  }

  return answer;
}

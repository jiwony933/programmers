function solution(score) {
  var answer = [];

  const averageArr = score.map((el) => (el[0] + el[1]) / 2);
  console.log(averageArr);

  for (let i = 0; i < score.length; i++) {
    answer.push(1 + averageArr.filter((el) => el > averageArr[i]).length);
  }
  return answer;
}

solution([
  [80, 70],
  [90, 50],
  [40, 70],
  [50, 80],
]);

solution([
  [80, 70],
  [70, 80],
  [30, 50],
  [90, 100],
  [100, 90],
  [100, 100],
  [10, 30],
]);

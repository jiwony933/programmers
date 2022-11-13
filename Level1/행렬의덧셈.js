function solution(arr1, arr2) {
  let answer = [];

  for (i = 0; i < arr1.length; i++) {
    let innerArray = [];
    for (j = 0; j < arr1[i].length; j++) {
      console.log(arr1[i][j] + arr2[i][j]);
      innerArray.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(innerArray);
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);

console.log(solution([[1], [2]], [[3], [4]]));

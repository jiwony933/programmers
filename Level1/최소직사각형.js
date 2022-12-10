function solution(sizes) {
  let sortedArr = sizes.map((el) => el.sort((a, b) => b - a));

  let width = sortedArr.map((el) => el[0]).sort((a, b) => b - a)[0];
  let height = sortedArr.map((el) => el[1]).sort((a, b) => b - a)[0];

  return width * height;
}

solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);

solution([
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
]);

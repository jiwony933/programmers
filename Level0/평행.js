function solution(dots) {
  let inclinations = [];
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      let inclination = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
      inclinations.push(inclination);
    }
  }

  const set = [...new Set(inclinations)];

  return set.length === inclinations.length ? 0 : 1;
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
);

console.log(
  solution([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ])
);

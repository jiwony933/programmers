function solution(dots) {
  const startPoint = dots[0];
  let width;
  let height;

  let 가로점 = dots.find(
    (el) => el[0] !== startPoint[0] && el[1] == startPoint[1]
  );
  let 세로점 = dots.find(
    (el) => el[1] !== startPoint[1] && el[0] == startPoint[0]
  );

  width = Math.abs(가로점[0] - startPoint[0]);
  height = Math.abs(세로점[1] - startPoint[1]);

  return width * height;
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);

console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
);

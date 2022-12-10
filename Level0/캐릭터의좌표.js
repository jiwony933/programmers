function solution(keyinput, board) {
  let x = 0;
  let y = 0;

  const index = { left: -1, down: -1, right: 1, up: 1 };
  let Xmove = keyinput.filter((el) => el === "left" || el === "right");
  let Ymove = keyinput.filter((el) => el === "up" || el === "down");

  for (let i = 0; i < Xmove.length; i++) {
    if (x > (board[0] - 2) / 2 || x < -(board[0] - 2) / 2) continue;
    x += index[Xmove[i]];
  }

  for (let j = 0; j < Ymove.length; j++) {
    if (y > (board[1] - 2) / 2 || y < -(board[1] - 2) / 2) continue;
    y += index[Ymove[j]];
  }

  return [x, y];
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));
console.log(solution(["down", "down", "down", "down", "down"], [7, 9]));
console.log(solution(["left", "left", "left", "right"], [3, 3]));
console.log(solution(["up", "up", "up", "down"], [3, 3]));

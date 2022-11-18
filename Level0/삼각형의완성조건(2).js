function solution(sides) {
  var answer = 0;

  // 두 수의 차 보다는 커야 함
  // 두수의 합 보다는 작아야 함

  let Smallest = Math.abs(sides[0] - sides[1]) + 1;
  let Biggest = sides[0] + sides[1] - 1;

  answer = Biggest - Smallest + 1;
  return answer;
}

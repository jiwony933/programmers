function solution(input, min, max) {
  let numArr = input.replace(" ", "").split(",");
  let errorCount = numArr.filter((num) => num < min || num > max).length;

  return errorCount == 0;
}

console.log(solution("1, 3,  45, 6", 1, 45));

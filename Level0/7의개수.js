function solution(array) {
  var answer = 0;
  let eachNum = array.join("").split("");
  answer = eachNum.filter((el) => el === "7").length;
  return answer;
}

solution([7, 77, 17]);

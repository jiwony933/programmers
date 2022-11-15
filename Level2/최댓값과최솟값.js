function solution(s) {
  var answer = "";
  let nums = s.split(" ").map((el) => Number(el));
  nums.sort((a, b) => a - b);

  answer += nums[0].toString() + " " + nums[nums.length - 1].toString();

  return answer;
}

solution("-1 -2 -3 -4");

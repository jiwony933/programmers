function solution(i, j, k) {
  var answer = 0;
  let arr = [];

  for (let x = i; x <= j; x++) {
    arr.push(x);
  }
  let nums = arr.join("").split("");

  answer = nums.filter((el) => el == k.toString()).length;
  return answer;
}

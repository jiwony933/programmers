function solution(n) {
  var answer = 0;
  let nums = [0, 1];

  for (let i = 2; i <= n; i++) {
    nums[i] = nums[i - 2] % 1234567;
    +nums[i - 1] % 1234567;
    // answer = nums[i] % 1234567;
  }

  return nums[n];
}

console.log(solution(10));

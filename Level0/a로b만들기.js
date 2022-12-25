function solution(before, after) {
  const beforeWordSort = before.split("").sort().join("");
  const afterWordSort = after.split("").sort().join("");

  return beforeWordSort == afterWordSort ? 1 : 0;
}

solution("olleh", "hello");

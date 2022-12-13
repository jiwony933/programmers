function solution(arr) {
  if (arr.length === 1) return [-1];
  else {
    let smallest = [...arr].sort((a, b) => a - b)[0];
    return arr.filter((num) => num !== smallest);
  }
}

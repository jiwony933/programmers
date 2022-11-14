function solution(array, n) {
  var answer = array[0];
  let eachGap = Math.abs(array[0] - n);
  for (i = 1; i < array.length; i++) {
    let gap = Math.abs(array[i] - n);
    if (gap < eachGap) {
      eachGap = gap;
      answer = array[i];
    } else if (gap == eachGap) {
      if (array[i] < answer) {
        answer = array[i];
      }
    }
  }

  return answer;
}

console.log(solution([3, 10, 28], 20));

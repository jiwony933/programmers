function solution(num_list, n) {
  var answer = [];

  for (let i = 0; i < num_list.length; i += n) {
    let miniArr = [];
    for (let j = i; j < i + n; j++) {
      miniArr.push(num_list[j]);
    }
    answer.push(miniArr);
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3));

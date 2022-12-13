function solution(food) {
  var answer = "";
  let halfAnswer = "";

  for (i = 1; i < food.length; i++) {
    halfAnswer += i.toString().repeat(Math.floor(food[i] / 2));
  }

  answer = halfAnswer + "0" + halfAnswer.split("").reverse().join("");

  return answer;
}

console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));

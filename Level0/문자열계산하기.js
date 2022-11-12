function solution(my_string) {
  var answer = 0;
  let stringArr = my_string.split(" ");

  answer += Number(stringArr[0]);

  for (i = 1; i < stringArr.length - 1; i++) {
    if (stringArr[i] === "-") {
      answer -= Number(stringArr[i + 1]);
      i + 1;
    } else if (stringArr[i] === "+") {
      answer += Number(stringArr[i + 1]);
      i + 1;
    }
  }

  return answer;
}

solution("31 + 7");
solution("3 - 7 + 5");

function solution(s) {
  var answer = "";
  let answerArr = [];
  let arr = s.split("");

  for (let i = 0; i < arr.length; i += 1) {
    let count = arr.filter((el) => el === arr[i]);
    if (count.length === 1) {
      answerArr.push(arr[i]);
    }
  }
  answer = answerArr.sort((a, b) => (a < b ? -1 : 1)).join("");
  return answer;
}

console.log(solution("abcabcadc"));
console.log(solution("hello"));

function solution(num, k) {
  var answer = 0;

  let numToStr = num.toString();
  let kToStr = k.toString();

  answer = numToStr.indexOf(kToStr) === -1 ? -1 : numToStr.indexOf(kToStr) + 1;

  return answer;
}

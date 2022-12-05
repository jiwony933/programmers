function solution(order) {
  var answer = 0;

  const orderArr = order.toString().split("");

  for (let i = 0; i < orderArr.length; i++) {
    if ("369".includes(orderArr[i])) {
      answer += 1;
    }
  }

  return answer;
}

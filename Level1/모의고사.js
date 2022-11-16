function solution(answ) {
  let supo1 = "12345".repeat(2000).split("");
  let supo2 = "21232425".repeat(1250).split("");
  let supo3 = "3311224455".repeat(1000).split("");

  let supo1P = 0;
  let supo2P = 0;
  let supo3P = 0;

  for (i = 0; i < answ.length; i++) {
    if (answ[i] == supo1[i]) {
      supo1P += 1;
    }
  }
  for (i = 0; i < answ.length; i++) {
    if (answ[i] == supo2[i]) {
      supo2P += 1;
    }
  }
  for (i = 0; i < answ.length; i++) {
    if (answ[i] == supo3[i]) {
      supo3P += 1;
    }
  }
  let eachAnswer = [supo1P, supo2P, supo3P];
  let maxAnswer = Math.max(...eachAnswer);
  let arr = [];
  for (i = 0; i < 3; i++) {
    if (eachAnswer[i] == maxAnswer) {
      arr.push(i + 1);
    }
  }
  return arr;
}

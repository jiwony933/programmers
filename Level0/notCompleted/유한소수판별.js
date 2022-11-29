function solution(a, b) {
  let biggestDivisor = 0;
  let [smallNum, bigNum] = [a, b].sort((a, b) => b - a);

  for (let i = 1; i <= smallNum; i++) {
    if (a % i !== 0) continue;
    if (b % i !== 0) continue;
    if (a % i === 0 && b % i === 0) {
      biggestDivisor = i;
    }
  }

  const denominator = bigNum / biggestDivisor;
  let abc = denominator;

  // for (let i = 1; i <= 3; i++) {
  //   if (abc % 2 == 0) {
  //     abc = abc / 2;
  //   } else if (abc % 5 == 0) {
  //     abc = abc / 5;
  //   } else console.log(abc);
  // }

  // if (denominator === 1) return 1;
  // else if (abc == 1 || abc == 5) return 1;
  // else return 2;
}

solution(7, 20);
solution(11, 22);
solution(12, 21);

function solution(lottos, win_nums) {
  const zeroCount = lottos.filter((item) => item == 0).length;
  let goodNo = 0;
  for (i = 0; i < lottos.length; i++) {
    if (win_nums.indexOf(lottos[i]) !== -1) {
      goodNo += 1;
    }
  }
  let mayGoodNo = goodNo + zeroCount;

  if (goodNo == 0 && zeroCount == 0) {
    return [6 - zeroCount, 6];
  } else if (goodNo == 0 && zeroCount > 0) {
    return [7 - zeroCount, 6];
  } else if (mayGoodNo == 0) {
    return [6, 6];
  } else return [7 - mayGoodNo, 7 - goodNo];
}

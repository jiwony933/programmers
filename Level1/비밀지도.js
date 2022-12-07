function solution(n, arr1, arr2) {
  const makeBinaryScale = (num, digitNum) => {
    let binary = num.toString(2);
    if (binary.length < digitNum) {
      return "0".repeat(n - binary.length) + binary;
    } else return binary;
  };

  const map1 = arr1.map((el) => makeBinaryScale(el, n));
  const map2 = arr2.map((el) => makeBinaryScale(el, n));
  let finalMap = [];

  for (i = 0; i < n; i++) {
    let num = "";
    for (j = 0; j < n; j++) {
      Number(map1[i][j]) + Number(map2[i][j]) > 0 ? (num += "1") : (num += 0);
    }
    finalMap.push(num);
  }

  const remove1 = finalMap.map((el) => el.replaceAll("1", "#"));
  const answer = remove1.map((el) => el.replaceAll("0", " "));

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));

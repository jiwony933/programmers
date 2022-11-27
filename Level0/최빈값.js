function solution(array) {
  let countArr = [];

  const deduplicated = [...new Set(array)];

  for (let i = 0; i < deduplicated.length; i++) {
    let count = array.filter((el) => el === deduplicated[i]).length;
    countArr.push({ num: deduplicated[i], count: count });
  }

  countArr.sort((a, b) => b.count - a.count);

  if (countArr.length > 1 && countArr[0].count === countArr[1].count) {
    return -1;
  } else return countArr[0].num;
}

console.log(solution([1, 2, 3, 3, 3, 4]));
console.log(solution([1, 1, 2, 2]));

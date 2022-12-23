function solution(spell, dic) {
  const sorted = spell.sort().join("");
  let sortedArr = dic.map((el) => el.split("").sort().join(""));

  return sortedArr.filter((el) => el === sorted).length ? 1 : 2;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]));
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));

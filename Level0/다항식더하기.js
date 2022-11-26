function solution(polynomial) {
  let x = 0;
  let num = 0;

  const termArray = polynomial.replace(/(\s*)/g, "").split("+");

  const includeXs = termArray.filter((el) => el.includes("x"));
  const onlyNums = termArray.filter((el) => !el.includes("x"));

  for (let i = 0; i < includeXs.length; i++) {
    let parseInt = Number(includeXs[i].replace("x", ""));
    if (parseInt == 0) {
      x += 1;
    } else x += parseInt;
  }

  for (let i = 0; i < onlyNums.length; i++) {
    let parseInt = Number(onlyNums[i]);
    num += parseInt;
  }

  if (x == 0) {
    return num.toString();
  } else if (x == 1 && num == 0) {
    return "x";
  } else if (num == 0) {
    return `${x}x`;
  } else if (x == 1) {
    return `x + ${num}`;
  } else {
    return `${x}x + ${num}`;
  }
}

console.log(solution("3x + 7 + x"));
console.log(solution("x + x + x"));

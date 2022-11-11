function solution(s) {
  var answer = [];
  let words = s.split(" ");

  for (let i = 0; i < words.length; i++) {
    let changed = "";
    for (let j = 0; j < words[i].length; j++) {
      changed +=
        j % 2 !== 1 ? words[i][j].toUpperCase() : words[i][j].toLowerCase();
    }

    answer.push(changed);
  }
  return answer.join(" ");
}

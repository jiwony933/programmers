function solution(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      answer += str[i].toUpperCase();
    } else {
      answer += str[i].toLowerCase();
    }
  }
  return answer;
}

// function solution(s) {
//   var answer = [];
//   let wordArr = s.split(" ").filter((el) => el !== "");

//   for (let i = 0; i < wordArr.length; i += 1) {
//     let changed = "";
//     wordArr[i][0] == Number(wordArr[i][0])
//       ? (changed += wordArr[i][0])
//       : (changed += wordArr[i][0].toUpperCase());
//     changed += wordArr[i].slice(1).toLowerCase();
//     answer.push(changed);
//   }

//   return answer.join(" ");
// }

function solution(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      answer += str[i].toUpperCase();
    } else {
      answer += str[i].toLowerCase();
    }
  }
  return answer;
}

console.log(solution("33eople  unFollowed me"));
solution("for the last week");

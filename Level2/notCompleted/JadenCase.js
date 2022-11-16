function solution(s) {
  var answer = [];
  let arr = s.split(" ");

  for (let i = 0; i < arr.length; i += 1) {
    let changed = "";

    arr[i][0] == Number(arr[i][0])
      ? (changed += arr[i][0])
      : (changed += arr[i][0].toUpperCase());
    changed += arr[i].slice(1).toLowerCase();
    answer.push(changed);
  }

  return answer.join(" ");
}

// function solution(s) {
//   var answer = [];
//   let arr = s.split(" ");

//   for (let i = 0; i < arr.length; i += 1) {
//     answer.push(changed);
//   }

//   return answer.join(" ");
// }

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));

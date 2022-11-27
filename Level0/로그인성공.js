function solution(id_pw, db) {
  let arr = [];
  const userData = { id: id_pw[0], pw: id_pw[1] };

  for (let i = 0; i < db.length; i++) {
    if (db[i][0] == userData.id && db[i][1] !== userData.pw) {
      arr.push("wrong");
    } else if (db[i][0] == userData.id && db[i][1] == userData.pw) {
      arr.push("success");
    }
  }

  if (arr.includes("success")) {
    return "login";
  } else if (arr.includes("wrong")) {
    return "wrong pw";
  } else return "fail";
}

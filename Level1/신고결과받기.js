function solution(ids, report, k) {
  var answer = [];

  const reportObjArr = report
    .map((el) => el.split(" "))
    .map((el) => ({ reporter: el[0], reported: el[1] }));

  // for (i=0; i<ids.length; i++) {

  return reportObjArr;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);

console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
);

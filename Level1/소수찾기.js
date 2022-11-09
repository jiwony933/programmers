function solution(s) {
    var answer = 1;
    for (i = 3; i <= s; i++) {
        let temp = 0;
        if (i % 2 === 0) continue;
        for (j = 1; j <= Math.sqrt(i); j++) {
            i % j === 0 && temp++;
        }
        temp === 1 && answer++;
    }
    return answer;
}

console.log(solution(10));

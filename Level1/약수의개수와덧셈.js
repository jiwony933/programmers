function solution(left, right) {
    var answer = 0;

    for (i = left; i <= right; i++) {
        let root = Math.sqrt(i);
        Math.floor(root) === root ? (answer -= i) : (answer += i);
    }
    return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));

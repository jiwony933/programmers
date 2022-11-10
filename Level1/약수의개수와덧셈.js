// 제곱근이 정수이면, 약수의 개수가 홀수인 점을 이용

function solution(left, right) {
    var answer = 0;

    for (i = left; i <= right; i++) {
        let root = Math.sqrt(i);
        Math.floor(root) === root ? (answer -= i) : (answer += i);
    }
    return answer;
}


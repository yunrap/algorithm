// 최솟값이니 a는 오름차순, b는 내림차순 정렬후 곱 더하기
function solution(A, B) {
  var answer = 0;

  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}

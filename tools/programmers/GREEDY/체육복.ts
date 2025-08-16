function clothes(n: number, lost: number[], reserve: number[]) {
  const map = new Map();

  // 1. 중복 제거
  const realLost = lost.filter((l) => !reserve.includes(l));
  const realReserve = reserve.filter((r) => !lost.includes(r));

  // 2. 초기값 설정
  for (let i = 1; i <= n; i++) {
    let count = 1; // 기본 체육복 1벌

    if (realLost.includes(i)) {
      count -= 1;
    }
    if (realReserve.includes(i)) {
      count += 1;
    }

    map.set(i, count);
  }

  // 3. 빌려주기 로직
  for (const [key, value] of map.entries()) {
    if (value === 0) {
      // 왼쪽 확인
      if (map.get(key - 1) === 2) {
        map.set(key, 1);
        map.set(key - 1, 1);
      }
      // 오른쪽 확인
      else if (map.get(key + 1) === 2) {
        map.set(key, 1);
        map.set(key + 1, 1);
      }
    }
  }

  // 4. 체육복 >= 1인 학생 수 세기
  let answer = 0;
  for (const count of map.values()) {
    if (count >= 1) answer++;
  }

  return answer;
}

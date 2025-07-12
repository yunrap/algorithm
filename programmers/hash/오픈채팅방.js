// map으로 저장
// 이름바뀐거를 어떻게 한번에 로그를 바꿀까? 생각을했더니
// 이미 로그에 기존 userId를 넣어놓으면되구나

function solution(record) {
  var log = [];
  var answer = [];
  const map = new Map();

  for (const r of record) {
    const s = r.split(' ');
    const [msg, userId, userNm] = s;

    if (msg === 'Enter') {
      // 입장
      map.set(userId, userNm);
      log.push([userId, '들어왔습니다.']);
    }

    if (msg === 'Leave') {
      log.push([userId, '나갔습니다.']);
    }

    if (msg === 'Change') {
      map.set(userId, userNm);
    }
  }

  for (const a of log) {
    const [user, action] = a;
    answer.push(`${map.get(user)}님이 ${action}`);
  }

  return answer;
}

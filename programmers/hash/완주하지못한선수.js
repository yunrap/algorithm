// "leo" , 1, "kiki" , 1 , "eden" , 1  이렇게 hashmap으로 저장해놓고
// 완주자로 하나씩 제거
// 남은것만큼 value 반복문돌린다.

function solution(participant, completion) {
  var answer = '';
  const hashMap = new Map();

  for (people of participant) {
    const exist = hashMap.has(people);
    exist ? hashMap.set(people, hashMap.get(people) + 1) : hashMap.set(people, 1);
  }

  for (people of completion) {
    const count = hashMap.get(people);
    hashMap.set(people, count - 1);
  }

  for (const [people, count] of hashMap.entries()) {
    if (count !== 0) {
      return people;
    }
  }
}

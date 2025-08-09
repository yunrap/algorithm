// 장르별로 가장많이 재생된 노래를 2개씩모아 출시한다.
// [장르들] : plays[합들]

function bestAlbum(genres: string[], plays: number[]) {
  var answer = [];
  const map = new Map();

  for (let i = 0; i < genres.length; i++) {
    map.set(genres[i], (map.get(genres[i]) || 0) + plays[i]);
  }

  const sortedMap = Array.from(map).sort((a, b) => b[1] - a[1]);

  for (const genreMap of sortedMap) {
    let result: number[] = [];
    genres.forEach((g, index) => {
      if (g === genreMap[0]) result.push(index);
    });
    result.sort((a, b) => Number(plays[b]) - Number(plays[a]) || a - b);

    // plays에서 가장큰 2개수만 return 하기
    for (let i = 0; i < Math.min(2, result.length); i++) {
      answer.push(result[i]);
    }
  }

  return answer;
}

export { bestAlbum };

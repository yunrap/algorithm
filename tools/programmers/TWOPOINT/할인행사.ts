function discountFn(want: string[], number: number[], discount: string[]) {
  var answer = 0;

  let leftPt = 0;
  let rightPt = 10 + leftPt;
  while (rightPt < discount.length + 1) {
    const list = discount.slice(leftPt, rightPt);
    const disCountObj: { [key: string]: number } = {};

    list.forEach((l) => (disCountObj[l] = (disCountObj[l] || 0) + 1));
    // 비교
    for (let i = 0; i < want.length; i++) {
      // 다같아야 count++ 아니면 break
      if (disCountObj[want[i]] !== number[i]) break;
      if (i === want.length - 1) answer++;
    }

    leftPt++;
    rightPt++;
  }

  return answer;
}

export { discountFn };

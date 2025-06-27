export class MyCalendarTwo {
  overlaps: [number, number][];
  booked: [number, number][];
  constructor() {
    this.booked = [];
    this.overlaps = [];
  }

  book(startTime: number, endTime: number): boolean {
    for (const [s, e] of this.overlaps) {
      // 트리플예약시
      if (startTime < e && endTime > s) {
        return false;
      }
    }

    for (const [s, e] of this.booked) {
      if (startTime < e && endTime > s) {
        //겹칠시 이중예약등록
        const overlapStart = Math.max(startTime, s);
        const overlapEnd = Math.min(endTime, e);
        this.overlaps.push([overlapStart, overlapEnd]);
      }
    }

    // 안겹침 등록
    this.booked.push([startTime, endTime]);
    return true;
  }
}

import { describe, expect, test, beforeEach } from '@jest/globals';
import { MyCalendarTwo } from '../../etc/731_mycalendar';

describe('MyCalendarTwo', () => {
  let calendar: MyCalendarTwo;

  beforeEach(() => {
    calendar = new MyCalendarTwo();
  });

  test('기본 예약 테스트', () => {
    expect(calendar.book(10, 20)).toBe(true);
    expect(calendar.book(50, 60)).toBe(true);
    expect(calendar.book(10, 40)).toBe(true);
    expect(calendar.book(5, 15)).toBe(false); // triple booking 발생
    expect(calendar.book(5, 10)).toBe(true);
    expect(calendar.book(25, 55)).toBe(true);
  });

  test('중복 없이 예약', () => {
    expect(calendar.book(0, 5)).toBe(true);
    expect(calendar.book(5, 10)).toBe(true);
    expect(calendar.book(10, 15)).toBe(true);
  });

  test('트리플 예약 방지', () => {
    expect(calendar.book(10, 20)).toBe(true);
    expect(calendar.book(10, 20)).toBe(true);
    expect(calendar.book(10, 20)).toBe(false); // 세번째 예약 불가
  });
});

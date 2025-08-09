import { bestAlbum } from '../HASH/베스트앨범';

// Assume solution is imported from the correct path

describe('solution', () => {
  it('returns correct indices for sample input', () => {
    const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
    const plays = [500, 600, 150, 800, 2500];
    expect(bestAlbum(genres, plays)).toEqual([4, 1, 3, 0]);
  });

  it('returns only one song if genre has one song', () => {
    const genres = ['jazz'];
    const plays = [1000];
    expect(bestAlbum(genres, plays)).toEqual([0]);
  });

  it('returns two songs for a genre with two songs', () => {
    const genres = ['rock', 'rock'];
    const plays = [300, 400];
    expect(bestAlbum(genres, plays)).toEqual([1, 0]);
  });

  it('returns songs in correct order when plays are equal', () => {
    const genres = ['hiphop', 'hiphop', 'hiphop'];
    const plays = [100, 100, 100];
    expect(bestAlbum(genres, plays)).toEqual([0, 1]);
  });

  it('handles multiple genres with ties in total plays', () => {
    const genres = ['a', 'b', 'a', 'b'];
    const plays = [100, 200, 200, 100];
    expect(bestAlbum(genres, plays)).toEqual([1, 3, 2, 0]);
  });

  it('returns empty array for empty input', () => {
    expect(bestAlbum([], [])).toEqual([]);
  });
});

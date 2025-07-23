class TimeLimitedCache {
  cacheMap: Map<number, { value: number; expire: number }>;

  constructor() {
    this.cacheMap = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    const now = Date.now();
    const expire = now + duration;
    const existing = this.cacheMap.get(key);

    const isValid = existing !== undefined && existing.expire > now;
    this.cacheMap.set(key, { value, expire });

    return isValid;
  }

  get(key: number): number {
    const now = Date.now();
    const entry = this.cacheMap.get(key);
    if (!entry) return -1;
    if (entry.expire <= now) return -1;

    return entry.value;
  }

  count(): number {
    const now = Date.now();
    let cnt = 0;
    for (const { expire } of this.cacheMap.values()) {
      if (expire > now) {
        cnt++;
      }
    }
    return cnt;
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

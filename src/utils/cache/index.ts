enum Cache {
  local,
  session
}

class CacheStorage {
  storage: Storage
  constructor(type: Cache) {
    this.storage = type === Cache.local ? localStorage : sessionStorage
  }

  getStorage(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  setStorage(key: string, value: any) {
    return this.storage.setItem(key, JSON.stringify(value))
  }

  removeStorage(key: string) {
    this.storage.removeItem(key)
  }

  clearStorage() {
    this.storage.clear()
  }
}

const localCache = new CacheStorage(Cache.local)
const sessionCache = new CacheStorage(Cache.session)
export { localCache, sessionCache }

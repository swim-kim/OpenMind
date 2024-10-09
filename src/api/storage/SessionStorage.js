const SessionStore = {
  setItem: (key, value) => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }
  },
  getItem: (key) => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    return null;
  },
  removeItem: (key) => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      window.sessionStorage.removeItem(key);
    }
  },
  clear: () => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      window.sessionStorage.clear();
    }
  },
  setArray: (key, array) => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      window.sessionStorage.setItem(key, JSON.stringify(array));
    }
  },
  getArray: (key) => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    }
    return [];
  },
  pushToArray: (key, value) => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const array = sessionStorage.getArray(key);
      array.push(value);
      sessionStorage.setArray(key, array);
    }
  },
  removeFromArray: (key, index) => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const array = sessionStorage.getArray(key);
      array.splice(index, 1);
      sessionStorage.setArray(key, array);
    }
  },
};

export default SessionStore;
const LocalStore = {
  setItem: (key, value) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  },
  getItem: (key) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    return null;
  },
  removeItem: (key) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(key);
    }
  },
  clear: () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.clear();
    }
  },
  setArray: (key, array) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, JSON.stringify(array));
    }
  },
  getArray: (key) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    }
    return [];
  },
  pushToArray: (key, value) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const array = localStorage.getArray(key);
      array.push(value);
      localStorage.setArray(key, array);
    }
  },
  removeFromArray: (key, index) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const array = localStorage.getArray(key);
      array.splice(index, 1);
      localStorage.setArray(key, array);
    }
  },
};

export default LocalStore;
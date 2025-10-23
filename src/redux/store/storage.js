// src/redux/storage.js
export const saveToStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromStorage = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const removeFromStorage = (key) => {
  localStorage.removeItem(key);
};

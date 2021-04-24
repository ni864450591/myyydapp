//会话存储，浏览器一关，就没了
const storage = window.sessionStorage;

// 设置
const set = (key, value) => {
  storage.setItem(key, JSON.stringify(value));
};

// 获取
const get = key => {
  return JSON.parse(storage.getItem(key));
};

// 删除
const remove = key => {
  storage.removeItem(key);
};

// 清空
const clear = () => {
  storage.clear();
};

export { set, get, remove, clear };

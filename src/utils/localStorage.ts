/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 11:49:12
 * @LastEditTime: 2021-12-07 13:28:04
 * @LastEditors: ecstAsy
 */
export const setItem = (name: string, value: string) => {
  let Value = value;
  if (typeof value === "object") {
    Value = JSON.stringify(value);
  }
  window.localStorage.setItem(name, Value);
};

export const getItem = (name:string) => {
  const data = window.localStorage.getItem(name);
  try {
    return JSON.parse(data || "0");
  } catch (err) {
    return data;
  }
};

export const removeItem = (name:string) => {
  window.localStorage.removeItem(name);
};

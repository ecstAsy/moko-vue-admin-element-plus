/*
 * @Author: ecstAsy
 * @Date: 2021-12-21 09:35:16
 * @LastEditTime: 2021-12-21 13:15:09
 * @LastEditors: ecstAsy
 */
import Mock from "mockjs";

const STATUS = [
  {
    label: "未开始",
    value: 1,
  }, {
    label: "运行中",
    value: 2,
  }, {
    label: "已完成",
    value: 3,
  }, {
    label: "已过期",
    value: 4,
  },
];

const data = () => Mock.mock({
  "list|10": [
    {
      id: "@increment",
      "avatar|+1": "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      "name|+1": "@name",
      date: "@date",
      "dynamicType|+1": ["近期热门", "读者推荐"],
      star: "@integer(60, 1000)",
      address: "@title(3, 5)",
      "times|1-10": 10,
      "status|+1": Array.from(STATUS, ({ value }) => value),
      // statusName():string {
      //   let str = "";
      //   const obj = STATUS.find((item) => item.value === this.status);
      //   if (obj) {
      //     str = obj.label;
      //   }
      //   return str;
      // },
    },
  ],
});

const mockStatus = () => {
  const result = {
    code: 0,
    data: STATUS,
    message: "获取成功！",
  };
  return result;
};

const mockLists = (params:any) => {
  const result = {
    code: 0,
    data: data(),
    message: "获取成功！",
    ...params,
  };
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), 500);
  });
};

export {
  mockStatus,
  mockLists,
};

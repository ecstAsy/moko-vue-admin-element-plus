/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 11:47:01
 * @LastEditTime: 2021-12-22 17:35:25
 * @LastEditors: ecstAsy
 */
import { MockMethod } from "vite-plugin-mock";

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

const data = Mock.mock({
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
      statusName () {
        const str = STATUS.find((item) => item.value === this.status);
        return str?.label;
      },
    },
  ],
});

const common: Array<MockMethod> = [
  {
    url: "/api/common/status",
    method: "get",
    response: {
      code: 0,
      data: STATUS,
      message: "获取成功！",
    },
  }, {
    url: "/api/common/list",
    method: "post",
    response: {
      code: 0,
      data,
      message: "获取成功！",
    },
  },
];

export default common;

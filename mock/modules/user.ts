/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 11:46:34
 * @LastEditTime: 2022-07-08 15:25:16
 * @LastEditors: ecstAsy
 */
import { MockMethod } from "vite-plugin-mock";
import { GetRandomStr } from "ecstasy-tools";

const user: Array<MockMethod> = [
  {
    url: "/api/auth/login",
    method: "post",
    response: {
      code: 0,
      data: {
        name: "Moko",
        token: GetRandomStr(64),
        roles: ["admin"],
      },
      message: "登录成功！",
    },
  },
  {
    url: "/api/get",
    method: "get",
    response: () => ({
      code: 0,
      data: {
        name: "vben",
      },
    }),
  },
  {
    url: "/api/text",
    method: "post",
    rawResponse: async (req, res) => {
      let reqbody = "";
      await new Promise((resolve) => {
        req.on("data", (chunk) => {
          reqbody += chunk;
        });
        req.on("end", () => resolve(undefined));
      });
      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    },
  },
];

export default user;

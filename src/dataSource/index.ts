/*
 * @Author: ecstAsy
 * @Date: 2021-12-21 09:35:16
 * @LastEditTime: 2022-10-21 17:10:12
 * @LastEditors: ecstAsy
 */
import Mock from "mockjs";

const PayWays = [
  {
    label: "银行卡",
    value: 1,
  },
  {
    label: "微信",
    value: 2,
  },
  {
    label: "支付宝",
    value: 3,
  },
];

const STATUS = [
  {
    label: "未开始",
    value: 1,
  },
  {
    label: "运行中",
    value: 2,
  },
  {
    label: "已完成",
    value: 3,
  },
  {
    label: "已过期",
    value: 4,
  },
];

const Tags = [
  "近期热门",
  "读者推荐",
  "设计语言",
  "人间常态",
  "隔岸观火",
  "釜底抽薪",
];

const getRandmArry = (arry: Array<string>, num: number) => {
  let vs: Array<string> = [];
  let i = 1;
  while (i <= num) {
    vs = [...vs, arry[Math.floor(Math.random() * arry.length)]];
    i += 1;
  }
  return vs;
};

const Texts = [
  "不要眼眶一红，就觉得人间不值得！",
  "散伙是人间常态，你我，又有什么例外！",
  "夏虫不可语于冰，井蛙不可语于海。",
  "生而未养，断指可还。生而养之！",
  "断头可还。未生而养，百世难还！",
  "二十年芦叶满汀洲，寒沙带浅流。",
  "柳下系船犹未稳，能几日，又中秋。",
  "重过南楼。黄鹤断矶头，故人曾到否？旧江山浑是新愁。",
  "欲买桂花同载酒，终不似，少年游。",
];

const data = () =>
  Mock.mock({
    "data|10": [
      {
        id: "@increment",
        "avatar|+1":
          "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "name|+1": "@name",
        "cname|+1": "@cname",
        date: "@datetime",
        "dynamicType|+1": ["近期热门", "读者推荐"],
        star: "@integer(60, 1000)",
        address: "@title(2)",
        "times|1-10": 10,
        "status|+1": Array.from(STATUS, ({ value }) => value),
        tags: new Set([...getRandmArry(Tags, 4)]),
        like: "@integer(60, 1000)",
        view: "@integer(60, 1000)",
        article: "@cparagraph(10,20)",
        "signature|+1": Texts,
        "bgimg|1": [0, 1, 2, 3, 4, 5, 6],
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

const mockLists = (params: any) => {
  let arry = data();
  if (params.num === 12) {
    arry.data = [...arry.data, ...data().data.splice(8)];
  }
  arry = {
    ...arry,
    pageNo: params.current,
    pageSize: 10,
    totalCount: 110,
    totalPage: 10,
  };
  const result = {
    code: 0,
    data: arry,
    message: "获取成功！",
  };

  return new Promise((resolve) => {
    setTimeout(() => resolve(result), 500);
  });
};

export { mockStatus, mockLists, PayWays };

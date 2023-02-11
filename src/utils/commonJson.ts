export const commonData: Method[] = [
  {
    id: "createMapper",
    title: "createMapper 根据object返回map对象",
    example: `import { common as CommonTool } from "zlinni_common_pkg";
    const obj = {
      first: 1,
      second: 2,
      third: 3,
    };
    console.log(CommonTool.createMapper(obj));
    //Map(3){'first' => 1, 'second' => 2, 'third' => 3}`,
    code: `/**
     * 根据object返回map对象
     * @param obj object
     * @returns map对象
     */
    const createMapper = <T extends Record<string, any>>(obj: T) => {
      const mapper = new Map();
      Object.keys(obj).forEach((key) => {
        mapper.set(key, obj[key]);
      });
      return mapper;
    };`,
  },
  {
    id: "tes6",
    title: "createMapper 根据object返回map对象",
    example: "",
    code: "/**\n * 反转Object键值对\n * @param Object 对象\n * @returns\n */\nconst reverseObject = <T extends Record<string, any>>(mapper: T) => {\n  return Object.keys(mapper).reduce((pre, curKey: keyof T) => {\n    pre[mapper[curKey]] = curKey;\n    return pre;\n  }, {} as Record<T[keyof T], keyof T>);\n};",
  },
];

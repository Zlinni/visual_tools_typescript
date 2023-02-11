// 写入工具库
export const sliceArray = <T>(arr: T[], size: number): T[][] => {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i = i + size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
};
// 将传入的对象数组分成n组
export const divContentDatas = <T>(arr: T[]) => {
  const len = arr.length - 1;
  const divCount = Math.floor(len / 2);
  const res: T[] = [];
  for (let i = 0; i <= divCount; i++) {
    res.push(arr[i]);
  }
  const res2: T[] = [];
  for (let i = divCount + 1; i <= len; i++) {
    res2.push(arr[i]);
  }
  return [res, res2];
};

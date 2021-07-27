/**
 * 去除字符串左边的空格
 * @param str 字符串
 */
export declare function trimLeft(str: string): string;
export declare function trimLeft(str: any): string;

declare module './ctor' {
  interface DIUtilsMethods {
    trimLeft: typeof trimLeft;
  }
}

export default trimLeft

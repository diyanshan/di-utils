/**
 * 反转 escape
 * @param str 字符串
 */
export declare function unescape(str: string): string;
export declare function unescape(str: any): string;

declare module './ctor' {
  interface DIUtilsMethods {
    unescape: typeof unescape;
  }
}

export default unescape

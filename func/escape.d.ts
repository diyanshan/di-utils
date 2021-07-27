/**
 * 转义HTML字符串，替换&, <, >, ", ', \`字符
 * @param str 字符串
 */
export declare function escape(str: string): string;

declare module './ctor' {
  interface DIUtilsMethods {
    escape: typeof escape;
  }
}

export default escape

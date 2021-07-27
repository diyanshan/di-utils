/**
 * 转字符串
 * @param obj 值
 */
export declare function toString(obj: any): string;

declare module './ctor' {
  interface DIUtilsMethods {
    toString: typeof toString;
  }
}

export default toString

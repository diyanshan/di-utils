/**
 * 判断是否 Number 对象
 * @param val 值
 */
export declare function isNumber(val: any): val is number;

declare module './ctor' {
  interface DIUtilsMethods {
    isNumber: typeof isNumber;
  }
}

export default isNumber

/**
 * 判断是否为空对象
 * @param val 值
 */
export declare function isEmpty(val: any): boolean;

declare module './ctor' {
  interface DIUtilsMethods {
    isEmpty: typeof isEmpty;
  }
}

export default isEmpty

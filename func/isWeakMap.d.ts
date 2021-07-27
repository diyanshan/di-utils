/**
 * 判断是否 WeakMap 对象
 * @param val 值
 */
export declare function isWeakMap(val: any): val is WeakMap<any, any>;

declare module './ctor' {
  interface DIUtilsMethods {
    isWeakMap: typeof isWeakMap;
  }
}

export default isWeakMap

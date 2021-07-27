/**
 * 判断是否 Element 对象
 * @param val 值
 */
export declare function isElement(val: any): val is Element;

declare module './ctor' {
  interface DIUtilsMethods {
    isElement: typeof isElement;
  }
}

export default isElement

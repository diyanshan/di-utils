/**
 * 判断是否 Window 对象
 * @param val 值
 */
export declare function isWindow(val: any): val is Window;

declare module './ctor' {
  interface DIUtilsMethods {
    isWindow: typeof isWindow;
  }
}

export default isWindow

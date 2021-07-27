/**
 * 判断是否 undefined 和 null
 * @param obj 对象
 */
export declare function eqNull(obj: any): boolean;

declare module './ctor' {
  interface DIUtilsMethods {
    eqNull: typeof eqNull;
  }
}

export default eqNull

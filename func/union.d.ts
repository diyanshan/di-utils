/**
 * 将多个数的值返回唯一的并集数组
 * @param array 数组
 */
export declare function union(...array: any[]): any[];

declare module './ctor' {
  interface DIUtilsMethods {
    union: typeof union;
  }
}

export default union

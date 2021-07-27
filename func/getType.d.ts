/**
 * 获取对象类型
 * @param obj 对象
 */
export declare function getType(obj: any): string;

declare module './ctor' {
  interface DIUtilsMethods {
    getType: typeof getType;
  }
}

export default getType

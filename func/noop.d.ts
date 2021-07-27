/**
 * 一个空的方法，始终返回 undefined，可用于初始化值
 */
export declare function noop(...args: any[]): void;

declare module './ctor' {
  interface DIUtilsMethods {
    noop: typeof noop;
  }
}

export default noop
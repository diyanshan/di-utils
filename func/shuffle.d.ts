/**
 * 将一个数组随机打乱，返回一个新的数组
 * @param list 数组
  */
export declare function shuffle<T>(list: T[]): T[];

declare module './ctor' {
  interface DIUtilsMethods {
    shuffle: typeof shuffle;
  }
}

export default shuffle

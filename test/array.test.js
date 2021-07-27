const DIUtils = require('../func')

describe('Array functions', () => {
  test('uniq()', () => {
    expect(
      DIUtils.uniq()
    ).toEqual([])
    expect(
      DIUtils.uniq(null)
    ).toEqual([])
    expect(
      DIUtils.uniq(undefined)
    ).toEqual([])
    expect(
      DIUtils.uniq(-1)
    ).toEqual([])
    expect(
      DIUtils.uniq(123)
    ).toEqual([])
    expect(
      DIUtils.uniq('')
    ).toEqual([])
    expect(
      DIUtils.uniq(/\d/)
    ).toEqual([])
    expect(
      DIUtils.uniq([])
    ).toEqual([])
    expect(
      DIUtils.uniq({})
    ).toEqual([])
    expect(
      DIUtils.uniq(function () { })
    ).toEqual([])
    expect(
      DIUtils.uniq('abcb')
    ).toEqual(['a', 'b', 'c'])
    expect(
      DIUtils.uniq([11, 22, 33, 33, 22, '22'])
    ).toEqual([11, 22, 33, '22'])
    expect(
      DIUtils.uniq([11, 22, 33, 33, 22, 55])
    ).toEqual([11, 22, 33, 55])
    expect(
      DIUtils.uniq([11, 33, 33, { a: 11 }, { a: 11 }])
    ).toEqual([11, 33, { a: 11 }, { a: 11 }])
    let a1 = { a: 11 }
    expect(
      DIUtils.uniq([11, 33, 33, a1, a1])
    ).toEqual([11, 33, { a: 11 }])
  })

  test('union()', () => {
    expect(
      DIUtils.union()
    ).toEqual([])
    expect(
      DIUtils.union(0)
    ).toEqual([])
    expect(
      DIUtils.union(-1)
    ).toEqual([])
    expect(
      DIUtils.union(undefined)
    ).toEqual([])
    expect(
      DIUtils.union(null)
    ).toEqual([])
    expect(
      DIUtils.union('')
    ).toEqual([])
    expect(
      DIUtils.union(/\d/)
    ).toEqual([])
    expect(
      DIUtils.union({})
    ).toEqual([])
    expect(
      DIUtils.union([])
    ).toEqual([])
    expect(
      DIUtils.union(function () { })
    ).toEqual([])
    expect(
      DIUtils.union([11, 22, 44, 11])
    ).toEqual([11, 22, 44])
    expect(
      DIUtils.union([11, 22, 44, 11], [11, 44])
    ).toEqual([11, 22, 44])
    expect(
      DIUtils.union([11, 22], [33, 22], [44, 11])
    ).toEqual([11, 22, 33, 44])
  })

  test('slice()', () => {
    expect(
      DIUtils.slice(0)
    ).toEqual([])
    expect(
      DIUtils.slice(-1)
    ).toEqual([])
    expect(
      DIUtils.slice(123)
    ).toEqual([])
    expect(
      DIUtils.slice(false)
    ).toEqual([])
    expect(
      DIUtils.slice('')
    ).toEqual([])
    expect(
      DIUtils.slice(/\d/)
    ).toEqual([])
    expect(
      DIUtils.slice({})
    ).toEqual([])
    expect(
      DIUtils.slice([])
    ).toEqual([])
    expect(
      DIUtils.slice(function () { })
    ).toEqual([])
    expect(
      DIUtils.slice([11, 22])
    ).toEqual([11, 22])
    expect(
      DIUtils.slice([11, 22, 33, 44], 0)
    ).toEqual([11, 22, 33, 44])
    expect(
      DIUtils.slice([11, 22, 33, 44], 0, 0)
    ).toEqual([])
    expect(
      DIUtils.slice([11, 22, 33, 44], 1)
    ).toEqual([22, 33, 44])
    expect(
      DIUtils.slice([11, 22, 33, 44], 1, 3)
    ).toEqual([22, 33])
    expect(
      DIUtils.slice([11, 22, 33, 44], 0, 1)
    ).toEqual([11])
    let method = function () {
      expect(
        DIUtils.slice(arguments, 1, 3)
      ).toEqual([22, 33])
    }
    method(11, 22, 33, 44)
  })

  test('orderBy()', () => {
    expect(
      DIUtils.orderBy()
    ).toEqual([])
    expect(
      DIUtils.orderBy(null)
    ).toEqual([])
    expect(
      DIUtils.orderBy(undefined)
    ).toEqual([])
    expect(
      DIUtils.orderBy({})
    ).toEqual([])
    expect(
      DIUtils.orderBy(-1)
    ).toEqual([])
    expect(
      DIUtils.orderBy(0)
    ).toEqual([])
    expect(
      DIUtils.orderBy(123)
    ).toEqual([])
    expect(
      DIUtils.orderBy('')
    ).toEqual([])
    expect(
      DIUtils.orderBy(/\d/)
    ).toEqual([])
    expect(
      DIUtils.orderBy(function () { })
    ).toEqual([])
    expect(
      DIUtils.orderBy('abc')
    ).toEqual(['a', 'b', 'c'])
    expect(
      DIUtils.orderBy(['b', 'j', 'a', 'c'])
    ).toEqual(['a', 'b', 'c', 'j'])
    expect(
      DIUtils.orderBy([11, 55, 99, 22, 9, 1, 10])
    ).toEqual([1, 9, 10, 11, 22, 55, 99])
    expect(
      DIUtils.orderBy([11, 55, 99, 77, 11, 55, 22, 10, 9, 111], [])
    ).toEqual([11, 55, 99, 77, 11, 55, 22, 10, 9, 111])
    expect(
      DIUtils.orderBy([120, 103, 10, 13, 22, 23, 24, 33, 55, 8, 9, 30, 40, 90, 99, 88, 77, 0, 1, 2, 3, 11, 12, 4, 5, 6, 7, 66, 44, 77, 100])
    ).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 22, 23, 24, 30, 33, 40, 44, 55, 66, 77, 77, 88, 90, 99, 100, 103, 120])
    expect(
      DIUtils.orderBy(['11', '55', '99', '77', '11', '55', '22', '0', '9'])
    ).toEqual(['0', '11', '11', '22', '55', '55', '77', '9', '99'])
    expect(
      DIUtils.orderBy(['x', 'z', 'g', 'q', 'e', 'b', 'a', 'g', 'f', 'c', 'j'])
    ).toEqual(['a', 'b', 'c', 'e', 'f', 'g', 'g', 'j', 'q', 'x', 'z'])
    expect(
      DIUtils.orderBy([null, 'a', 'g', null, null, 'c', 'j'])
    ).toEqual(['a', 'c', 'g', 'j', null, null, null])
    expect(
      DIUtils.orderBy([null, 'a', 'g', null, undefined, null, 'c', undefined, 0, 'j'])
    ).toEqual([0, 'a', 'c', 'g', 'j', null, null, null, undefined, undefined])
    expect(
      DIUtils.orderBy([{ a: null }, { a: 'g' }, { a: undefined }, { a: 'a' }, { a: null }, { a: null }, { a: 'j' }, { a: 'c' }], 'a')
    ).toEqual([{ a: 'a' }, { a: 'c' }, { a: 'g' }, { a: 'j' }, { a: null }, { a: null }, { a: null }, { a: undefined }])
    expect(
      DIUtils.orderBy([{ age: 27 }, { age: 26 }, { age: 28 }], 'age')
    ).toEqual([{ age: 26 }, { age: 27 }, { age: 28 }])
    expect(
      DIUtils.orderBy([{ age: 27 }, { age: 26 }, { age: 28 }], ['age'])
    ).toEqual([{ age: 26 }, { age: 27 }, { age: 28 }])
    expect(
      DIUtils.orderBy([{ a: { b: 66 } }, { a: { b: 33 } }, { a: { b: 11 } }], 'a.b')
    ).toEqual([{ a: { b: 11 } }, { a: { b: 33 } }, { a: { b: 66 } }])
    expect(
      DIUtils.orderBy([{ a: { b: 66 } }, { a: { b: 33 } }, { a: { b: 11 } }], ['a.b'])
    ).toEqual([{ a: { b: 11 } }, { a: { b: 33 } }, { a: { b: 66 } }])
    expect(
      DIUtils.orderBy([{ a: { b: 66 }, c: 6 }, { a: { b: 33 }, c: 9 }, { a: { b: 11 }, c: 6 }], ['c', 'a.b'])
    ).toEqual([{ a: { b: 11 }, c: 6 }, { a: { b: 66 }, c: 6 }, { a: { b: 33 }, c: 9 }])
    expect(
      DIUtils.orderBy([{ age: 27 }, { age: 26 }, { age: 28 }], item => item.age)
    ).toEqual([{ age: 26 }, { age: 27 }, { age: 28 }])
    expect(
      DIUtils.orderBy([{ name: 'x' }, { name: 'l' }, { name: 'a' }], [item => item.name])
    ).toEqual([{ name: 'a' }, { name: 'l' }, { name: 'x' }])
    expect(
      DIUtils.orderBy([
        { name: 'x', age: 25 },
        { name: 'd', age: 27 },
        { name: 'z', age: 27 },
        { name: 'x', age: 24 },
        { name: 'x', age: 26 },
        { name: 'z', age: 26 }
      ], ['name', 'age'])
    ).toEqual([
      { name: 'd', age: 27 },
      { name: 'x', age: 24 },
      { name: 'x', age: 25 },
      { name: 'x', age: 26 },
      { name: 'z', age: 26 },
      { name: 'z', age: 27 }
    ])
    expect(
      DIUtils.orderBy([
        { name: 'x', age: 26 },
        { name: 'd', age: 27 },
        { name: 'z', age: 26 },
        { name: 'z', age: 26 }
      ], ['age', 'name'])
    ).toEqual([
      { name: 'x', age: 26 },
      { name: 'z', age: 26 },
      { name: 'z', age: 26 },
      { name: 'd', age: 27 }
    ])
    expect(
      DIUtils.orderBy([
        { name: 'x', age: 26 },
        { name: 'd', age: 27 },
        { name: 'x', age: 26 },
        { name: 'z', age: 26 }
      ], [item => item.name, item => item.age])
    ).toEqual([
      { name: 'd', age: 27 },
      { name: 'x', age: 26 },
      { name: 'x', age: 26 },
      { name: 'z', age: 26 }
    ])
    expect(
      DIUtils.orderBy([
        { name: 'x', age: 26 },
        { name: 'd', age: 27 },
        { name: 'z', age: 26 },
        { name: 'z', age: 26 }]
        , ['age', item => item.name])
    ).toEqual([
      { name: 'x', age: 26 },
      { name: 'z', age: 26 },
      { name: 'z', age: 26 },
      { name: 'd', age: 27 }
    ])
    expect(
      DIUtils.orderBy([
        { name: 'x', age: 26, height: 176 },
        { name: 'd', age: 27, height: 176 },
        { name: 'z', age: 26, height: 178 },
        { name: 'z', age: 26, height: 176 },
        { name: 'd', age: 27, height: 175 }
      ], ['name', 'age', 'height'])
    ).toEqual([
      { name: 'd', age: 27, height: 175 },
      { name: 'd', age: 27, height: 176 },
      { name: 'x', age: 26, height: 176 },
      { name: 'z', age: 26, height: 176 },
      { name: 'z', age: 26, height: 178 }
    ])
    expect(
      DIUtils.orderBy([
        { name: 'x', age: 26, height: 176 },
        { name: 'd', age: 27, height: 176 },
        { name: 'z', age: 26, height: 178 },
        { name: 'z', age: 26, height: 176 },
        { name: 'd', age: 27, height: 175 }
      ], [['name'], ['age'], ['height']])
    ).toEqual([
      { name: 'd', age: 27, height: 175 },
      { name: 'd', age: 27, height: 176 },
      { name: 'x', age: 26, height: 176 },
      { name: 'z', age: 26, height: 176 },
      { name: 'z', age: 26, height: 178 }
    ])
    expect(
      DIUtils.orderBy([
        { name: 'x', age: 26, height: 176 },
        { name: 'd', age: 27, height: 176 },
        { name: 'z', age: 26, height: 178 },
        { name: 'z', age: 26, height: 176 },
        { name: 'x', age: 30, height: 176 },
        { name: 'd', age: 27, height: 175 },
        { name: 'd', age: 21, height: 165 },
        { name: 'x', age: 22, height: 196 }
      ], [{ field: 'name', order: 'asc' }, { field: 'age', order: 'asc' }, { field: 'height', order: 'asc' }])
    ).toEqual([
      { name: 'd', age: 21, height: 165 },
      { name: 'd', age: 27, height: 175 },
      { name: 'd', age: 27, height: 176 },
      { name: 'x', age: 22, height: 196 },
      { name: 'x', age: 26, height: 176 },
      { name: 'x', age: 30, height: 176 },
      { name: 'z', age: 26, height: 176 },
      { name: 'z', age: 26, height: 178 }
    ])
    expect(
      DIUtils.orderBy([
        { name: 'x', age: 26, height: 176 },
        { name: 'd', age: 27, height: 176 },
        { name: 'z', age: 26, height: 178 },
        { name: 'z', age: 26, height: 176 },
        { name: 'x', age: 30, height: 176 },
        { name: 'd', age: 27, height: 175 },
        { name: 'd', age: 21, height: 165 },
        { name: 'x', age: 22, height: 196 }
      ], [['name', 'asc'], ['age', 'desc']])
    ).toEqual([
      { name: 'd', age: 27, height: 176 },
      { name: 'd', age: 27, height: 175 },
      { name: 'd', age: 21, height: 165 },
      { name: 'x', age: 30, height: 176 },
      { name: 'x', age: 26, height: 176 },
      { name: 'x', age: 22, height: 196 },
      { name: 'z', age: 26, height: 178 },
      { name: 'z', age: 26, height: 176 }
    ])
    expect(
      DIUtils.orderBy([
        { name: 'x', age: 26, height: 176 },
        { name: 'd', age: 27, height: 176 },
        { name: 'z', age: 26, height: 178 },
        { name: 'z', age: 26, height: 176 },
        { name: 'x', age: 30, height: 176 },
        { name: 'd', age: 27, height: 175 },
        { name: 'd', age: 21, height: 165 },
        { name: 'x', age: 22, height: 196 }
      ], [{ field: 'name', order: 'asc' }, { field: 'age', order: 'desc' }, { field: 'height', order: 'asc' }])
    ).toEqual([
      { name: 'd', age: 27, height: 175 },
      { name: 'd', age: 27, height: 176 },
      { name: 'd', age: 21, height: 165 },
      { name: 'x', age: 30, height: 176 },
      { name: 'x', age: 26, height: 176 },
      { name: 'x', age: 22, height: 196 },
      { name: 'z', age: 26, height: 176 },
      { name: 'z', age: 26, height: 178 }
    ])
    expect(
      DIUtils.orderBy([
        { name: 'x', age: 26, height: 176 },
        { name: 'd', age: 27, height: 176 },
        { name: 'z', age: 26, height: 178 },
        { name: 'z', age: 26, height: 176 },
        { name: 'x', age: 30, height: 176 },
        { name: 'd', age: 27, height: 175 },
        { name: 'd', age: 21, height: 165 },
        { name: 'x', age: 22, height: 196 }
      ], [['name', 'asc'], ['age', 'desc'], ['height', 'desc']])
    ).toEqual([
      { name: 'd', age: 27, height: 176 },
      { name: 'd', age: 27, height: 175 },
      { name: 'd', age: 21, height: 165 },
      { name: 'x', age: 30, height: 176 },
      { name: 'x', age: 26, height: 176 },
      { name: 'x', age: 22, height: 196 },
      { name: 'z', age: 26, height: 178 },
      { name: 'z', age: 26, height: 176 }
    ])
  })

  test('shuffle()', () => {
    expect(
      DIUtils.shuffle()
    ).toEqual([])
    expect(
      DIUtils.shuffle(null)
    ).toEqual([])
    expect(
      DIUtils.shuffle(undefined)
    ).toEqual([])
    expect(
      DIUtils.shuffle('')
    ).toEqual([])
    expect(
      DIUtils.shuffle(/\d/)
    ).toEqual([])
    expect(
      DIUtils.shuffle(0)
    ).toEqual([])
    expect(
      DIUtils.shuffle(-1)
    ).toEqual([])
    expect(
      DIUtils.shuffle(333)
    ).toEqual([])
    expect(
      DIUtils.shuffle(function () { })
    ).toEqual([])
    expect(
      DIUtils.shuffle([])
    ).toEqual([])
    expect(
      DIUtils.shuffle('abc').length
    ).toEqual(3)
    expect(
      DIUtils.shuffle([11, '22', 33, '44']).length
    ).toEqual(4)
    expect(
      DIUtils.shuffle([11, 22, 33, 44, 55]).length
    ).toEqual(5)
    expect(
      DIUtils.shuffle([{ a: 11 }, { b: 22 }, { c: 33 }]).length
    ).toEqual(3)
  })

  test('sample()', () => {
    expect(
      DIUtils.sample()
    ).toEqual(undefined)
    expect(
      DIUtils.sample(null)
    ).toEqual(undefined)
    expect(
      DIUtils.sample(undefined)
    ).toEqual(undefined)
    expect(
      DIUtils.sample({})
    ).toEqual(undefined)
    expect(
      DIUtils.sample(-1)
    ).toEqual(undefined)
    expect(
      DIUtils.sample(0)
    ).toEqual(undefined)
    expect(
      DIUtils.sample(456)
    ).toEqual(undefined)
    expect(
      DIUtils.sample([])
    ).toEqual(undefined)
    expect(
      DIUtils.sample(0)
    ).toEqual(undefined)
    expect(
      DIUtils.sample(function () { })
    ).toEqual(undefined)
    expect(
      DIUtils.sample(null, 4)
    ).toEqual([])
    expect(
      DIUtils.sample(undefined, 2)
    ).toEqual([])
    expect(
      DIUtils.sample([], undefined)
    ).toEqual([])
    expect(
      DIUtils.sample([], null)
    ).toEqual([])
    expect(
      DIUtils.sample({}, 2)
    ).toEqual([])
    expect(
      DIUtils.sample(-1, 3)
    ).toEqual([])
    expect(
      DIUtils.sample([], 2)
    ).toEqual([])
    expect(
      ['a', 'b', 'c'].includes(DIUtils.sample('abc'))
    ).toEqual(true)
    expect(
      DIUtils.sample('abc', 2).length
    ).toEqual(2)
    expect(
      [11, 22, 33, 44, 55].includes(DIUtils.sample([11, 22, 33, 44, 55]))
    ).toEqual(true)
    expect(
      DIUtils.sample([11, 22, 33, 44, 55], 2).length
    ).toEqual(2)
    expect(
      DIUtils.sample([11, 22, 33, 44, 55], 3).length
    ).toEqual(3)
  })

  test('some()', () => {
    expect(
      DIUtils.some()
    ).toEqual(false)
    expect(
      DIUtils.some(null)
    ).toEqual(false)
    expect(
      DIUtils.some(undefined)
    ).toEqual(false)
    expect(
      DIUtils.some({})
    ).toEqual(false)
    expect(
      DIUtils.some(/\d/)
    ).toEqual(false)
    expect(
      DIUtils.some(0)
    ).toEqual(false)
    expect(
      DIUtils.some(-1)
    ).toEqual(false)
    expect(
      DIUtils.some(123)
    ).toEqual(false)
    expect(
      DIUtils.some([])
    ).toEqual(false)
    expect(
      DIUtils.some('abc')
    ).toEqual(false)
    expect(
      DIUtils.some([{ value: 11 }, { value: 22 }], item => item.value === 55)
    ).toEqual(false)
    expect(
      DIUtils.some({ a: 11, b: 22, c: 33 }, item => item === 44)
    ).toEqual(false)
    expect(
      DIUtils.some(['a', 1, {}, 'b'], item => DIUtils.isString(item))
    ).toEqual(true)
    expect(
      DIUtils.some({ a: 11, b: 22, c: 33 }, item => item === 22)
    ).toEqual(true)
    expect(
      DIUtils.some('abc', item => item === 'b')
    ).toEqual(true)
    expect(
      DIUtils.some([{ value: 11 }, { value: 22 }], item => item.value > 10)
    ).toEqual(true)
  })

  test('every()', () => {
    expect(
      DIUtils.every()
    ).toEqual(true)
    expect(
      DIUtils.every(null)
    ).toEqual(true)
    expect(
      DIUtils.every(undefined)
    ).toEqual(true)
    expect(
      DIUtils.every({})
    ).toEqual(true)
    expect(
      DIUtils.every(/\W/)
    ).toEqual(true)
    expect(
      DIUtils.every(0)
    ).toEqual(true)
    expect(
      DIUtils.every(-1)
    ).toEqual(true)
    expect(
      DIUtils.every(123)
    ).toEqual(true)
    expect(
      DIUtils.every([])
    ).toEqual(true)
    expect(
      DIUtils.every(function () { })
    ).toEqual(true)
    expect(
      DIUtils.every('')
    ).toEqual(true)
    expect(
      DIUtils.every('abc')
    ).toEqual(true)
    expect(
      DIUtils.every('abc', item => DIUtils.isString(item))
    ).toEqual(true)
    expect(
      DIUtils.every([{ value: 11 }, { value: 22 }], item => item.value >= 11)
    ).toEqual(true)
    expect(
      DIUtils.every(['a', 1, {}, 'b'], item => DIUtils.isString(item))
    ).toEqual(false)
    expect(
      DIUtils.every([{ value: 11 }, { value: 22 }], item => item.value === 11)
    ).toEqual(false)
  })

  test('filter()', () => {
    expect(
      DIUtils.filter()
    ).toEqual([])
    expect(
      DIUtils.filter(null)
    ).toEqual([])
    expect(
      DIUtils.filter(undefined)
    ).toEqual([])
    expect(
      DIUtils.filter({})
    ).toEqual([])
    expect(
      DIUtils.filter(0)
    ).toEqual([])
    expect(
      DIUtils.filter(-1)
    ).toEqual([])
    expect(
      DIUtils.filter(123)
    ).toEqual([])
    expect(
      DIUtils.filter([])
    ).toEqual([])
    expect(
      DIUtils.filter(/\s/)
    ).toEqual([])
    expect(
      DIUtils.filter('')
    ).toEqual([])
    expect(
      DIUtils.filter('abc')
    ).toEqual([])
    expect(
      DIUtils.filter(function () { })
    ).toEqual([])
    expect(
      DIUtils.filter({ a: 11, b: 22 }, item => item > 22)
    ).toEqual([])
    expect(
      DIUtils.filter('abc', item => ['b', 'c'].includes(item))
    ).toEqual(['b', 'c'])
    expect(
      DIUtils.filter({ a: 11, b: 22 }, item => item > 11)
    ).toEqual([22])
    expect(
      DIUtils.filter([{ value: 11 }, { value: 22 }], item => item.value > 33)
    ).toEqual([])
    expect(
      DIUtils.filter([{ value: 11 }, { value: 22 }], item => item.value > 11)
    ).toEqual([{ value: 22 }])
  })

  test('find()', () => {
    expect(
      DIUtils.find()
    ).toEqual(undefined)
    expect(
      DIUtils.find(null)
    ).toEqual(undefined)
    expect(
      DIUtils.find(undefined)
    ).toEqual(undefined)
    expect(
      DIUtils.find(0)
    ).toEqual(undefined)
    expect(
      DIUtils.find(-1)
    ).toEqual(undefined)
    expect(
      DIUtils.find(123)
    ).toEqual(undefined)
    expect(
      DIUtils.find('')
    ).toEqual(undefined)
    expect(
      DIUtils.find('abc')
    ).toEqual(undefined)
    expect(
      DIUtils.find({})
    ).toEqual(undefined)
    expect(
      DIUtils.find([])
    ).toEqual(undefined)
    expect(
      DIUtils.find(function () { })
    ).toEqual(undefined)
    expect(
      DIUtils.find({ a: 11, b: 22, c: 33, d: 11 }, item => item > 15)
    ).toEqual(22)
    expect(
      DIUtils.find([{ value: 11 }, { value: 22 }], item => item.value === 66)
    ).toEqual(undefined)
    expect(
      DIUtils.find([{ value: 11 }, { value: 22 }], item => item.value === 22)
    ).toEqual({ value: 22 })
  })

  test('findLast()', () => {
    expect(
      DIUtils.findLast()
    ).toEqual(undefined)
    expect(
      DIUtils.findLast(null)
    ).toEqual(undefined)
    expect(
      DIUtils.findLast(undefined)
    ).toEqual(undefined)
    expect(
      DIUtils.findLast(0)
    ).toEqual(undefined)
    expect(
      DIUtils.findLast(-1)
    ).toEqual(undefined)
    expect(
      DIUtils.findLast(123)
    ).toEqual(undefined)
    expect(
      DIUtils.findLast('')
    ).toEqual(undefined)
    expect(
      DIUtils.find('abc')
    ).toEqual(undefined)
    expect(
      DIUtils.findLast({})
    ).toEqual(undefined)
    expect(
      DIUtils.findLast([])
    ).toEqual(undefined)
    expect(
      DIUtils.findLast(function () { })
    ).toEqual(undefined)
    expect(
      DIUtils.findLast({ a: 11, b: 22, c: 33, d: 12 }, item => item > 15)
    ).toEqual(33)
    expect(
      DIUtils.findLast({ a: 11, b: 22, c: 33, d: 12 }, item => item > 15)
    ).toEqual(33)
    expect(
      DIUtils.findLast({ a: 11, b: 22, c: 33, d: 12 }, item => item > 99)
    ).toEqual(undefined)
    expect(
      DIUtils.findLast([{ value: 11 }, { value: 22 }], item => item.value === 66)
    ).toEqual(undefined)
    expect(
      DIUtils.findLast([{ a: 11, value: 22 }, { a: 22, value: 11 }, { a: 33, value: 22 }], item => item.value === 22)
    ).toEqual({ a: 33, value: 22 })
  })

  test('findKey()', () => {
    expect(
      DIUtils.findKey()
    ).toEqual(undefined)
    expect(
      DIUtils.findKey([])
    ).toEqual(undefined)
    expect(
      DIUtils.findKey()
    ).toEqual(undefined)
    expect(
      DIUtils.findKey(null)
    ).toEqual(undefined)
    expect(
      DIUtils.findKey(undefined)
    ).toEqual(undefined)
    expect(
      DIUtils.findKey(0)
    ).toEqual(undefined)
    expect(
      DIUtils.findKey(-1)
    ).toEqual(undefined)
    expect(
      DIUtils.findKey(123)
    ).toEqual(undefined)
    expect(
      DIUtils.findKey(/\D/)
    ).toEqual(undefined)
    expect(
      DIUtils.findKey(function () { })
    ).toEqual(undefined)
    expect(
      DIUtils.findKey('')
    ).toEqual(undefined)
    expect(
      DIUtils.findKey('abc')
    ).toEqual(undefined)
    expect(
      DIUtils.findKey('abc', item => item === 'b')
    ).toEqual('1')
    expect(
      DIUtils.findKey([{ value: 11 }, { value: 22 }])
    ).toEqual(undefined)
    expect(
      DIUtils.findKey([{ value: 11 }, { value: 22 }], item => item.value === 22)
    ).toEqual('1')
    expect(
      DIUtils.findKey({ aa: 11, bb: 22, cc: 33 }, item => item === 22)
    ).toEqual('bb')
  })

  test('map()', () => {
    expect(
      DIUtils.map()
    ).toEqual([])
    expect(
      DIUtils.map(null)
    ).toEqual([])
    expect(
      DIUtils.map(undefined)
    ).toEqual([])
    expect(
      DIUtils.map(-1)
    ).toEqual([])
    expect(
      DIUtils.map(0)
    ).toEqual([])
    expect(
      DIUtils.map(123)
    ).toEqual([])
    expect(
      DIUtils.map(/\d/)
    ).toEqual([])
    expect(
      DIUtils.map('abc')
    ).toEqual([])
    expect(
      DIUtils.map([])
    ).toEqual([])
    expect(
      DIUtils.map({})
    ).toEqual([])
    expect(
      DIUtils.map(function () { })
    ).toEqual([])
    expect(
      DIUtils.map([], item => item.value)
    ).toEqual([])
    expect(
      DIUtils.map('abc', item => item)
    ).toEqual(['a', 'b', 'c'])
    expect(
      DIUtils.map({ a: 11, b: 22, c: 33 }, item => item)
    ).toEqual([11, 22, 33])
    expect(
      DIUtils.map([11, 22, 33], item => item * 2)
    ).toEqual([22, 44, 66])
    expect(
      DIUtils.map([{ value: 11 }, { value: 22 }], item => item.value)
    ).toEqual([11, 22])
  })

  test('sum()', () => {
    expect(
      DIUtils.sum()
    ).toEqual(0)
    expect(
      DIUtils.sum(undefined)
    ).toEqual(0)
    expect(
      DIUtils.sum(0)
    ).toEqual(0)
    expect(
      DIUtils.sum(-1)
    ).toEqual(0)
    expect(
      DIUtils.sum(10)
    ).toEqual(0)
    expect(
      DIUtils.sum(null)
    ).toEqual(0)
    expect(
      DIUtils.sum('')
    ).toEqual(0)
    expect(
      DIUtils.sum(/\w/)
    ).toEqual(0)
    expect(
      DIUtils.sum({})
    ).toEqual(0)
    expect(
      DIUtils.sum([])
    ).toEqual(0)
    expect(
      DIUtils.sum(function () { })
    ).toEqual(0)
    expect(
      DIUtils.sum([22, 66, 88])
    ).toEqual(176)
    expect(
      DIUtils.sum([{ value: 11 }, { value: 22 }, { value: 66 }], 'value')
    ).toEqual(99)
    expect(
      DIUtils.sum({ val1: 21, val2: 34, val3: 47 })
    ).toEqual(102)
  })

  test('mean()', () => {
    expect(
      DIUtils.mean()
    ).toEqual(0)
    expect(
      DIUtils.mean(undefined)
    ).toEqual(0)
    expect(
      DIUtils.mean(0)
    ).toEqual(0)
    expect(
      DIUtils.mean(-1)
    ).toEqual(0)
    expect(
      DIUtils.mean(10)
    ).toEqual(0)
    expect(
      DIUtils.mean(null)
    ).toEqual(0)
    expect(
      DIUtils.mean('')
    ).toEqual(0)
    expect(
      DIUtils.mean(/\w/)
    ).toEqual(0)
    expect(
      DIUtils.mean([])
    ).toEqual(0)
    expect(
      DIUtils.mean({})
    ).toEqual(0)
    expect(
      DIUtils.mean(function () { })
    ).toEqual(0)
    expect(
      DIUtils.mean({ val1: 21, val2: 34, val3: 47 })
    ).toEqual(34)
    expect(
      DIUtils.mean([22, 66, 60, 60])
    ).toEqual(52)
    expect(
      DIUtils.mean([{ value: 34 }, { value: 22 }], 'value')
    ).toEqual(28)
    expect(
      DIUtils.mean([{ value: 11 }, { value: 22 }, { value: 66 }], item => item.value * 2)
    ).toEqual(66)
    expect(
      DIUtils.mean({ val1: 21, val2: 34, val3: 45, val4: 55 })
    ).toEqual(38.75)
  })

  test('reduce()', () => {
    expect(
      DIUtils.reduce()
    ).toEqual(undefined)
    expect(
      DIUtils.reduce(null)
    ).toEqual(undefined)
    expect(
      DIUtils.reduce(undefined)
    ).toEqual(undefined)
    expect(
      DIUtils.reduce(0)
    ).toEqual(undefined)
    expect(
      DIUtils.reduce(-1)
    ).toEqual(undefined)
    expect(
      DIUtils.reduce(333)
    ).toEqual(undefined)
    expect(
      DIUtils.reduce('')
    ).toEqual(undefined)
    expect(
      DIUtils.reduce(function () { })
    ).toEqual(undefined)
    expect(
      DIUtils.reduce(null, (previous, item) => previous + item)
    ).toEqual(undefined)
    expect(
      DIUtils.reduce({}, (previous, item) => previous + item)
    ).toEqual(DIUtils.reduce({}, (previous, item) => previous + item))
    expect(
      DIUtils.reduce([], (previous, item) => previous + item)
    ).toEqual(DIUtils.reduce({}, (previous, item) => previous + item))
    expect(
      DIUtils.reduce([22, 66, 88], (previous, item) => previous + item)
    ).toEqual(176)
    expect(
      DIUtils.reduce([22, 66, 88], (previous, item) => previous + item, 0)
    ).toEqual(176)
    expect(
      DIUtils.reduce([{ num: 11 }, { num: 22 }, { num: 33 }], (previous, item) => previous + item.num, 0)
    ).toEqual(66)
  })

  test('copyWithin()', () => {
    expect(
      DIUtils.copyWithin([11, 22, 33, 44], 0, 2)
    ).toEqual([33, 44, 33, 44])
    expect(
      DIUtils.copyWithin([11, 22, 33, 44], 0, -1)
    ).toEqual([44, 22, 33, 44])
  })

  test('chunk()', () => {
    expect(
      DIUtils.chunk()
    ).toEqual([])
    expect(
      DIUtils.chunk(0)
    ).toEqual([])
    expect(
      DIUtils.chunk(-1)
    ).toEqual([])
    expect(
      DIUtils.chunk('')
    ).toEqual([])
    expect(
      DIUtils.chunk(123)
    ).toEqual([])
    expect(
      DIUtils.chunk('123')
    ).toEqual([])
    expect(
      DIUtils.chunk(/\d/)
    ).toEqual([])
    expect(
      DIUtils.chunk(null)
    ).toEqual([])
    expect(
      DIUtils.chunk(undefined)
    ).toEqual([])
    expect(
      DIUtils.chunk({})
    ).toEqual([])
    expect(
      DIUtils.chunk([])
    ).toEqual([])
    expect(
      DIUtils.chunk(function () { })
    ).toEqual([])
    expect(
      DIUtils.chunk(['a', 'b', 'c', 'd'])
    ).toEqual([['a'], ['b'], ['c'], ['d']])
    expect(
      DIUtils.chunk(['a', 'b', 'c', 'd'], 2)
    ).toEqual([['a', 'b'], ['c', 'd']])
    expect(
      DIUtils.chunk(['a', 'b', 'c', 'd'], 3)
    ).toEqual([['a', 'b', 'c'], ['d']])
  })

  test('zip()', () => {
    expect(
      DIUtils.zip()
    ).toEqual([])
    expect(
      DIUtils.zip(null)
    ).toEqual([])
    expect(
      DIUtils.zip(undefined)
    ).toEqual([])
    expect(
      DIUtils.zip(-1)
    ).toEqual([])
    expect(
      DIUtils.zip(0)
    ).toEqual([])
    expect(
      DIUtils.zip(123)
    ).toEqual([])
    expect(
      DIUtils.zip('')
    ).toEqual([])
    expect(
      DIUtils.zip(/\w/)
    ).toEqual([])
    expect(
      DIUtils.zip({})
    ).toEqual([])
    expect(
      DIUtils.zip([])
    ).toEqual([])
    expect(
      DIUtils.zip(function () { })
    ).toEqual([])
    expect(
      DIUtils.zip(['name1', 'name2', 'name3'], [true, true, false], [30, 40, 20])
    ).toEqual([['name1', true, 30], ['name2', true, 40], ['name3', false, 20]])
  })

  test('unzip()', () => {
    expect(
      DIUtils.unzip()
    ).toEqual([])
    expect(
      DIUtils.unzip(null)
    ).toEqual([])
    expect(
      DIUtils.unzip(undefined)
    ).toEqual([])
    expect(
      DIUtils.unzip(-1)
    ).toEqual([])
    expect(
      DIUtils.unzip(0)
    ).toEqual([])
    expect(
      DIUtils.unzip(123)
    ).toEqual([])
    expect(
      DIUtils.unzip('')
    ).toEqual([])
    expect(
      DIUtils.unzip(/\d/)
    ).toEqual([])
    expect(
      DIUtils.unzip({})
    ).toEqual([])
    expect(
      DIUtils.unzip([])
    ).toEqual([])
    expect(
      DIUtils.unzip(function () { })
    ).toEqual([])
    expect(
      DIUtils.unzip([['name1', true, 30], ['name2', true, 40], ['name3', false, 20]])
    ).toEqual([['name1', 'name2', 'name3'], [true, true, false], [30, 40, 20]])
  })

  test('zipObject()', () => {
    expect(
      DIUtils.zipObject()
    ).toEqual({})
    expect(
      DIUtils.zipObject(null)
    ).toEqual({})
    expect(
      DIUtils.zipObject(undefined)
    ).toEqual({})
    expect(
      DIUtils.zipObject(0)
    ).toEqual({})
    expect(
      DIUtils.zipObject(-1)
    ).toEqual({})
    expect(
      DIUtils.zipObject(123)
    ).toEqual({})
    expect(
      DIUtils.zipObject(/\d/)
    ).toEqual({})
    expect(
      DIUtils.zipObject(null)
    ).toEqual({})
    expect(
      DIUtils.zipObject(undefined)
    ).toEqual({})
    expect(
      DIUtils.zipObject(false)
    ).toEqual({})
    expect(
      DIUtils.zipObject({})
    ).toEqual({})
    expect(
      DIUtils.zipObject([])
    ).toEqual({})
    expect(
      DIUtils.zipObject(function () { })
    ).toEqual({})
    expect(
      DIUtils.zipObject({ a: 'aa', b: 'bb' }, [11, 22, 33])
    ).toEqual({ aa: 11, bb: 22 })
    expect(
      DIUtils.zipObject({ 0: 'aa', 1: 'bb', 2: 'cc' }, [11, 22])
    ).toEqual({ aa: 11, bb: 22, cc: undefined })
    expect(
      DIUtils.zipObject(['aa', 'bb', 'cc'], [11, 22, 33])
    ).toEqual({ aa: 11, bb: 22, cc: 33 })
    expect(
      DIUtils.zipObject(['aa', 'bb', 'cc'], [11, 22])
    ).toEqual({ aa: 11, bb: 22, cc: undefined })
  })

  test('flatten()', () => {
    expect(
      DIUtils.flatten()
    ).toEqual([])
    expect(
      DIUtils.flatten(null)
    ).toEqual([])
    expect(
      DIUtils.flatten(undefined)
    ).toEqual([])
    expect(
      DIUtils.flatten(0)
    ).toEqual([])
    expect(
      DIUtils.flatten('')
    ).toEqual([])
    expect(
      DIUtils.flatten([])
    ).toEqual([])
    expect(
      DIUtils.flatten({})
    ).toEqual([])
    expect(
      DIUtils.flatten(/\d/)
    ).toEqual([])
    expect(
      DIUtils.flatten(function () { })
    ).toEqual([])
    expect(
      DIUtils.flatten([[1, 2, 3], [4, 5, 6], [7, 8]])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
    expect(
      DIUtils.flatten([1, [2, [3, [4]], 5]])
    ).toEqual([1, 2, [3, [4]], 5])
    expect(
      DIUtils.flatten([1, [2, [3, [4]], 5]], true)
    ).toEqual([1, 2, 3, 4, 5])
    expect(
      DIUtils.flatten([1, [2, [3, [4]], [[[5], [6, [7]]]]]], true)
    ).toEqual([1, 2, 3, 4, 5, 6, 7])
  })

  test('toArray()', () => {
    expect(
      DIUtils.toArray()
    ).toEqual([])
    expect(
      DIUtils.toArray(null)
    ).toEqual([])
    expect(
      DIUtils.toArray(undefined)
    ).toEqual([])
    expect(
      DIUtils.toArray(0)
    ).toEqual([])
    expect(
      DIUtils.toArray('')
    ).toEqual([])
    expect(
      DIUtils.toArray(true)
    ).toEqual([])
    expect(
      DIUtils.toArray(/1,2,3/)
    ).toEqual([])
    expect(
      DIUtils.toArray([])
    ).toEqual([])
    expect(
      DIUtils.toArray({})
    ).toEqual([])
    expect(
      DIUtils.toArray(10)
    ).toEqual([])
    expect(
      DIUtils.toArray(function () { })
    ).toEqual([])
    expect(
      DIUtils.toArray({ name: 'test1', age: 25 })
    ).toEqual(['test1', 25])
  })

  test('includeArrays()', () => {
    expect(
      DIUtils.includeArrays()
    ).toEqual(false)
    expect(
      DIUtils.includeArrays(null)
    ).toEqual(false)
    expect(
      DIUtils.includeArrays(null, null)
    ).toEqual(false)
    expect(
      DIUtils.includeArrays(null, undefined)
    ).toEqual(false)
    expect(
      DIUtils.includeArrays(undefined, null)
    ).toEqual(false)
    expect(
      DIUtils.includeArrays(undefined, undefined)
    ).toEqual(false)
    expect(
      DIUtils.includeArrays(undefined, -1)
    ).toEqual(false)
    expect(
      DIUtils.includeArrays(-1, undefined)
    ).toEqual(false)
    expect(
      DIUtils.includeArrays(null, [])
    ).toEqual(false)
    expect(
      DIUtils.includeArrays(0, undefined)
    ).toEqual(false)
    expect(
      DIUtils.includeArrays(undefined, null)
    ).toEqual(false)
    expect(
      DIUtils.includeArrays(0, -1)
    ).toEqual(false)
    expect(
      DIUtils.includeArrays({}, [])
    ).toEqual(false)
    expect(
      DIUtils.includeArrays([], 0)
    ).toEqual(false)
    expect(
      DIUtils.includeArrays([], null)
    ).toEqual(false)
    expect(
      DIUtils.includeArrays([], {})
    ).toEqual(false)
    expect(
      DIUtils.includeArrays([11, 22, 33], { 0: 11, 1: 22 })
    ).toEqual(false)
    expect(
      DIUtils.includeArrays([11, 22, 33], [11, 22, 33, 44])
    ).toEqual(false)
    expect(
      DIUtils.includeArrays([], [])
    ).toEqual(true)
    expect(
      DIUtils.includeArrays([11, 22, 33], [])
    ).toEqual(true)
    expect(
      DIUtils.includeArrays([11, 22, 33], [11])
    ).toEqual(true)
    expect(
      DIUtils.includeArrays([11, 22, 33], [22, 33])
    ).toEqual(true)
    expect(
      DIUtils.includeArrays([11, 22, 33], [22, 44])
    ).toEqual(false)
  })

  test('pluck()', () => {
    expect(
      DIUtils.pluck()
    ).toEqual([])
    expect(
      DIUtils.pluck(null)
    ).toEqual([])
    expect(
      DIUtils.pluck(undefined)
    ).toEqual([])
    expect(
      DIUtils.pluck(-1)
    ).toEqual([])
    expect(
      DIUtils.pluck(0)
    ).toEqual([])
    expect(
      DIUtils.pluck(123)
    ).toEqual([])
    expect(
      DIUtils.pluck(/\d/)
    ).toEqual([])
    expect(
      DIUtils.pluck([])
    ).toEqual([])
    expect(
      DIUtils.pluck({})
    ).toEqual([])
    expect(
      DIUtils.pluck(function () { })
    ).toEqual([])
    expect(
      DIUtils.pluck([{ a: 11, b: 22 }, { a: 33, b: 44 }], 'a')
    ).toEqual([11, 33])
    expect(
      DIUtils.pluck([[11, 22, 33], [44, 55, 66]], 1)
    ).toEqual([22, 55])
  })

  test('invoke()', () => {
    expect(
      DIUtils.invoke()
    ).toEqual([])
    expect(
      DIUtils.invoke(null)
    ).toEqual([])
    expect(
      DIUtils.invoke(undefined)
    ).toEqual([])
    expect(
      DIUtils.invoke(-1)
    ).toEqual([])
    expect(
      DIUtils.invoke(0)
    ).toEqual([])
    expect(
      DIUtils.invoke([])
    ).toEqual([])
    expect(
      DIUtils.invoke({})
    ).toEqual([])
    expect(
      DIUtils.invoke([
        [3, 1, 6, 7],
        [3, 2, 1, 8],
        [3, 2, 5, 9, 6],
        [3, 3, 1, 2]
      ], 'sort')
    ).toEqual([
      [1, 3, 6, 7],
      [1, 2, 3, 8],
      [2, 3, 5, 6, 9],
      [1, 2, 3, 3]
    ])
    expect(
      DIUtils.invoke(['123', '456'], 'split')
    ).toEqual([['123'], ['456']])
    expect(
      DIUtils.invoke([123, 456], String.prototype.split, '')
    ).toEqual([['1', '2', '3'], ['4', '5', '6']])
    expect(
      DIUtils.invoke([{ a: { b: [2, 0, 1] } }, { a: { b: [2, 1] } }, { a: { b: [4, 8, 1] } }], ['a', 'b', 'sort'])
    ).toEqual([[0, 1, 2], [1, 2], [1, 4, 8]])
  })

  test('toArrayTree()', () => {
    expect(
      DIUtils.toArrayTree()
    ).toEqual([])
    expect(
      DIUtils.toArrayTree(null)
    ).toEqual([])
    expect(
      DIUtils.toArrayTree(0)
    ).toEqual([])
    expect(
      DIUtils.toArrayTree(-1)
    ).toEqual([])
    expect(
      DIUtils.toArrayTree(123)
    ).toEqual([])
    expect(
      DIUtils.toArrayTree([])
    ).toEqual([])
    expect(
      DIUtils.toArrayTree({})
    ).toEqual([])
    expect(
      DIUtils.toArrayTree(function () { })
    ).toEqual([])
    let list1 = [
      { id: 1, name: '111' },
      { id: 2, parentId: 1, name: '222' },
      { id: 3, name: '333' },
      { id: 4, parentId: 2, name: '444' }
    ]
    expect(
      DIUtils.toArrayTree(list1)
    ).toEqual([
      {
        id: 1,
        name: '111',
        children: [
          {
            id: 2,
            parentId: 1,
            name: '222',
            children: [
              {
                id: 4,
                parentId: 2,
                name: '444',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '333',
        children: []
      }
    ])
    let list2 = [
      { id: 1, name: '111', seq: 5 },
      { id: 2, parentId: 1, name: '222', seq: 3 },
      { id: 3, name: '333', seq: 6 },
      { id: 4, parentId: 2, name: '444', seq: 2 },
      { id: 5, parentId: 1, name: '555', seq: 1 }
    ]
    expect(
      DIUtils.toArrayTree(list2, { sortKey: 'seq' })
    ).toEqual([
      {
        id: 1,
        name: '111',
        seq: 5,
        children: [
          {
            id: 5,
            parentId: 1,
            name: '555',
            seq: 1,
            children: []
          },
          {
            id: 2,
            parentId: 1,
            name: '222',
            seq: 3,
            children: [
              {
                id: 4,
                parentId: 2,
                name: '444',
                seq: 2,
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '333',
        seq: 6,
        children: []
      }
    ])
    let list3 = [
      { id: 1, name: '111' },
      { id: 2, parentId: 1, name: '222' },
      { id: 3, name: '333' },
      { id: 4, parentId: 2, name: '444' },
      { id: 5, parentId: 22, name: '555' }
    ]
    expect(
      DIUtils.toArrayTree(list3, { data: 'data' })
    ).toEqual([
      {
        data: { id: 1, name: '111' },
        id: 1,
        children: [
          {
            data: { id: 2, parentId: 1, name: '222' },
            id: 2,
            parentId: 1,
            children: [
              {
                data: { id: 4, parentId: 2, name: '444' },
                id: 4,
                parentId: 2,
                children: []
              }
            ]
          }
        ]
      },
      {
        data: { id: 3, name: '333' },
        id: 3,
        children: []
      },
      {
        data: { id: 5, parentId: 22, name: '555' },
        id: 5,
        parentId: 22,
        children: []
      }
    ])
    let list4 = [
      { id: 1, name: '111' },
      { id: 2, parentId: 1, name: '222' },
      { id: 3, name: '333' },
      { id: 4, parentId: 2, name: '444' },
      { id: 5, parentId: 22, name: '555' }
    ]
    expect(
      DIUtils.toArrayTree(list4, { strict: true, parentKey: 'parentId', key: 'id', children: 'children', data: 'data' })
    ).toEqual([
      {
        data: { id: 1, name: '111' },
        id: 1,
        children: [
          {
            data: { id: 2, parentId: 1, name: '222' },
            id: 2,
            parentId: 1,
            children: [
              {
                data: { id: 4, parentId: 2, name: '444' },
                id: 4,
                parentId: 2,
                children: []
              }
            ]
          }
        ]
      },
      {
        data: { id: 3, name: '333' },
        id: 3,
        children: []
      }
    ])
  })

  test('toTreeArray()', () => {
    expect(
      DIUtils.toTreeArray()
    ).toEqual([])
    expect(
      DIUtils.toTreeArray(null)
    ).toEqual([])
    expect(
      DIUtils.toTreeArray(0)
    ).toEqual([])
    expect(
      DIUtils.toTreeArray(-1)
    ).toEqual([])
    expect(
      DIUtils.toTreeArray(123)
    ).toEqual([])
    expect(
      DIUtils.toTreeArray([])
    ).toEqual([])
    expect(
      DIUtils.toTreeArray({})
    ).toEqual([])
    expect(
      DIUtils.toTreeArray(function () { })
    ).toEqual([])
    let list1 = [
      {
        id: 1,
        name: '111',
        children: [
          {
            id: 2,
            parentId: 1,
            name: '222',
            children: [
              {
                id: 4,
                parentId: 2,
                name: '444',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '333',
        children: []
      }
    ]
    expect(
      DIUtils.toTreeArray(list1)
    ).toEqual([
      list1[0],
      list1[0].children[0],
      list1[0].children[0].children[0],
      list1[1]
    ])
    let list2 = [
      {
        data: { id: 1, name: '111' },
        id: 1,
        children: [
          {
            data: { id: 2, parentId: 1, name: '222' },
            id: 2,
            parentId: 1,
            children: [
              {
                data: { id: 4, parentId: 2, name: '444' },
                id: 4,
                parentId: 2,
                children: []
              }
            ]
          }
        ]
      },
      {
        data: { id: 3, name: '333' },
        id: 3,
        children: []
      },
      {
        data: { id: 5, parentId: 22, name: '555' },
        id: 5,
        parentId: 22,
        children: []
      }
    ]
    expect(
      DIUtils.toTreeArray(list2, { data: 'data' })
    ).toEqual([
      { id: 1, name: '111' },
      { id: 2, parentId: 1, name: '222' },
      { id: 4, parentId: 2, name: '444' },
      { id: 3, name: '333' },
      { id: 5, parentId: 22, name: '555' }
    ])
    let list3 = [
      {
        id: 1,
        name: '111',
        children: [
          {
            id: 2,
            parentId: 1,
            name: '222',
            children: [
              {
                id: 4,
                parentId: 2,
                name: '444',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '333',
        children: []
      }
    ]
    expect(
      DIUtils.toTreeArray(list3, { clear: true })
    ).toEqual([
      {
        id: 1,
        name: '111'
      },
      {
        id: 2,
        parentId: 1,
        name: '222'
      },
      {
        id: 4,
        parentId: 2,
        name: '444'
      },
      {
        id: 3,
        name: '333'
      }
    ])
  })

  test('findTree()', () => {
    let rest
    expect(
      DIUtils.findTree(0, item => item)
    ).toEqual(undefined)
    expect(
      DIUtils.findTree(null, item => item)
    ).toEqual(undefined)
    expect(
      DIUtils.findTree(undefined, item => item)
    ).toEqual(undefined)
    expect(
      DIUtils.findTree([], item => item)
    ).toEqual(undefined)
    rest = DIUtils.findTree([{ a: 11 }], item => item.a === 11)
    expect(rest.item).toEqual({ a: 11 })
    rest = DIUtils.findTree([{ a: 11 }, { a: 22 }, { a: 33, children: [{ a: 44 }] }], item => item.a === 44)
    expect(rest.item).toEqual({ a: 44 })
    rest = DIUtils.findTree([{ a: 11 }, { a: 22 }, { a: 33, childs: [{ a: 44 }] }], item => item.a === 44, { children: 'childs' })
    expect(rest.item).toEqual({ a: 44 })
  })

  test('eachTree()', () => {
    let rest = []
    DIUtils.eachTree(null, item => {
      rest.push(item)
    })
    expect(rest).toEqual([])
    rest = []
    DIUtils.eachTree([{ a: 11 }, { a: 22 }], item => {
      rest.push(item)
    })
    expect(rest).toEqual([{ a: 11 }, { a: 22 }])
    rest = []
    DIUtils.eachTree([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }], item => {
      rest.push(item)
    })
    expect(rest).toEqual([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
    rest = []
    DIUtils.eachTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], item => {
      rest.push(item)
    }, { children: 'childs' })
    expect(rest).toEqual([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
  })

  test('mapTree()', () => {
    expect(
      DIUtils.mapTree(null, item => {
        return item.a * 2
      })
    ).toEqual([])
    expect(
      DIUtils.mapTree([{ a: 11 }, { a: 22 }], item => {
        return item.a * 2
      })
    ).toEqual([22, 44])
    expect(
      DIUtils.mapTree([{ a: 11 }, { a: 22 }], item => {
        return { a: item.a * 2 }
      })
    ).toEqual([{ a: 22 }, { a: 44 }])
    expect(
      DIUtils.mapTree([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }], item => {
        return { a: item.a * 2 }
      })
    ).toEqual([{ a: 22 }, { a: 44, children: [{ a: 444 }, { a: 446 }] }])
    expect(
      DIUtils.mapTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], item => {
        return { a: item.a * 2 }
      }, { children: 'childs' })
    ).toEqual([{ a: 22 }, { a: 44, childs: [{ a: 444 }, { a: 446 }] }])
    expect(
      DIUtils.mapTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], item => {
        return { a: item.a * 2 }
      }, { children: 'childs', mapChildren: 'childs2' })
    ).toEqual([{ a: 22 }, { a: 44, childs2: [{ a: 444 }, { a: 446 }] }])
  })

  test('filterTree()', () => {
    expect(
      DIUtils.filterTree(null, item => {
        return item.a === 33
      })
    ).toEqual([])
    expect(
      DIUtils.filterTree([{ a: 11 }, { a: 22 }], item => {
        return item.a === 33
      })
    ).toEqual([])
    expect(
      DIUtils.filterTree([{ a: 11 }, { a: 22 }], item => {
        return item.a === 11
      })
    ).toEqual([{ a: 11 }])
    expect(
      DIUtils.filterTree([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }], item => {
        return item.a >= 22
      })
    ).toEqual([{ a: 22, children: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
    expect(
      DIUtils.filterTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], item => {
        return item.a >= 22
      }, { children: 'childs' })
    ).toEqual([{ a: 22, childs: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
  })

  test('searchTree()', () => {
    expect(
      DIUtils.searchTree(null, item => item.a === 33)
    ).toEqual([])
    expect(
      DIUtils.searchTree([{ a: 11 }, { a: 22 }], item => item.a === 33)
    ).toEqual([])
    expect(
      DIUtils.searchTree([{ a: 11 }, { a: 22 }], item => item.a === 11)
    ).toEqual([{ a: 11, children: [] }])
    expect(
      DIUtils.searchTree([{ id: 1 }, { id: 2, children: [{ id: 0 }] }, { id: 3, children: [{ id: 30 }] }], item => item.id > 1)
    ).toEqual([{ id: 2, children: [{ id: 0, children: [] }] }, { id: 3, children: [{ id: 30, children: [] }] }])
    expect(
      DIUtils.searchTree([{ id: 1 }, { id: 2, childs: [{ id: 0 }] }, { id: 3, childs: [{ id: 30 }] }], item => item.id >= 2, { children: 'childs' })
    ).toEqual([{ id: 2, childs: [{ id: 0, childs: [] }] }, { id: 3, childs: [{ id: 30, childs: [] }] }])
    expect(
      DIUtils.searchTree([
        { id: 1 },
        { id: 2, childs: [{ id: 0 }] },
        { id: 3, childs: [{ id: 30 }] }
      ], item => item.id >= 2, { children: 'childs', data: '_item' })
    ).toEqual([
      { id: 2, childs: [{ id: 0, childs: [], _item: { id: 0 } }], _item: { id: 2, childs: [{ id: 0 }] } },
      { id: 3, childs: [{ id: 30, childs: [], _item: { id: 30 } }], _item: { id: 3, childs: [{ id: 30 }] } }
    ])
  })
})

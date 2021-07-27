const DIUtils = require('../func')

describe('Number functions', () => {
  test('random()', () => {
    let rest = DIUtils.random()
    expect(
      rest >= 0 && rest <= 9
    ).toEqual(true)
    rest = DIUtils.random(3, 6)
    expect(
      rest >= 3 && rest <= 6
    ).toEqual(true)
    rest = DIUtils.random(0, 5)
    expect(
      rest >= 0 && rest <= 5
    ).toEqual(true)
    rest = DIUtils.random(10, 100)
    expect(
      rest >= 10 && rest <= 100
    ).toEqual(true)
    rest = DIUtils.random(500, 50000)
    expect(
      rest >= 500 && rest <= 50000
    ).toEqual(true)
    rest = DIUtils.random(-5, 5)
    expect(
      rest >= -5 && rest <= 5
    ).toEqual(true)
  })

  test('min()', () => {
    expect(
      DIUtils.min([22, null, 77, 11])
    ).toEqual(11)
    expect(
      DIUtils.min([0, 1, null, -1, undefined])
    ).toEqual(-1)
    expect(
      DIUtils.min([22, 66, 77, 11])
    ).toEqual(11)
    expect(
      DIUtils.min([{ a: 11 }, { a: 44 }], 'a')
    ).toEqual({ a: 11 })
    expect(
      DIUtils.min([{ a: 33 }, { a: 11 }, { a: 44 }], item => item.a)
    ).toEqual({ a: 11 })
  })

  test('max()', () => {
    expect(
      DIUtils.max([22, 66, null, 11])
    ).toEqual(66)
    expect(
      DIUtils.max([0, 1, null, -1, undefined])
    ).toEqual(1)
    expect(
      DIUtils.max([22, 66, 77, 11])
    ).toEqual(77)
    expect(
      DIUtils.max([{ a: 11 }, { a: 44 }], 'a')
    ).toEqual({ a: 44 })
    expect(
      DIUtils.max([{ a: 33 }, { a: 11 }, { a: 44 }], item => item.a)
    ).toEqual({ a: 44 })
  })

  test('commafy()', () => {
    expect(
      DIUtils.commafy(0)
    ).toEqual('0')
    expect(
      DIUtils.commafy(-1)
    ).toEqual('-1')
    expect(
      DIUtils.commafy(12345)
    ).toEqual('12,345')
    expect(
      DIUtils.commafy('null')
    ).toEqual('n,ull')
    expect(
      DIUtils.commafy(null)
    ).toEqual('')
    expect(
      DIUtils.commafy('undefined')
    ).toEqual('und,efi,ned')
    expect(
      DIUtils.commafy(undefined)
    ).toEqual('')
    expect(
      DIUtils.commafy('cdabcdabcdabcdabcd', { spaceNumber: 4 })
    ).toEqual('cd,abcd,abcd,abcd,abcd')
    expect(
      DIUtils.commafy(1e3)
    ).toEqual('1,000')
    expect(
      DIUtils.commafy(1e11)
    ).toEqual('100,000,000,000')
    expect(
      DIUtils.commafy(-1e3)
    ).toEqual('-1,000')
    expect(
      DIUtils.commafy(-1e11)
    ).toEqual('-100,000,000,000')
    expect(
      DIUtils.commafy(-0.0001)
    ).toEqual('0')
    expect(
      DIUtils.commafy(-0.0001, { digits: 2 })
    ).toEqual('0.00')
    expect(
      DIUtils.commafy(-0.0001, { digits: 4 })
    ).toEqual('-0.0001')
    expect(
      DIUtils.commafy(-100)
    ).toEqual('-100')
    expect(
      DIUtils.commafy(-1000)
    ).toEqual('-1,000')
    expect(
      DIUtils.commafy(-33.222)
    ).toEqual('-33')
    expect(
      DIUtils.commafy(-332536.222, { digits: 2 })
    ).toEqual('-332,536.22')
    expect(
      DIUtils.commafy(123)
    ).toEqual('123')
    expect(
      DIUtils.commafy(100000)
    ).toEqual('100,000')
    expect(
      DIUtils.commafy(1000000)
    ).toEqual('1,000,000')
    expect(
      DIUtils.commafy(1000000, { digits: 2 })
    ).toEqual('1,000,000.00')
    expect(
      DIUtils.commafy('1000000')
    ).toEqual('1,000,000')
    expect(
      DIUtils.commafy(1000000, { digits: 4 })
    ).toEqual('1,000,000.0000')
    expect(
      DIUtils.commafy('1000000')
    ).toEqual('1,000,000')
    expect(
      DIUtils.commafy('1000000.22')
    ).toEqual('1,000,000.22')
    expect(
      DIUtils.commafy(1000000.22)
    ).toEqual('1,000,000')
    expect(
      DIUtils.commafy(1000000.555, { digits: 2 })
    ).toEqual('1,000,000.56')
    expect(
      DIUtils.commafy(1000000.551, { digits: 2 })
    ).toEqual('1,000,000.55')
    expect(
      DIUtils.commafy(1000000.555, { digits: 2, ceil: true })
    ).toEqual('1,000,000.56')
    expect(
      DIUtils.commafy(1000000.551, { digits: 2, ceil: true })
    ).toEqual('1,000,000.56')
    expect(
      DIUtils.commafy(1000000.555, { digits: 2, floor: true })
    ).toEqual('1,000,000.55')
    expect(
      DIUtils.commafy(1000000.551, { digits: 2, floor: true })
    ).toEqual('1,000,000.55')
    expect(
      DIUtils.commafy(6660000000000001, { spaceNumber: 4, separator: ' ' })
    ).toEqual('6660 0000 0000 0001')
    expect(
      DIUtils.commafy('111111111111111111111111111111111')
    ).toEqual('111,111,111,111,111,111,111,111,111,111,111')
    expect(
      DIUtils.commafy('cdabcdabcdabcdabcd', { spaceNumber: 4, separator: ' ' })
    ).toEqual('cd abcd abcd abcd abcd')
  })

  test('round()', () => {
    expect(
      DIUtils.round(null)
    ).toEqual(0)
    expect(
      DIUtils.round('null')
    ).toEqual(0)
    expect(
      DIUtils.round('-0')
    ).toEqual(-0)
    expect(
      DIUtils.round('-0.0')
    ).toEqual(-0)
    expect(
      DIUtils.round([])
    ).toEqual(0)
    expect(
      DIUtils.round({})
    ).toEqual(0)
    expect(
      DIUtils.round(function () {})
    ).toEqual(0)
    expect(
      DIUtils.round(true)
    ).toEqual(0)
    expect(
      DIUtils.round('abc')
    ).toEqual(0)
    expect(
      DIUtils.round('$123')
    ).toEqual(0)
    expect(
      DIUtils.round(null, 2)
    ).toEqual(0)
    expect(
      DIUtils.round('123元')
    ).toEqual(123)
    expect(
      DIUtils.round(123)
    ).toEqual(123)
    expect(
      DIUtils.round(-123)
    ).toEqual(-123)
    expect(
      DIUtils.round('1.00', 0)
    ).toEqual(1)
    expect(
      DIUtils.round('0', 2)
    ).toEqual(0)
    expect(
      DIUtils.round('4.555', 2)
    ).toEqual(4.56)
    expect(
      DIUtils.round('8.3339', 3)
    ).toEqual(8.334)
    expect(
      DIUtils.round(0.999, 4)
    ).toEqual(0.999)
    expect(
      DIUtils.round(-0.999, 4)
    ).toEqual(-0.999)
    expect(
      DIUtils.round(1.33, 3)
    ).toEqual(1.33)
    expect(
      DIUtils.round(33, 2)
    ).toEqual(33)
    expect(
      DIUtils.round(33.3, 2)
    ).toEqual(33.3)
    expect(
      DIUtils.round(52.636, 2)
    ).toEqual(52.64)
    expect(
      DIUtils.round(52.635, 2)
    ).toEqual(52.64)
    expect(
      DIUtils.round(52.634, 2)
    ).toEqual(52.63)
    expect(
      DIUtils.round(-52.636, 2)
    ).toEqual(-52.64)
    expect(
      DIUtils.round(-52.635, 2)
    ).toEqual(-52.63)
    expect(
      DIUtils.round(-52.634, 2)
    ).toEqual(-52.63)
    expect(
      DIUtils.round(2222.22, 2)
    ).toEqual(2222.22)
    expect(
      DIUtils.round(3333.99, 2)
    ).toEqual(3333.99)
    expect(
      DIUtils.round(-3333.99, 2)
    ).toEqual(-3333.99)
    expect(
      DIUtils.round(3.00099, 2)
    ).toEqual(3)
    expect(
      DIUtils.round(-3.00099, 2)
    ).toEqual(-3)
    expect(
      DIUtils.round(12.3999, 2)
    ).toEqual(12.4)
    expect(
      DIUtils.round(158335.645, 2)
    ).toEqual(158335.65)
    expect(
      DIUtils.round('12.3999', 6)
    ).toEqual(12.3999)
    expect(
      DIUtils.round('1452349847.3979', 2)
    ).toEqual(1452349847.4)
    expect(
      DIUtils.round('-1452349847.3979', 5)
    ).toEqual(-1452349847.3979)
    expect(
      DIUtils.round('1452349847.3979', 8)
    ).toEqual(1452349847.3979)
    expect(
      DIUtils.round(1e-8)
    ).toEqual(0)
    expect(
      DIUtils.round('9e-8', 6)
    ).toEqual(0)
    expect(
      DIUtils.round(9e-8, 8)
    ).toEqual(9e-8)
    expect(
      DIUtils.round('9e-8', 12)
    ).toEqual(9e-8)
    expect(
      DIUtils.round(-9e-12)
    ).toEqual(-0)
    expect(
      DIUtils.round('-9e-8', 8)
    ).toEqual(-9e-8)
    expect(
      DIUtils.round(-923e-8, 4)
    ).toEqual(-0)
    expect(
      DIUtils.round('-923e-8', 10)
    ).toEqual(-0.00000923)
  })

  test('ceil()', () => {
    expect(
      DIUtils.ceil(null)
    ).toEqual(0)
    expect(
      DIUtils.ceil('null')
    ).toEqual(0)
    expect(
      DIUtils.ceil('-0')
    ).toEqual(-0)
    expect(
      DIUtils.ceil('-0.0')
    ).toEqual(-0)
    expect(
      DIUtils.ceil([])
    ).toEqual(0)
    expect(
      DIUtils.ceil({})
    ).toEqual(0)
    expect(
      DIUtils.ceil(function () {})
    ).toEqual(0)
    expect(
      DIUtils.ceil(true)
    ).toEqual(0)
    expect(
      DIUtils.ceil('abc')
    ).toEqual(0)
    expect(
      DIUtils.ceil('$123')
    ).toEqual(0)
    expect(
      DIUtils.ceil(null, 2)
    ).toEqual(0)
    expect(
      DIUtils.ceil('123元')
    ).toEqual(123)
    expect(
      DIUtils.ceil(123)
    ).toEqual(123)
    expect(
      DIUtils.ceil(0.0001)
    ).toEqual(1)
    expect(
      DIUtils.ceil(0.003, 0)
    ).toEqual(1)
    expect(
      DIUtils.ceil(-0.003)
    ).toEqual(-0)
    expect(
      DIUtils.ceil(-0.002)
    ).toEqual(-0)
    expect(
      DIUtils.ceil(-0.003, 1)
    ).toEqual(-0)
    expect(
      DIUtils.ceil('1.00', 0)
    ).toEqual(1)
    expect(
      DIUtils.ceil('0', 2)
    ).toEqual(0)
    expect(
      DIUtils.ceil('4.555', 2)
    ).toEqual(4.56)
    expect(
      DIUtils.ceil('4.551', 2)
    ).toEqual(4.56)
    expect(
      DIUtils.ceil('8.3339', 3)
    ).toEqual(8.334)
    expect(
      DIUtils.ceil('8.3335', 3)
    ).toEqual(8.334)
    expect(
      DIUtils.ceil(0.999, 4)
    ).toEqual(0.999)
    expect(
      DIUtils.ceil(0.00001, 1)
    ).toEqual(0.1)
    expect(
      DIUtils.ceil(0.10001, 1)
    ).toEqual(0.2)
    expect(
      DIUtils.ceil(1.33, 3)
    ).toEqual(1.33)
    expect(
      DIUtils.ceil(33, 2)
    ).toEqual(33)
    expect(
      DIUtils.ceil(-33, 2)
    ).toEqual(-33)
    expect(
      DIUtils.ceil(33.3, 2)
    ).toEqual(33.3)
    expect(
      DIUtils.ceil(4.555, 2)
    ).toEqual(4.56)
    expect(
      DIUtils.ceil(52.635, 2)
    ).toEqual(52.64)
    expect(
      DIUtils.ceil(-52.635, 2)
    ).toEqual(-52.63)
    expect(
      DIUtils.ceil(52.63001, 2)
    ).toEqual(52.64)
    expect(
      DIUtils.ceil(2222.22, 2)
    ).toEqual(2222.22)
    expect(
      DIUtils.ceil(3333.99, 2)
    ).toEqual(3333.99)
    expect(
      DIUtils.ceil(3333.0000099, 3)
    ).toEqual(3333.001)
    expect(
      DIUtils.ceil(-3333.0000099, 3)
    ).toEqual(-3333)
    expect(
      DIUtils.ceil(3333.0009, 5)
    ).toEqual(3333.0009)
    expect(
      DIUtils.ceil(12.3999, 2)
    ).toEqual(12.4)
    expect(
      DIUtils.ceil(12.3909, 2)
    ).toEqual(12.4)
    expect(
      DIUtils.ceil('12.3999', 6)
    ).toEqual(12.3999)
    expect(
      DIUtils.ceil('1452349847.3979', 2)
    ).toEqual(1452349847.4)
    expect(
      DIUtils.ceil('-1452349847.3979', 5)
    ).toEqual(-1452349847.3979)
    expect(
      DIUtils.ceil('1452349847.3979', 8)
    ).toEqual(1452349847.3979)
    expect(
      DIUtils.ceil(1e-8)
    ).toEqual(1)
    expect(
      DIUtils.ceil(1e-8, 8)
    ).toEqual(1e-8)
    expect(
      DIUtils.ceil('9e-8', 6)
    ).toEqual(0.000001)
    expect(
      DIUtils.ceil(9e-8, 8)
    ).toEqual(0.00000009)
    expect(
      DIUtils.ceil(9e-8, 6)
    ).toEqual(0.000001)
    expect(
      DIUtils.ceil('9e-8', 12)
    ).toEqual(9e-8)
    expect(
      DIUtils.ceil(-9e-12)
    ).toEqual(-0)
    expect(
      DIUtils.ceil('-9e-8', 8)
    ).toEqual(-9e-8)
    expect(
      DIUtils.ceil(-923e-8, 4)
    ).toEqual(-0)
    expect(
      DIUtils.ceil('-923e-8', 10)
    ).toEqual(-0.00000923)
  })

  test('floor()', () => {
    expect(
      DIUtils.floor(null)
    ).toEqual(0)
    expect(
      DIUtils.floor('null')
    ).toEqual(0)
    expect(
      DIUtils.floor('-0')
    ).toEqual(-0)
    expect(
      DIUtils.floor('-0.0')
    ).toEqual(-0)
    expect(
      DIUtils.floor([])
    ).toEqual(0)
    expect(
      DIUtils.floor({})
    ).toEqual(0)
    expect(
      DIUtils.floor(function () {})
    ).toEqual(0)
    expect(
      DIUtils.floor(true)
    ).toEqual(0)
    expect(
      DIUtils.floor('abc')
    ).toEqual(0)
    expect(
      DIUtils.floor('$123')
    ).toEqual(0)
    expect(
      DIUtils.floor(null, 2)
    ).toEqual(0)
    expect(
      DIUtils.floor('123元')
    ).toEqual(123)
    expect(
      DIUtils.floor(123)
    ).toEqual(123)
    expect(
      DIUtils.floor('1.00', 0)
    ).toEqual(1)
    expect(
      DIUtils.floor('0', 2)
    ).toEqual(0)
    expect(
      DIUtils.floor('4.555', 2)
    ).toEqual(4.55)
    expect(
      DIUtils.floor('8.3339', 3)
    ).toEqual(8.333)
    expect(
      DIUtils.floor(4.555, 2)
    ).toEqual(4.55)
    expect(
      DIUtils.floor(52.635, 2)
    ).toEqual(52.63)
    expect(
      DIUtils.floor(-52.635, 2)
    ).toEqual(-52.64)
    expect(
      DIUtils.floor(0.999, 4)
    ).toEqual(0.999)
    expect(
      DIUtils.floor(1.33, 3)
    ).toEqual(1.33)
    expect(
      DIUtils.floor(-1.33, 3)
    ).toEqual(-1.33)
    expect(
      DIUtils.floor(33, 2)
    ).toEqual(33)
    expect(
      DIUtils.floor(33.3, 2)
    ).toEqual(33.3)
    expect(
      DIUtils.floor(2222.22, 2)
    ).toEqual(2222.22)
    expect(
      DIUtils.floor(3333.99, 2)
    ).toEqual(3333.99)
    expect(
      DIUtils.floor(-3333.99, 2)
    ).toEqual(-3333.99)
    expect(
      DIUtils.floor(33.00099, 2)
    ).toEqual(33)
    expect(
      DIUtils.floor(-33.00099, 2)
    ).toEqual(-33.01)
    expect(
      DIUtils.floor(12.3999, 2)
    ).toEqual(12.39)
    expect(
      DIUtils.floor('12.3999', 6)
    ).toEqual(12.3999)
    expect(
      DIUtils.floor('1452349847.3979', 2)
    ).toEqual(1452349847.39)
    expect(
      DIUtils.floor('-1452349847.3979', 5)
    ).toEqual(-1452349847.3979)
    expect(
      DIUtils.floor('1452349847.3979', 8)
    ).toEqual(1452349847.3979)
    expect(
      DIUtils.floor(1e-8)
    ).toEqual(0)
    expect(
      DIUtils.floor('9e-8', 6)
    ).toEqual(0)
    expect(
      DIUtils.floor(9e-8, 8)
    ).toEqual(9e-8)
    expect(
      DIUtils.floor('9e-8', 12)
    ).toEqual(9e-8)
    expect(
      DIUtils.floor(-9e-12)
    ).toEqual(-1)
    expect(
      DIUtils.floor('-9e-8', 8)
    ).toEqual(-9e-8)
    expect(
      DIUtils.floor(-923e-8, 4)
    ).toEqual(-0.0001)
    expect(
      DIUtils.floor('-923e-8', 10)
    ).toEqual(-0.00000923)
  })

  test('toFixed()', () => {
    expect(
      DIUtils.toFixed()
    ).toEqual('0')
    expect(
      DIUtils.toFixed('')
    ).toEqual('0')
    expect(
      DIUtils.toFixed(null)
    ).toEqual('0')
    expect(
      DIUtils.toFixed(undefined)
    ).toEqual('0')
    expect(
      DIUtils.toFixed('abc')
    ).toEqual('0')
    expect(
      DIUtils.toFixed(1e-9)
    ).toEqual('0')
    expect(
      DIUtils.toFixed(0)
    ).toEqual('0')
    expect(
      DIUtils.toFixed(-0)
    ).toEqual('0')
    expect(
      DIUtils.toFixed(-0.01)
    ).toEqual('0')
    expect(
      DIUtils.toFixed(0.01, 1)
    ).toEqual('0.0')
    expect(
      DIUtils.toFixed(-0.01, 1)
    ).toEqual('0.0')
    expect(
      DIUtils.toFixed(-0.01, 2)
    ).toEqual('-0.01')
    expect(
      DIUtils.toFixed(0.01, 2)
    ).toEqual('0.01')
    expect(
      DIUtils.toFixed(-0.01, 4)
    ).toEqual('-0.0100')
    expect(
      DIUtils.toFixed(0.01, 4)
    ).toEqual('0.0100')
    expect(
      DIUtils.toFixed(0.000001, 4)
    ).toEqual('0.0000')
    expect(
      DIUtils.toFixed(-0.000001, 4)
    ).toEqual('0.0000')
    expect(
      DIUtils.toFixed(0.6)
    ).toEqual('1')
    expect(
      DIUtils.toFixed(1)
    ).toEqual('1')
    expect(
      DIUtils.toFixed(0.01)
    ).toEqual('0')
    expect(
      DIUtils.toFixed(1, 2)
    ).toEqual('1.00')
    expect(
      DIUtils.toFixed(9999.77, 2)
    ).toEqual('9999.77')
    expect(
      DIUtils.toFixed(-9999.77, 1)
    ).toEqual('-9999.8')
    expect(
      DIUtils.toFixed(33.777, 2)
    ).toEqual('33.78')
    expect(
      DIUtils.toFixed(33.333, 2)
    ).toEqual('33.33')
    expect(
      DIUtils.toFixed(0.01, 4)
    ).toEqual((0.01).toFixed(4))
    expect(
      DIUtils.toFixed(-0.01, 4)
    ).toEqual((-0.01).toFixed(4))
    expect(
      DIUtils.toFixed(0.065, 2)
    ).toEqual((0.065).toFixed(2))
    expect(
      DIUtils.toFixed(0.065, 3)
    ).toEqual((0.065).toFixed(3))
    expect(
      DIUtils.toFixed(0.065, 4)
    ).toEqual((0.065).toFixed(4))
    expect(
      DIUtils.toFixed(-0.065, 2)
    ).toEqual('-0.06')
    expect(
      DIUtils.toFixed(-0.065, 3)
    ).toEqual('-0.065')
    expect(
      DIUtils.toFixed(-0.065, 4)
    ).toEqual('-0.0650')
    expect(
      DIUtils.toFixed('0.0001', 3)
    ).toEqual((0.0001).toFixed(3))
    expect(
      DIUtils.toFixed('0.0005', 3)
    ).toEqual((0.0005).toFixed(3))
    expect(
      DIUtils.toFixed('2222.222', 2)
    ).toEqual('2222.22')
    expect(
      DIUtils.toFixed('-2222.222', 2)
    ).toEqual('-2222.22')
    expect(
      DIUtils.toFixed(2222.222, 2)
    ).toEqual('2222.22')
    expect(
      DIUtils.toFixed(-2222.222, 2)
    ).toEqual('-2222.22')
    expect(
      DIUtils.toFixed(-0.123, 2)
    ).toEqual((-0.123).toFixed(2))
    expect(
      DIUtils.toFixed('1234.236', 10)
    ).toEqual((1234.236).toFixed(10))
    expect(
      DIUtils.toFixed(1234.236, 20)
    ).toEqual('1234.23600000000000000000')
    expect(
      DIUtils.toFixed(1.004, 30)
    ).toEqual('1.004000000000000000000000000000')
  })

  test('toNumberString()', () => {
    expect(
      DIUtils.toNumberString('')
    ).toEqual('')
    expect(
      DIUtils.toNumberString(0)
    ).toEqual('0')
    expect(
      DIUtils.toNumberString('0')
    ).toEqual('0')
    expect(
      DIUtils.toNumberString(-0)
    ).toEqual('0')
    expect(
      DIUtils.toNumberString('-0')
    ).toEqual('-0')
    expect(
      DIUtils.toNumberString('abc')
    ).toEqual('abc')
    expect(
      DIUtils.toNumberString(-0.001)
    ).toEqual('-0.001')
    expect(
      DIUtils.toNumberString('-0.001')
    ).toEqual('-0.001')
    expect(
      DIUtils.toNumberString('123')
    ).toEqual('123')
    expect(
      DIUtils.toNumberString(123)
    ).toEqual('123')
    expect(
      DIUtils.toNumberString(123.33)
    ).toEqual('123.33')
    expect(
      DIUtils.toNumberString('123.33')
    ).toEqual('123.33')
    expect(
      DIUtils.toNumberString(1e-9)
    ).toEqual('0.000000001')
    expect(
      DIUtils.toNumberString('1e-9')
    ).toEqual('0.000000001')
    expect(
      Number(DIUtils.toNumberString('1e-9'))
    ).toEqual(1e-9)
    expect(
      DIUtils.toNumberString(1e+22)
    ).toEqual('10000000000000000000000')
    expect(
      DIUtils.toNumberString('1e+22')
    ).toEqual('10000000000000000000000')
    expect(
      DIUtils.toNumberString(-1e+24)
    ).toEqual('-1000000000000000000000000')
    expect(
      Number(DIUtils.toNumberString(-1e+24))
    ).toEqual(-1e+24)
    expect(
      DIUtils.toNumberString(+1e+24)
    ).toEqual('1000000000000000000000000')
    expect(
      Number(DIUtils.toNumberString(+1e+24))
    ).toEqual(+1e+24)
    expect(
      DIUtils.toNumberString(1234e+22)
    ).toEqual('12340000000000000000000000')
    expect(
      DIUtils.toNumberString(123.4e+22)
    ).toEqual('1234000000000000000000000')
    expect(
      Number(DIUtils.toNumberString(123.4e+22))
    ).toEqual(123.4e+22)
    expect(
      DIUtils.toNumberString(2536e-16)
    ).toEqual('0.0000000000002536')
    expect(
      Number(DIUtils.toNumberString(2536e-16))
    ).toEqual(2536e-16)
    expect(
      DIUtils.toNumberString(25.36e-16)
    ).toEqual('0.000000000000002536')
    expect(
      Number(DIUtils.toNumberString(25.36e-16))
    ).toEqual(25.36e-16)
  })

  test('toNumber()', () => {
    expect(
      DIUtils.toNumber([])
    ).toEqual(0)
    expect(
      DIUtils.toNumber({})
    ).toEqual(0)
    expect(
      DIUtils.toNumber(function () {})
    ).toEqual(0)
    expect(
      DIUtils.toNumber(true)
    ).toEqual(0)
    expect(
      DIUtils.toNumber('abc')
    ).toEqual(0)
    expect(
      DIUtils.toNumber('$123')
    ).toEqual(0)
    expect(
      DIUtils.toNumber('123元')
    ).toEqual(123)
    expect(
      DIUtils.toNumber(123)
    ).toEqual(123)
    expect(
      DIUtils.toNumber('12.3')
    ).toEqual(12.3)
    expect(
      DIUtils.toNumber('12456456.66663')
    ).toEqual(12456456.66663)
  })

  test('toInteger()', () => {
    expect(
      DIUtils.toInteger(0)
    ).toEqual(0)
    expect(
      DIUtils.toInteger(-1)
    ).toEqual(-1)
    expect(
      DIUtils.toInteger([])
    ).toEqual(0)
    expect(
      DIUtils.toInteger({})
    ).toEqual(0)
    expect(
      DIUtils.toInteger(/\d/)
    ).toEqual(0)
    expect(
      DIUtils.toInteger(function () {})
    ).toEqual(0)
    expect(
      DIUtils.toInteger(true)
    ).toEqual(0)
    expect(
      DIUtils.toInteger('abc')
    ).toEqual(0)
    expect(
      DIUtils.toInteger(123)
    ).toEqual(123)
    expect(
      DIUtils.toInteger(5675.9004)
    ).toEqual(5675)
    expect(
      DIUtils.toInteger('12.3')
    ).toEqual(12)
    expect(
      DIUtils.toInteger('16572.3657567')
    ).toEqual(16572)
  })

  test('add()', () => {
    expect(
      DIUtils.add(0)
    ).toEqual(0)
    expect(
      DIUtils.add(0, 0)
    ).toEqual(0)
    expect(
      DIUtils.add([])
    ).toEqual(0)
    expect(
      DIUtils.add({})
    ).toEqual(0)
    expect(
      DIUtils.add(/\d/)
    ).toEqual(0)
    expect(
      DIUtils.add(function () {})
    ).toEqual(0)
    expect(
      DIUtils.add(true)
    ).toEqual(0)
    expect(
      DIUtils.add('abc')
    ).toEqual(0)
    expect(
      DIUtils.add('abc', '123')
    ).toEqual(123)
    expect(
      DIUtils.add('22', 33)
    ).toEqual(55)
    expect(
      DIUtils.add(0, 33)
    ).toEqual(33)
    expect(
      DIUtils.add(2000, 500000)
    ).toEqual(502000)
    expect(
      DIUtils.add(3.84, 4.78)
    ).toEqual(8.62)
    expect(
      DIUtils.add(-3.33, 7.066)
    ).toEqual(3.736)
    expect(
      DIUtils.add(0.4598, 5.024666)
    ).toEqual(5.484466)
    expect(
      DIUtils.add(-0.4598, 5.0433)
    ).toEqual(4.5835)
    expect(
      DIUtils.add(17.67, 1.3)
    ).toEqual(18.97)
    expect(
      DIUtils.add(32654.324, 9666.7)
    ).toEqual(42321.024)
    expect(
      DIUtils.add(32654.111, 1e-4)
    ).toEqual(32654.1111)
    expect(
      DIUtils.add(1e-7, 1e-3)
    ).toEqual(0.0010001)
  })

  test('subtract()', () => {
    expect(
      DIUtils.subtract(0)
    ).toEqual(0)
    expect(
      DIUtils.subtract(0, 0)
    ).toEqual(0)
    expect(
      DIUtils.subtract([])
    ).toEqual(0)
    expect(
      DIUtils.subtract({})
    ).toEqual(0)
    expect(
      DIUtils.subtract(/\d/)
    ).toEqual(0)
    expect(
      DIUtils.subtract(function () {})
    ).toEqual(0)
    expect(
      DIUtils.subtract(true)
    ).toEqual(0)
    expect(
      DIUtils.subtract('abc')
    ).toEqual(0)
    expect(
      DIUtils.subtract('abc', '123')
    ).toEqual(-123)
    expect(
      DIUtils.subtract('22', 33)
    ).toEqual(-11)
    expect(
      DIUtils.subtract(0, 33)
    ).toEqual(-33)
    expect(
      DIUtils.subtract(500000, 2000)
    ).toEqual(498000)
    expect(
      DIUtils.subtract(324253.1, 23559.9)
    ).toEqual(300693.2)
    expect(
      DIUtils.subtract(6.66, 3.9)
    ).toEqual(2.76)
    expect(
      DIUtils.subtract(3.33, 7.066)
    ).toEqual(-3.736)
    expect(
      DIUtils.subtract(5.024664, 0.453)
    ).toEqual(4.571664)
    expect(
      DIUtils.subtract(25.77, 3.6)
    ).toEqual(22.17)
    expect(
      DIUtils.subtract(1e-4, 1.999)
    ).toEqual(-1.9989)
    expect(
      DIUtils.subtract(1e-7, 1e-3)
    ).toEqual(-0.0009999)
  })

  test('multiply()', () => {
    expect(
      DIUtils.multiply(0)
    ).toEqual(0)
    expect(
      DIUtils.multiply(0, 0)
    ).toEqual(0)
    expect(
      DIUtils.multiply([])
    ).toEqual(0)
    expect(
      DIUtils.multiply({})
    ).toEqual(0)
    expect(
      DIUtils.multiply(/\d/)
    ).toEqual(0)
    expect(
      DIUtils.multiply(function () {})
    ).toEqual(0)
    expect(
      DIUtils.multiply(true)
    ).toEqual(0)
    expect(
      DIUtils.multiply('abc')
    ).toEqual(0)
    expect(
      DIUtils.multiply('abc', '123')
    ).toEqual(0)
    expect(
      DIUtils.multiply('22', 33)
    ).toEqual(726)
    expect(
      DIUtils.multiply(0, 33)
    ).toEqual(0)
    expect(
      DIUtils.multiply(500000, 2000)
    ).toEqual(1000000000)
    expect(
      DIUtils.multiply(6.66, 3.7)
    ).toEqual(24.642)
    expect(
      DIUtils.multiply(3.33, 0.9)
    ).toEqual(2.997)
    expect(
      DIUtils.multiply(5.024664, 0.453)
    ).toEqual(2.276172792)
    expect(
      DIUtils.multiply(158335.645, 100)
    ).toEqual(15833564.5)
    expect(
      DIUtils.multiply(25.77, 7.1)
    ).toEqual(182.967)
    expect(
      DIUtils.multiply(17.67, 100)
    ).toEqual(1767)
    expect(
      DIUtils.multiply(1e-7, 3.3)
    ).toEqual(3.3e-7)
    expect(
      DIUtils.multiply(3.3, 0.0000001)
    ).toEqual(3.3e-7)
    expect(
      DIUtils.multiply(1e-7, 1e-3)
    ).toEqual(1e-10)
  })

  test('divide()', () => {
    expect(
      DIUtils.divide(0)
    ).toEqual(0)
    expect(
      DIUtils.divide(0, 0)
    ).toEqual(0)
    expect(
      DIUtils.divide([])
    ).toEqual(0)
    expect(
      DIUtils.divide({})
    ).toEqual(0)
    expect(
      DIUtils.divide(/\d/)
    ).toEqual(0)
    expect(
      DIUtils.divide(function () {})
    ).toEqual(0)
    expect(
      DIUtils.divide(true)
    ).toEqual(0)
    expect(
      DIUtils.divide('abc')
    ).toEqual(0)
    expect(
      DIUtils.divide('abc', '123')
    ).toEqual(0)
    expect(
      DIUtils.divide('33', 11)
    ).toEqual(3)
    expect(
      DIUtils.divide(0, 33)
    ).toEqual(0)
    expect(
      DIUtils.divide(21, 3)
    ).toEqual(7)
    expect(
      DIUtils.divide(100, 5)
    ).toEqual(20)
    expect(
      DIUtils.divide(500000, 2000)
    ).toEqual(250)
    expect(
      DIUtils.divide(1024.88, 0.2)
    ).toEqual(5124.4)
    expect(
      DIUtils.divide(51.2, 8)
    ).toEqual(6.4)
    expect(
      DIUtils.divide(2.997, 0.9)
    ).toEqual(3.33)
    expect(
      DIUtils.divide(2.276172792, 0.453)
    ).toEqual(5.024664)
    expect(
      DIUtils.divide(182.967, 25.77)
    ).toEqual(7.1)
    expect(
      DIUtils.divide(61.11109, 2)
    ).toEqual(30.555545)
    expect(
      DIUtils.divide(2641.1, 1e-9)
    ).toEqual(2641100000000)
    expect(
      DIUtils.divide(2641.1, 0.000000001)
    ).toEqual(2641100000000)
    expect(
      DIUtils.divide(1e-7, 1e-3)
    ).toEqual(0.0001)
  })
})

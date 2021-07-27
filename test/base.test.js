const DIUtils = require('../func')

describe('Base functions', () => {
  test('hasOwnProp()', () => {
    expect(
      DIUtils.hasOwnProp()
    ).toEqual(false)
    expect(
      DIUtils.hasOwnProp(0)
    ).toEqual(false)
    expect(
      DIUtils.hasOwnProp(-1)
    ).toEqual(false)
    expect(
      DIUtils.hasOwnProp(1)
    ).toEqual(false)
    expect(
      DIUtils.hasOwnProp(null)
    ).toEqual(false)
    expect(
      DIUtils.hasOwnProp('')
    ).toEqual(false)
    expect(
      DIUtils.hasOwnProp([])
    ).toEqual(false)
    expect(
      DIUtils.hasOwnProp(-1)
    ).toEqual(false)
    expect(
      DIUtils.hasOwnProp(true)
    ).toEqual(false)
    expect(
      DIUtils.hasOwnProp(false)
    ).toEqual(false)
    expect(
      DIUtils.hasOwnProp(undefined)
    ).toEqual(false)
    expect(
      DIUtils.hasOwnProp({})
    ).toEqual(false)
    expect(
      DIUtils.hasOwnProp({ a: 1 }, 'b')
    ).toEqual(false)
    expect(
      DIUtils.hasOwnProp({ aa: null }, 'aa.bb')
    ).toEqual(false)
    expect(
      DIUtils.hasOwnProp({ a: 1 }, 'a')
    ).toEqual(true)
    expect(
      DIUtils.hasOwnProp([1, 2, 3], 2)
    ).toEqual(true)
    expect(
      DIUtils.hasOwnProp([1, 2, 3], '2')
    ).toEqual(true)
    expect(
      DIUtils.hasOwnProp({ aa: { bb: 1 } }, 'aa.bb')
    ).toEqual(false)
  })

  test('isNaN()', () => {
    expect(
      DIUtils.isNaN()
    ).toEqual(false)
    expect(
      DIUtils.isNaN(0)
    ).toEqual(false)
    expect(
      DIUtils.isNaN(-1)
    ).toEqual(false)
    expect(
      DIUtils.isNaN(1)
    ).toEqual(false)
    expect(
      DIUtils.isNaN(null)
    ).toEqual(false)
    expect(
      DIUtils.isNaN('')
    ).toEqual(false)
    expect(
      DIUtils.isNaN([])
    ).toEqual(false)
    expect(
      DIUtils.isNaN(-1)
    ).toEqual(false)
    expect(
      DIUtils.isNaN(true)
    ).toEqual(false)
    expect(
      DIUtils.isNaN(false)
    ).toEqual(false)
    expect(
      DIUtils.isNaN(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isNaN({})
    ).toEqual(false)
    expect(
      DIUtils.isNaN('null')
    ).toEqual(false)
    expect(
      DIUtils.isNaN('NAN')
    ).toEqual(false)
    expect(
      DIUtils.isNaN(/\d/)
    ).toEqual(false)
    expect(
      DIUtils.isNaN(function () {})
    ).toEqual(false)
    expect(
      DIUtils.isNaN(NaN)
    ).toEqual(true)
  })

  test('isFinite()', () => {
    expect(
      DIUtils.isFinite()
    ).toEqual(false)
    expect(
      DIUtils.isFinite(null)
    ).toEqual(false)
    expect(
      DIUtils.isFinite(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isFinite(NaN)
    ).toEqual(false)
    expect(
      DIUtils.isFinite({})
    ).toEqual(false)
    expect(
      DIUtils.isFinite([])
    ).toEqual(false)
    expect(
      DIUtils.isFinite(function () {})
    ).toEqual(false)
    expect(
      DIUtils.isFinite(/\d/)
    ).toEqual(false)
    expect(
      DIUtils.isFinite('num')
    ).toEqual(false)
    expect(
      DIUtils.isFinite('5')
    ).toEqual(false)
    expect(
      DIUtils.isFinite('')
    ).toEqual(false)
    expect(
      DIUtils.isFinite(-2)
    ).toEqual(true)
    expect(
      DIUtils.isFinite(0)
    ).toEqual(true)
    expect(
      DIUtils.isFinite(5)
    ).toEqual(true)
    expect(
      DIUtils.isFinite(2e64)
    ).toEqual(true)
  })

  test('isUndefined()', () => {
    expect(
      DIUtils.isUndefined(0)
    ).toEqual(false)
    expect(
      DIUtils.isUndefined(-2)
    ).toEqual(false)
    expect(
      DIUtils.isUndefined(false)
    ).toEqual(false)
    expect(
      DIUtils.isUndefined('')
    ).toEqual(false)
    expect(
      DIUtils.isUndefined({})
    ).toEqual(false)
    expect(
      DIUtils.isUndefined([])
    ).toEqual(false)
    expect(
      DIUtils.isUndefined(function () {})
    ).toEqual(false)
    expect(
      DIUtils.isUndefined(/\d/)
    ).toEqual(false)
    expect(
      DIUtils.isUndefined(null)
    ).toEqual(false)
    expect(
      DIUtils.isUndefined('null')
    ).toEqual(false)
    expect(
      DIUtils.isUndefined('undefined')
    ).toEqual(false)
    expect(
      DIUtils.isUndefined(undefined)
    ).toEqual(true)
    expect(
      DIUtils.isUndefined()
    ).toEqual(true)
  })

  test('isArray()', () => {
    let method = function () {
      expect(
        DIUtils.isArray(arguments)
      ).toEqual(false)
    }
    method()
    method(11, 22)
    expect(
      DIUtils.isArray(null)
    ).toEqual(false)
    expect(
      DIUtils.isArray(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isArray({})
    ).toEqual(false)
    expect(
      DIUtils.isArray(function () {})
    ).toEqual(false)
    expect(
      DIUtils.isArray(0)
    ).toEqual(false)
    expect(
      DIUtils.isArray(-2)
    ).toEqual(false)
    expect(
      DIUtils.isArray(false)
    ).toEqual(false)
    expect(
      DIUtils.isArray('false')
    ).toEqual(false)
    expect(
      DIUtils.isArray([])
    ).toEqual(true)
    expect(
      DIUtils.isArray([1, 2, 3])
    ).toEqual(true)
  })

  test('isFloat()', () => {
    expect(
      DIUtils.isFloat(null)
    ).toEqual(false)
    expect(
      DIUtils.isFloat('null')
    ).toEqual(false)
    expect(
      DIUtils.isFloat({})
    ).toEqual(false)
    expect(
      DIUtils.isFloat([])
    ).toEqual(false)
    expect(
      DIUtils.isFloat(function () {})
    ).toEqual(false)
    expect(
      DIUtils.isFloat(/1\.3/)
    ).toEqual(false)
    expect(
      DIUtils.isFloat(0)
    ).toEqual(false)
    expect(
      DIUtils.isFloat(3)
    ).toEqual(false)
    expect(
      DIUtils.isFloat(-1)
    ).toEqual(false)
    expect(
      DIUtils.isFloat('0')
    ).toEqual(false)
    expect(
      DIUtils.isFloat('3.9a')
    ).toEqual(false)
    expect(
      DIUtils.isFloat('1.3')
    ).toEqual(true)
    expect(
      DIUtils.isFloat(3.3)
    ).toEqual(true)
    expect(
      DIUtils.isFloat(-2.3)
    ).toEqual(true)
  })

  test('isInteger()', () => {
    expect(
      DIUtils.isInteger(null)
    ).toEqual(false)
    expect(
      DIUtils.isInteger([])
    ).toEqual(false)
    expect(
      DIUtils.isInteger({})
    ).toEqual(false)
    expect(
      DIUtils.isInteger(/123/)
    ).toEqual(false)
    expect(
      DIUtils.isInteger(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isInteger(null)
    ).toEqual(false)
    expect(
      DIUtils.isInteger('null')
    ).toEqual(false)
    expect(
      DIUtils.isInteger('undefined')
    ).toEqual(false)
    expect(
      DIUtils.isInteger(3.3)
    ).toEqual(false)
    expect(
      DIUtils.isInteger(-1.3)
    ).toEqual(false)
    expect(
      DIUtils.isInteger('3.4')
    ).toEqual(false)
    expect(
      DIUtils.isInteger('0')
    ).toEqual(true)
    expect(
      DIUtils.isInteger('3')
    ).toEqual(true)
    expect(
      DIUtils.isInteger('-5')
    ).toEqual(true)
    expect(
      DIUtils.isInteger(2)
    ).toEqual(true)
    expect(
      DIUtils.isInteger(-1)
    ).toEqual(true)
    expect(
      DIUtils.isInteger(0)
    ).toEqual(true)
  })

  test('isFunction()', () => {
    expect(
      DIUtils.isFunction('null')
    ).toEqual(false)
    expect(
      DIUtils.isFunction(null)
    ).toEqual(false)
    expect(
      DIUtils.isFunction(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isFunction(false)
    ).toEqual(false)
    expect(
      DIUtils.isFunction(0)
    ).toEqual(false)
    expect(
      DIUtils.isFunction(-1)
    ).toEqual(false)
    expect(
      DIUtils.isFunction([])
    ).toEqual(false)
    expect(
      DIUtils.isFunction({})
    ).toEqual(false)
    expect(
      DIUtils.isFunction(function () {})
    ).toEqual(true)
  })

  test('isBoolean()', () => {
    expect(
      DIUtils.isBoolean([])
    ).toEqual(false)
    expect(
      DIUtils.isBoolean({})
    ).toEqual(false)
    expect(
      DIUtils.isBoolean(null)
    ).toEqual(false)
    expect(
      DIUtils.isBoolean(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isBoolean('false')
    ).toEqual(false)
    expect(
      DIUtils.isBoolean(0)
    ).toEqual(false)
    expect(
      DIUtils.isBoolean(-1)
    ).toEqual(false)
    expect(
      DIUtils.isBoolean(true)
    ).toEqual(true)
  })

  test('isString()', () => {
    expect(
      DIUtils.isString(1)
    ).toEqual(false)
    expect(
      DIUtils.isString(0)
    ).toEqual(false)
    expect(
      DIUtils.isString(null)
    ).toEqual(false)
    expect(
      DIUtils.isString(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isString({})
    ).toEqual(false)
    expect(
      DIUtils.isString([])
    ).toEqual(false)
    expect(
      DIUtils.isString(/\d/)
    ).toEqual(false)
    expect(
      DIUtils.isString(function () {})
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        DIUtils.isString(Symbol('abc'))
      ).toEqual(false)
    }
    expect(
      DIUtils.isString(true)
    ).toEqual(false)
    expect(
      DIUtils.isString('')
    ).toEqual(true)
    expect(
      DIUtils.isString('abc')
    ).toEqual(true)
  })

  test('isNumber()', () => {
    expect(
      DIUtils.isNumber(null)
    ).toEqual(false)
    expect(
      DIUtils.isNumber(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isNumber({})
    ).toEqual(false)
    expect(
      DIUtils.isNumber([])
    ).toEqual(false)
    expect(
      DIUtils.isNumber(function () {})
    ).toEqual(false)
    expect(
      DIUtils.isNumber(/123/)
    ).toEqual(false)
    expect(
      DIUtils.isNumber('1')
    ).toEqual(false)
    expect(
      DIUtils.isNumber(-1)
    ).toEqual(true)
    expect(
      DIUtils.isNumber(0)
    ).toEqual(true)
    expect(
      DIUtils.isNumber(9.3)
    ).toEqual(true)
  })

  test('isRegExp()', () => {
    expect(
      DIUtils.isRegExp(null)
    ).toEqual(false)
    expect(
      DIUtils.isRegExp(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isRegExp([])
    ).toEqual(false)
    expect(
      DIUtils.isRegExp({})
    ).toEqual(false)
    expect(
      DIUtils.isRegExp(function () {})
    ).toEqual(false)
    expect(
      DIUtils.isRegExp(-1)
    ).toEqual(false)
    expect(
      DIUtils.isRegExp('a')
    ).toEqual(false)
    expect(
      DIUtils.isRegExp(new RegExp('a'))
    ).toEqual(true)
    expect(
      DIUtils.isRegExp(/\d/)
    ).toEqual(true)
  })

  test('isObject()', () => {
    expect(
      DIUtils.isObject(123)
    ).toEqual(false)
    expect(
      DIUtils.isObject(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isObject('null')
    ).toEqual(false)
    expect(
      DIUtils.isObject(function () {})
    ).toEqual(false)
    expect(
      DIUtils.isObject(-1)
    ).toEqual(false)
    expect(
      DIUtils.isObject(false)
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        DIUtils.isObject(Symbol('123'))
      ).toEqual(false)
    }
    expect(
      DIUtils.isObject(/\d/)
    ).toEqual(true)
    expect(
      DIUtils.isObject(null)
    ).toEqual(true)
    expect(
      DIUtils.isObject([])
    ).toEqual(true)
    expect(
      DIUtils.isObject({})
    ).toEqual(true)
  })

  test('isPlainObject()', () => {
    expect(
      DIUtils.isPlainObject()
    ).toEqual(false)
    expect(
      DIUtils.isPlainObject(null)
    ).toEqual(false)
    expect(
      DIUtils.isPlainObject(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isPlainObject(/\d/)
    ).toEqual(false)
    expect(
      DIUtils.isPlainObject(function () {})
    ).toEqual(false)
    expect(
      DIUtils.isPlainObject([])
    ).toEqual(false)
    expect(
      DIUtils.isPlainObject('')
    ).toEqual(false)
    expect(
      DIUtils.isPlainObject(-1)
    ).toEqual(false)
    expect(
      DIUtils.isPlainObject(123)
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        DIUtils.isPlainObject(Symbol('123'))
      ).toEqual(false)
    }
    expect(
      DIUtils.isPlainObject({})
    ).toEqual(true)
  })

  test('isDate()', () => {
    expect(
      DIUtils.isDate()
    ).toEqual(false)
    expect(
      DIUtils.isDate('')
    ).toEqual(false)
    expect(
      DIUtils.isDate('2017-12-20')
    ).toEqual(false)
    expect(
      DIUtils.isDate('ue Dec 04 2018 15:02:06 GMT+0800')
    ).toEqual(false)
    expect(
      DIUtils.isDate(-1)
    ).toEqual(false)
    expect(
      DIUtils.isDate(0)
    ).toEqual(false)
    expect(
      DIUtils.isDate(null)
    ).toEqual(false)
    expect(
      DIUtils.isDate(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isDate([])
    ).toEqual(false)
    expect(
      DIUtils.isDate({})
    ).toEqual(false)
    expect(
      DIUtils.isDate(1514096716800)
    ).toEqual(false)
    expect(
      DIUtils.isDate(new Date())
    ).toEqual(true)
    expect(
      DIUtils.isDate(DIUtils.toStringDate('2017-12-20', 'yyyy-MM-dd'))
    ).toEqual(true)
  })

  test('isError()', () => {
    expect(
      DIUtils.isError()
    ).toEqual(false)
    expect(
      DIUtils.isError(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isError(null)
    ).toEqual(false)
    expect(
      DIUtils.isError({})
    ).toEqual(false)
    expect(
      DIUtils.isError([])
    ).toEqual(false)
    expect(
      DIUtils.isError(-1)
    ).toEqual(false)
    expect(
      DIUtils.isError(0)
    ).toEqual(false)
    expect(
      DIUtils.isError('')
    ).toEqual(false)
    expect(
      DIUtils.isError(function () {})
    ).toEqual(false)
    expect(
      DIUtils.isError(new TypeError('error'))
    ).toEqual(true)
    expect(
      DIUtils.isError(new Error('error'))
    ).toEqual(true)
  })

  test('isTypeError()', () => {
    expect(
      DIUtils.isTypeError()
    ).toEqual(false)
    expect(
      DIUtils.isTypeError(null)
    ).toEqual(false)
    expect(
      DIUtils.isTypeError(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isTypeError([])
    ).toEqual(false)
    expect(
      DIUtils.isTypeError({})
    ).toEqual(false)
    expect(
      DIUtils.isTypeError(-1)
    ).toEqual(false)
    expect(
      DIUtils.isTypeError(0)
    ).toEqual(false)
    expect(
      DIUtils.isTypeError('')
    ).toEqual(false)
    expect(
      DIUtils.isTypeError(function () {})
    ).toEqual(false)
    expect(
      DIUtils.isTypeError(new Error('error'))
    ).toEqual(false)
    expect(
      DIUtils.isTypeError(new TypeError('error'))
    ).toEqual(true)
  })

  test('isEmpty()', () => {
    expect(
      DIUtils.isEmpty([11])
    ).toEqual(false)
    expect(
      DIUtils.isEmpty({ a: 1 })
    ).toEqual(false)
    expect(
      DIUtils.isEmpty(' ')
    ).toEqual(false)
    expect(
      DIUtils.isEmpty()
    ).toEqual(true)
    expect(
      DIUtils.isEmpty(0)
    ).toEqual(true)
    expect(
      DIUtils.isEmpty(100)
    ).toEqual(true)
    expect(
      DIUtils.isEmpty(-1)
    ).toEqual(true)
    expect(
      DIUtils.isEmpty('')
    ).toEqual(true)
    expect(
      DIUtils.isEmpty(false)
    ).toEqual(true)
    expect(
      DIUtils.isEmpty(null)
    ).toEqual(true)
    expect(
      DIUtils.isEmpty(undefined)
    ).toEqual(true)
    expect(
      DIUtils.isEmpty({})
    ).toEqual(true)
    expect(
      DIUtils.isEmpty([])
    ).toEqual(true)
    expect(
      DIUtils.isEmpty(/\d/)
    ).toEqual(true)
    expect(
      DIUtils.isEmpty(function () {})
    ).toEqual(true)
  })

  test('isNull()', () => {
    expect(
      DIUtils.isNull()
    ).toEqual(false)
    expect(
      DIUtils.isNull(0)
    ).toEqual(false)
    expect(
      DIUtils.isNull(false)
    ).toEqual(false)
    expect(
      DIUtils.isNull(function () {})
    ).toEqual(false)
    expect(
      DIUtils.isNull(/null/)
    ).toEqual(false)
    expect(
      DIUtils.isNull({})
    ).toEqual(false)
    expect(
      DIUtils.isNull([])
    ).toEqual(false)
    expect(
      DIUtils.isNull(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isNull('null')
    ).toEqual(false)
    expect(
      DIUtils.isNull('')
    ).toEqual(false)
    expect(
      DIUtils.isNull(null)
    ).toEqual(true)
  })

  test('isSymbol()', () => {
    expect(
      DIUtils.isSymbol()
    ).toEqual(false)
    expect(
      DIUtils.isSymbol(null)
    ).toEqual(false)
    expect(
      DIUtils.isSymbol(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isSymbol({})
    ).toEqual(false)
    expect(
      DIUtils.isSymbol([])
    ).toEqual(false)
    expect(
      DIUtils.isSymbol(0)
    ).toEqual(false)
    expect(
      DIUtils.isSymbol(-1)
    ).toEqual(false)
    expect(
      DIUtils.isSymbol(false)
    ).toEqual(false)
    expect(
      DIUtils.isSymbol(function () {})
    ).toEqual(false)
    expect(
      DIUtils.isSymbol('a')
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        DIUtils.isSymbol(Symbol('a'))
      ).toEqual(true)
    }
  })

  test('isArguments()', () => {
    expect(
      DIUtils.isArguments()
    ).toEqual(false)
    expect(
      DIUtils.isArguments(null)
    ).toEqual(false)
    expect(
      DIUtils.isArguments(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isArguments()
    ).toEqual(false)
    expect(
      DIUtils.isArguments([])
    ).toEqual(false)
    expect(
      DIUtils.isArguments({})
    ).toEqual(false)
    expect(
      DIUtils.isArguments(0)
    ).toEqual(false)
    expect(
      DIUtils.isArguments(-1)
    ).toEqual(false)
    expect(
      DIUtils.isArguments(false)
    ).toEqual(false)
    expect(
      DIUtils.isArguments(function () {})
    ).toEqual(false)
    let method = function () {
      expect(
        DIUtils.isArguments(arguments)
      ).toEqual(true)
    }
    method()
  })

  test('isElement()', () => {
    expect(
      DIUtils.isElement()
    ).toEqual(false)
    expect(
      DIUtils.isElement(null)
    ).toEqual(false)
    expect(
      DIUtils.isElement(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isElement(-1)
    ).toEqual(false)
    expect(
      DIUtils.isElement(123)
    ).toEqual(false)
    expect(
      DIUtils.isElement(0)
    ).toEqual(false)
    expect(
      DIUtils.isElement('')
    ).toEqual(false)
    expect(
      DIUtils.isElement({})
    ).toEqual(false)
    expect(
      DIUtils.isElement([])
    ).toEqual(false)
    expect(
      DIUtils.isElement(function () {})
    ).toEqual(false)
  })

  test('isDocument()', () => {
    expect(
      DIUtils.isDocument()
    ).toEqual(false)
    expect(
      DIUtils.isDocument(null)
    ).toEqual(false)
    expect(
      DIUtils.isDocument(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isDocument(-1)
    ).toEqual(false)
    expect(
      DIUtils.isDocument(123)
    ).toEqual(false)
    expect(
      DIUtils.isDocument(0)
    ).toEqual(false)
    expect(
      DIUtils.isDocument('')
    ).toEqual(false)
    expect(
      DIUtils.isDocument({})
    ).toEqual(false)
    expect(
      DIUtils.isDocument([])
    ).toEqual(false)
    expect(
      DIUtils.isDocument(function () {})
    ).toEqual(false)
  })

  test('isWindow()', () => {
    expect(
      DIUtils.isWindow()
    ).toEqual(false)
    expect(
      DIUtils.isWindow(null)
    ).toEqual(false)
    expect(
      DIUtils.isWindow(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isWindow(-1)
    ).toEqual(false)
    expect(
      DIUtils.isWindow(123)
    ).toEqual(false)
    expect(
      DIUtils.isWindow(0)
    ).toEqual(false)
    expect(
      DIUtils.isWindow('')
    ).toEqual(false)
    expect(
      DIUtils.isWindow({})
    ).toEqual(false)
    expect(
      DIUtils.isWindow([])
    ).toEqual(false)
    expect(
      DIUtils.isWindow(function () {})
    ).toEqual(false)
  })

  test('isFormData()', () => {
    expect(
      DIUtils.isFormData()
    ).toEqual(false)
    expect(
      DIUtils.isFormData(null)
    ).toEqual(false)
    expect(
      DIUtils.isFormData(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isFormData(-1)
    ).toEqual(false)
    expect(
      DIUtils.isFormData(123)
    ).toEqual(false)
    expect(
      DIUtils.isFormData(0)
    ).toEqual(false)
    expect(
      DIUtils.isFormData('')
    ).toEqual(false)
    expect(
      DIUtils.isFormData({})
    ).toEqual(false)
    expect(
      DIUtils.isFormData([])
    ).toEqual(false)
    expect(
      DIUtils.isFormData('a=1')
    ).toEqual(false)
    expect(
      DIUtils.isFormData(new FormData())
    ).toEqual(true)
  })

  test('isMap()', () => {
    expect(
      DIUtils.isMap()
    ).toEqual(false)
    expect(
      DIUtils.isMap(null)
    ).toEqual(false)
    expect(
      DIUtils.isMap(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isMap(-1)
    ).toEqual(false)
    expect(
      DIUtils.isMap(123)
    ).toEqual(false)
    expect(
      DIUtils.isMap(0)
    ).toEqual(false)
    expect(
      DIUtils.isMap('')
    ).toEqual(false)
    expect(
      DIUtils.isMap({})
    ).toEqual(false)
    expect(
      DIUtils.isMap([])
    ).toEqual(false)
    expect(
      DIUtils.isMap(new Map())
    ).toEqual(true)
  })

  test('isWeakMap()', () => {
    expect(
      DIUtils.isWeakMap()
    ).toEqual(false)
    expect(
      DIUtils.isWeakMap(null)
    ).toEqual(false)
    expect(
      DIUtils.isWeakMap(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isWeakMap(-1)
    ).toEqual(false)
    expect(
      DIUtils.isWeakMap(123)
    ).toEqual(false)
    expect(
      DIUtils.isWeakMap(0)
    ).toEqual(false)
    expect(
      DIUtils.isWeakMap('')
    ).toEqual(false)
    expect(
      DIUtils.isWeakMap({})
    ).toEqual(false)
    expect(
      DIUtils.isWeakMap([])
    ).toEqual(false)
    expect(
      DIUtils.isWeakMap(new WeakMap())
    ).toEqual(true)
  })

  test('isSet()', () => {
    expect(
      DIUtils.isSet()
    ).toEqual(false)
    expect(
      DIUtils.isSet(null)
    ).toEqual(false)
    expect(
      DIUtils.isSet(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isSet(-1)
    ).toEqual(false)
    expect(
      DIUtils.isSet(123)
    ).toEqual(false)
    expect(
      DIUtils.isSet(0)
    ).toEqual(false)
    expect(
      DIUtils.isSet('')
    ).toEqual(false)
    expect(
      DIUtils.isSet({})
    ).toEqual(false)
    expect(
      DIUtils.isSet([])
    ).toEqual(false)
    expect(
      DIUtils.isSet(new Set())
    ).toEqual(true)
  })

  test('isWeakSet()', () => {
    expect(
      DIUtils.isWeakSet()
    ).toEqual(false)
    expect(
      DIUtils.isWeakSet(null)
    ).toEqual(false)
    expect(
      DIUtils.isWeakSet(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isWeakSet(-1)
    ).toEqual(false)
    expect(
      DIUtils.isWeakSet(123)
    ).toEqual(false)
    expect(
      DIUtils.isWeakSet(0)
    ).toEqual(false)
    expect(
      DIUtils.isWeakSet('')
    ).toEqual(false)
    expect(
      DIUtils.isWeakSet({})
    ).toEqual(false)
    expect(
      DIUtils.isWeakSet([])
    ).toEqual(false)
    expect(
      DIUtils.isWeakSet(new WeakSet())
    ).toEqual(true)
  })

  test('isLeapYear()', () => {
    expect(
      DIUtils.isLeapYear('2018-12-01')
    ).toEqual(false)
    expect(
      DIUtils.isLeapYear('2020-12-01 10:30:30')
    ).toEqual(true)
    expect(
      DIUtils.isLeapYear(1581305634689)
    ).toEqual(true)
    expect(
      DIUtils.isLeapYear(new Date(2012, 1, 1).getTime())
    ).toEqual(true)
    expect(
      DIUtils.isLeapYear(new Date(2020, 11, 1))
    ).toEqual(true)
  })

  test('isMatch()', () => {
    expect(
      DIUtils.isMatch()
    ).toEqual(true)
    expect(
      DIUtils.isMatch(null)
    ).toEqual(true)
    expect(
      DIUtils.isMatch(undefined)
    ).toEqual(true)
    expect(
      DIUtils.isMatch([])
    ).toEqual(true)
    expect(
      DIUtils.isMatch({})
    ).toEqual(true)
    expect(
      DIUtils.isMatch(-1)
    ).toEqual(true)
    expect(
      DIUtils.isMatch(0)
    ).toEqual(true)
    expect(
      DIUtils.isMatch('')
    ).toEqual(true)
    expect(
      DIUtils.isMatch('sbc')
    ).toEqual(true)
    expect(
      DIUtils.isMatch([], [])
    ).toEqual(true)
    expect(
      DIUtils.isMatch({}, {})
    ).toEqual(true)
    expect(
      DIUtils.isMatch({ a: 22 })
    ).toEqual(true)
    expect(
      DIUtils.isMatch([11, 22], [11])
    ).toEqual(true)
    expect(
      DIUtils.isMatch([22, 11], [11])
    ).toEqual(false)
    expect(
      DIUtils.isMatch([11], [33])
    ).toEqual(false)
    expect(
      DIUtils.isMatch([{ a: { bb: 33 } }], [{ a: { bb: 33 } }])
    ).toEqual(true)
    expect(
      DIUtils.isMatch({ aa: 11, bb: 22 }, { bb: 22 })
    ).toEqual(true)
    expect(
      DIUtils.isMatch({ aa: 11, bb: [1, 2, 3] }, { bb: [1, 2, 3] })
    ).toEqual(true)
  })

  test('isEqual()', () => {
    expect(
      DIUtils.isEqual(0)
    ).toEqual(false)
    expect(
      DIUtils.isEqual(false)
    ).toEqual(false)
    expect(
      DIUtils.isEqual(0, false)
    ).toEqual(false)
    expect(
      DIUtils.isEqual(undefined, false)
    ).toEqual(false)
    expect(
      DIUtils.isEqual(undefined, null)
    ).toEqual(false)
    expect(
      DIUtils.isEqual(null, false)
    ).toEqual(false)
    expect(
      DIUtils.isEqual(0, undefined)
    ).toEqual(false)
    expect(
      DIUtils.isEqual(undefined, 0)
    ).toEqual(false)
    expect(
      DIUtils.isEqual(false, 0)
    ).toEqual(false)
    expect(
      DIUtils.isEqual(/0/, 0)
    ).toEqual(false)
    expect(
      DIUtils.isEqual(true, 1)
    ).toEqual(false)
    expect(
      DIUtils.isEqual(false, true)
    ).toEqual(false)
    expect(
      DIUtils.isEqual({}, function () {})
    ).toEqual(false)
    expect(
      DIUtils.isEqual({}, [])
    ).toEqual(false)
    expect(
      DIUtils.isEqual({ 0: 1 }, [1])
    ).toEqual(false)
    expect(
      DIUtils.isEqual([undefined], [null])
    ).toEqual(false)
    expect(
      DIUtils.isEqual([11, 22], [22, 11])
    ).toEqual(false)
    expect(
      DIUtils.isEqual({ name: 'test1', list: [11, 33, { a: /\D/ }] }, { name: 'test1', list: [11, 33, { a: /\d/ }] })
    ).toEqual(false)
    expect(
      DIUtils.isEqual([11, 22, 33], [11, 22, 33])
    ).toEqual(true)
    expect(
      DIUtils.isEqual([11, '22', /\d/, false], [11, '22', new RegExp('\\d'), false])
    ).toEqual(true)
    expect(
      DIUtils.isEqual({ name: 'test1' }, { name: 'test1' })
    ).toEqual(true)
    expect(
      DIUtils.isEqual({ name: 'test1', list: [11, /\d/] }, { name: 'test1', list: [11, /\d/] })
    ).toEqual(true)
    expect(
      DIUtils.isEqual([{ a: 1, b: [{ aa: false }, { bb: new Date(2018, 1, 1) }] }, { c: /\D/, d: null }], [{ a: 1, b: [{ aa: false }, { bb: new Date(2018, 1, 1) }] }, { c: /\D/, d: null }])
    ).toEqual(true)
  })

  test('isEqualWith()', () => {
    expect(
      DIUtils.isEqualWith(0)
    ).toEqual(false)
    expect(
      DIUtils.isEqualWith(false)
    ).toEqual(false)
    expect(
      DIUtils.isEqualWith(0, false)
    ).toEqual(false)
    expect(
      DIUtils.isEqualWith(undefined, false)
    ).toEqual(false)
    expect(
      DIUtils.isEqualWith(undefined, null)
    ).toEqual(false)
    expect(
      DIUtils.isEqualWith(null, false)
    ).toEqual(false)
    expect(
      DIUtils.isEqualWith(0, undefined)
    ).toEqual(false)
    expect(
      DIUtils.isEqualWith(undefined, 0)
    ).toEqual(false)
    expect(
      DIUtils.isEqualWith(false, 0)
    ).toEqual(false)
    expect(
      DIUtils.isEqualWith(/0/, 0)
    ).toEqual(false)
    expect(
      DIUtils.isEqualWith(true, 1)
    ).toEqual(false)
    expect(
      DIUtils.isEqualWith(false, true)
    ).toEqual(false)
    expect(
      DIUtils.isEqualWith({}, function () {})
    ).toEqual(false)
    expect(
      DIUtils.isEqualWith({}, [])
    ).toEqual(false)
    expect(
      DIUtils.isEqualWith({ 0: 1 }, [1])
    ).toEqual(false)
    expect(
      DIUtils.isEqualWith([undefined], [null])
    ).toEqual(false)
    expect(
      DIUtils.isEqualWith([11, 22], [22, 11])
    ).toEqual(false)
    expect(
      DIUtils.isEqualWith([11, 22], [22, 11], (v1, v2) => true)
    ).toEqual(true)
    expect(
      DIUtils.isEqualWith({ name: 'test1', list: [11, 33, { a: /\D/ }] }, { name: 'test1', list: [11, 33, { a: /\d/ }] })
    ).toEqual(false)
    expect(
      DIUtils.isEqualWith([11, 22, 33], [11, 22, 33])
    ).toEqual(true)
    expect(
      DIUtils.isEqualWith([11, 22, 33], [11, 22, 33], (v1, v2) => false)
    ).toEqual(false)
    expect(
      DIUtils.isEqualWith([11, '22', /\d/, false], [11, '22', new RegExp('\\d'), false])
    ).toEqual(true)
    expect(
      DIUtils.isEqualWith({ name: 'test1' }, { name: 'test1' })
    ).toEqual(true)
    expect(
      DIUtils.isEqualWith({ name: 'test1', list: [11, /\d/] }, { name: 'test1', list: [11, /\d/] })
    ).toEqual(true)
    expect(
      DIUtils.isEqualWith([{ a: 1, b: [{ aa: false }, { bb: new Date(2018, 1, 1) }] }, { c: /\D/, d: null }], [{ a: 1, b: [{ aa: false }, { bb: new Date(2018, 1, 1) }] }, { c: /\D/, d: null }])
    ).toEqual(true)
  })

  test('property()', () => {
    let getName = DIUtils.property('name')
    expect(
      getName({ name: 'test11', age: 25, height: 176 })
    ).toEqual('test11')
    expect(
      getName({ age: 25, height: 176 })
    ).toEqual(undefined)
  })

  test('getType()', () => {
    expect(
      DIUtils.getType()
    ).toEqual('undefined')
    expect(
      DIUtils.getType(undefined)
    ).toEqual('undefined')
    expect(
      DIUtils.getType(null)
    ).toEqual('null')
    expect(
      DIUtils.getType('')
    ).toEqual('string')
    expect(
      DIUtils.getType('1')
    ).toEqual('string')
    expect(
      DIUtils.getType(1)
    ).toEqual('number')
    expect(
      DIUtils.getType(1547895990810)
    ).toEqual('number')
    expect(
      DIUtils.getType(new Date())
    ).toEqual('date')
    expect(
      DIUtils.getType([])
    ).toEqual('array')
    expect(
      DIUtils.getType([{}])
    ).toEqual('array')
    expect(
      DIUtils.getType(/\d/)
    ).toEqual('regexp')
    expect(
      DIUtils.getType(new RegExp('-'))
    ).toEqual('regexp')
    expect(
      DIUtils.getType({})
    ).toEqual('object')
    expect(
      DIUtils.getType(false)
    ).toEqual('boolean')
    expect(
      DIUtils.getType(true)
    ).toEqual('boolean')
    expect(
      DIUtils.getType(new Error())
    ).toEqual('error')
    expect(
      DIUtils.getType(new TypeError())
    ).toEqual('error')
    expect(
      DIUtils.getType(function () {})
    ).toEqual('function')
    let method = function () {
      expect(
        DIUtils.getType(arguments)
      ).toEqual('object')
    }
    method(11, 22)
    if (typeof Symbol !== 'undefined') {
      expect(
        DIUtils.getType(Symbol('name'))
      ).toEqual('symbol')
    }
  })

  test('uniqueId()', () => {
    expect(
      DIUtils.uniqueId(undefined)
    ).toEqual('1')
    expect(
      DIUtils.uniqueId(null)
    ).toEqual('2')
    expect(
      DIUtils.uniqueId()
    ).toEqual('3')
    expect(
      DIUtils.uniqueId()
    ).toEqual('4')
    expect(
      DIUtils.uniqueId(0)
    ).toEqual('05')
    expect(
      DIUtils.uniqueId(-1)
    ).toEqual('-16')
    expect(
      DIUtils.uniqueId('prefix_')
    ).toEqual('prefix_7')
  })

  test('getSize()', () => {
    expect(
      DIUtils.getSize()
    ).toEqual(0)
    expect(
      DIUtils.getSize(null)
    ).toEqual(0)
    expect(
      DIUtils.getSize(undefined)
    ).toEqual(0)
    expect(
      DIUtils.getSize('')
    ).toEqual(0)
    expect(
      DIUtils.getSize(false)
    ).toEqual(0)
    expect(
      DIUtils.getSize(-1)
    ).toEqual(0)
    expect(
      DIUtils.getSize(10)
    ).toEqual(0)
    expect(
      DIUtils.getSize(function () {})
    ).toEqual(0)
    expect(
      DIUtils.getSize('123')
    ).toEqual(3)
    expect(
      DIUtils.getSize([1, 3])
    ).toEqual(2)
    expect(
      DIUtils.getSize([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }])
    ).toEqual(4)
    expect(
      DIUtils.getSize({ a: 2, b: 5 })
    ).toEqual(2)
  })

  test('indexOf()', () => {
    expect(
      DIUtils.indexOf()
    ).toEqual(-1)
    expect(
      DIUtils.indexOf(null)
    ).toEqual(-1)
    expect(
      DIUtils.indexOf(undefined)
    ).toEqual(-1)
    expect(
      DIUtils.indexOf([])
    ).toEqual(-1)
    expect(
      DIUtils.indexOf({})
    ).toEqual(-1)
    expect(
      DIUtils.indexOf(function () {})
    ).toEqual(-1)
    expect(
      DIUtils.indexOf([11, 22, 33, 22])
    ).toEqual(-1)
    expect(
      DIUtils.indexOf([11, 22, 33, 22], 55)
    ).toEqual(-1)
    expect(
      DIUtils.indexOf({ a: 1, b: 3 })
    ).toEqual(-1)
    expect(
      DIUtils.indexOf({ a: 1, b: 3 }, 5)
    ).toEqual(-1)
    expect(
      DIUtils.indexOf({ a: 1, b: 3 }, 1)
    ).toEqual('a')
    expect(
      DIUtils.indexOf({ a: 1, b: 3 }, 3)
    ).toEqual('b')
    expect(
      DIUtils.indexOf([11, 22, 33, 22], 22)
    ).toEqual(1)
    expect(
      DIUtils.indexOf([11, 22, 33, 22], 33)
    ).toEqual(2)
  })

  test('arrayIndexOf()', () => {
    expect(
      DIUtils.arrayIndexOf([11, 22, 33, 22])
    ).toEqual(-1)
    expect(
      DIUtils.arrayIndexOf([11, 22, 33, 22], 55)
    ).toEqual(-1)
    expect(
      DIUtils.arrayIndexOf([11, 22, 33, 22], 22)
    ).toEqual(1)
    expect(
      DIUtils.arrayIndexOf([11, 22, 33, 22], 33)
    ).toEqual(2)
  })

  test('lastIndexOf()', () => {
    expect(
      DIUtils.lastIndexOf([11, 22, 33, 22])
    ).toEqual(-1)
    expect(
      DIUtils.lastIndexOf([11, 22, 33, 22], 55)
    ).toEqual(-1)
    expect(
      DIUtils.lastIndexOf({ a: 1, b: 3 })
    ).toEqual(-1)
    expect(
      DIUtils.lastIndexOf({ a: 1, b: 3 }, 5)
    ).toEqual(-1)
    expect(
      DIUtils.lastIndexOf({ a: 1, b: 3 }, 1)
    ).toEqual('a')
    expect(
      DIUtils.lastIndexOf({ a: 1, b: 3 }, 3)
    ).toEqual('b')
    expect(
      DIUtils.lastIndexOf([11, 22, 33, 22], 22)
    ).toEqual(3)
    expect(
      DIUtils.lastIndexOf([11, 22, 33, 22], 33)
    ).toEqual(2)
  })

  test('arrayLastIndexOf()', () => {
    expect(
      DIUtils.arrayLastIndexOf([11, 22, 33, 22])
    ).toEqual(-1)
    expect(
      DIUtils.arrayLastIndexOf([11, 22, 33, 22], 55)
    ).toEqual(-1)
    expect(
      DIUtils.arrayLastIndexOf([11, 22, 33, 22], 22)
    ).toEqual(3)
    expect(
      DIUtils.arrayLastIndexOf([11, 22, 33, 22], 33)
    ).toEqual(2)
  })

  test('findIndexOf()', () => {
    expect(
      DIUtils.findIndexOf([11, 22, 33, 22], item => item === 55)
    ).toEqual(-1)
    expect(
      DIUtils.findIndexOf({ a: 11, b: 22, c: 33 }, item => item === 55)
    ).toEqual(-1)
    expect(
      DIUtils.findIndexOf({ a: 11, b: 22, c: 33 }, item => item === 22)
    ).toEqual('b')
    expect(
      DIUtils.findIndexOf([11, 22, 33, 22], item => item === 22)
    ).toEqual(1)
  })

  test('findLastIndexOf()', () => {
    expect(
      DIUtils.findLastIndexOf([11, 22, 33, 22], item => item === 55)
    ).toEqual(-1)
    expect(
      DIUtils.findLastIndexOf({ a: 11, b: 22, c: 33 }, item => item === 55)
    ).toEqual(-1)
    expect(
      DIUtils.findLastIndexOf({ a: 11, b: 22, c: 33 }, item => item === 22)
    ).toEqual('b')
    expect(
      DIUtils.findLastIndexOf([11, 22, 33, 22], item => item === 22)
    ).toEqual(3)
  })

  test('includes()', () => {
    expect(
      DIUtils.includes()
    ).toEqual(false)
    expect(
      DIUtils.includes(null)
    ).toEqual(false)
    expect(
      DIUtils.includes(undefined)
    ).toEqual(false)
    expect(
      DIUtils.includes(0)
    ).toEqual(false)
    expect(
      DIUtils.includes(-1)
    ).toEqual(false)
    expect(
      DIUtils.includes([11])
    ).toEqual(false)
    expect(
      DIUtils.includes({})
    ).toEqual(false)
    expect(
      DIUtils.includes([], 22)
    ).toEqual(false)
    expect(
      DIUtils.includes({}, 22)
    ).toEqual(false)
    expect(
      DIUtils.includes([11], 22)
    ).toEqual(false)
    expect(
      DIUtils.includes({ a: 11, b: 22 }, 22)
    ).toEqual(true)
    expect(
      DIUtils.includes([11, 22], 22)
    ).toEqual(true)
  })

  test('toStringJSON()', () => {
    expect(
      DIUtils.toStringJSON()
    ).toEqual({})
    expect(
      DIUtils.toStringJSON(0)
    ).toEqual({})
    expect(
      DIUtils.toStringJSON(-1)
    ).toEqual({})
    expect(
      DIUtils.toStringJSON(null)
    ).toEqual({})
    expect(
      DIUtils.toStringJSON(undefined)
    ).toEqual({})
    expect(
      DIUtils.toStringJSON('')
    ).toEqual({})
    expect(
      DIUtils.toStringJSON('{"a":1}')
    ).toEqual({ a: 1 })
    expect(
      DIUtils.toStringJSON('[11,22]')
    ).toEqual([11, 22])
  })

  test('toJSONString()', () => {
    expect(
      DIUtils.toJSONString()
    ).toEqual('')
    expect(
      DIUtils.toJSONString(null)
    ).toEqual('')
    expect(
      DIUtils.toJSONString(undefined)
    ).toEqual('')
    expect(
      DIUtils.toJSONString('')
    ).toEqual('""')
    expect(
      DIUtils.toJSONString(-1)
    ).toEqual('-1')
    expect(
      DIUtils.toJSONString(0)
    ).toEqual('0')
    expect(
      DIUtils.toJSONString([])
    ).toEqual('[]')
    expect(
      DIUtils.toJSONString({})
    ).toEqual('{}')
    expect(
      DIUtils.toJSONString({ a: 1 })
    ).toEqual('{"a":1}')
    expect(
      DIUtils.toJSONString([11, 22])
    ).toEqual('[11,22]')
  })

  test('keys()', () => {
    expect(
      DIUtils.keys()
    ).toEqual([])
    expect(
      DIUtils.keys('')
    ).toEqual([])
    expect(
      DIUtils.keys([])
    ).toEqual([])
    expect(
      DIUtils.keys(false)
    ).toEqual([])
    expect(
      DIUtils.keys({})
    ).toEqual([])
    expect(
      DIUtils.keys(-1)
    ).toEqual([])
    expect(
      DIUtils.keys(123)
    ).toEqual([])
    expect(
      DIUtils.keys({ a: 11, b: 22 })
    ).toEqual(['a', 'b'])
    expect(
      DIUtils.keys([{ a: 11 }, { a: 22 }, { a: 33 }])
    ).toEqual(['0', '1', '2'])
    expect(
      DIUtils.keys([11, 22])
    ).toEqual(['0', '1'])
    expect(
      DIUtils.keys('123')
    ).toEqual(['0', '1', '2'])
  })

  test('values()', () => {
    expect(
      DIUtils.values()
    ).toEqual([])
    expect(
      DIUtils.values('')
    ).toEqual([])
    expect(
      DIUtils.values(false)
    ).toEqual([])
    expect(
      DIUtils.values({})
    ).toEqual([])
    expect(
      DIUtils.values(-1)
    ).toEqual([])
    expect(
      DIUtils.values(123)
    ).toEqual([])
    expect(
      DIUtils.values({ a: 11, b: 22 })
    ).toEqual([11, 22])
    expect(
      DIUtils.values([{ a: 11 }, { a: 22 }, { a: 33 }])
    ).toEqual([{ a: 11 }, { a: 22 }, { a: 33 }])
    expect(
      DIUtils.values([11, 22])
    ).toEqual([11, 22])
    expect(
      DIUtils.values('123')
    ).toEqual(['1', '2', '3'])
  })

  test('entries()', () => {
    expect(
      DIUtils.entries()
    ).toEqual([])
    expect(
      DIUtils.entries(null)
    ).toEqual([])
    expect(
      DIUtils.entries(undefined)
    ).toEqual([])
    expect(
      DIUtils.entries('')
    ).toEqual([])
    expect(
      DIUtils.entries(false)
    ).toEqual([])
    expect(
      DIUtils.entries({})
    ).toEqual([])
    expect(
      DIUtils.entries(-1)
    ).toEqual([])
    expect(
      DIUtils.entries(123)
    ).toEqual([])
    expect(
      DIUtils.entries({ a: 11, b: 22 })
    ).toEqual([['a', 11], ['b', 22]])
    expect(
      DIUtils.entries([11, 22])
    ).toEqual([['0', 11], ['1', 22]])
    expect(
      DIUtils.entries('123')
    ).toEqual([['0', '1'], ['1', '2'], ['2', '3']])
  })

  test('pick()', () => {
    expect(
      DIUtils.pick({ name: 'test11', age: 25, height: 176 }, 'name')
    ).toEqual({ name: 'test11' })
    expect(
      DIUtils.pick({ name: 'test11', age: 25, height: 176 }, ['age'])
    ).toEqual({ age: 25 })
    expect(
      DIUtils.pick({ name: 'test11', age: 25, height: 176 }, val => DIUtils.isNumber(val))
    ).toEqual({ age: 25, height: 176 })
  })

  test('omit()', () => {
    expect(
      DIUtils.omit({ name: 'test11', age: 25, height: 176 }, 'name', 'height')
    ).toEqual({ age: 25 })
    expect(
      DIUtils.omit({ name: 'test11', age: 25, height: 176 }, ['name', 'age'])
    ).toEqual({ height: 176 })
    expect(
      DIUtils.omit({ name: 'test11', age: 25, height: 176 }, val => DIUtils.isNumber(val))
    ).toEqual({ name: 'test11' })
  })

  test('first()', () => {
    expect(
      DIUtils.first()
    ).toEqual(undefined)
    expect(
      DIUtils.first(undefined)
    ).toEqual(undefined)
    expect(
      DIUtils.first(null)
    ).toEqual(undefined)
    expect(
      DIUtils.first(123)
    ).toEqual(undefined)
    expect(
      DIUtils.first(true)
    ).toEqual(undefined)
    expect(
      DIUtils.first({})
    ).toEqual(undefined)
    expect(
      DIUtils.first([])
    ).toEqual(undefined)
    expect(
      DIUtils.first('123')
    ).toEqual('1')
    expect(
      DIUtils.first({ a: 11, b: 22 })
    ).toEqual(11)
    expect(
      DIUtils.first([11, 22])
    ).toEqual(11)
  })

  test('last()', () => {
    expect(
      DIUtils.last()
    ).toEqual(undefined)
    expect(
      DIUtils.last(undefined)
    ).toEqual(undefined)
    expect(
      DIUtils.last(null)
    ).toEqual(undefined)
    expect(
      DIUtils.last(123)
    ).toEqual(undefined)
    expect(
      DIUtils.last(true)
    ).toEqual(undefined)
    expect(
      DIUtils.last({})
    ).toEqual(undefined)
    expect(
      DIUtils.last([])
    ).toEqual(undefined)
    expect(
      DIUtils.last('123')
    ).toEqual('3')
    expect(
      DIUtils.last({ a: 11, b: 22 })
    ).toEqual(22)
    expect(
      DIUtils.last([11, 22])
    ).toEqual(22)
  })

  test('each()', () => {
    let rest = []
    DIUtils.each([11, 22, 33], (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([[11, 0], [22, 1], [33, 2]])
    rest = []
    DIUtils.each({ a: 11, b: 22, c: 33 }, (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([[11, 'a'], [22, 'b'], [33, 'c']])
    rest = []
    DIUtils.each('12345', (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([['1', '0'], ['2', '1'], ['3', '2'], ['4', '3'], ['5', '4']])
  })

  test('lastEach()', () => {
    let rest = []
    DIUtils.lastEach([11, 22, 33], (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([[33, 2], [22, 1], [11, 0]])
    rest = []
    DIUtils.lastEach({ a: 11, b: 22, c: 33 }, (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([[33, 'c'], [22, 'b'], [11, 'a']])
    rest = []
    DIUtils.lastEach('12345', (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([['5', '4'], ['4', '3'], ['3', '2'], ['2', '1'], ['1', '0']])
  })

  test('has()', () => {
    expect(
      DIUtils.has()
    ).toEqual(false)
    expect(
      DIUtils.has('123')
    ).toEqual(false)
    expect(
      DIUtils.has(null)
    ).toEqual(false)
    expect(
      DIUtils.has(undefined)
    ).toEqual(false)
    expect(
      DIUtils.has(-1)
    ).toEqual(false)
    expect(
      DIUtils.has(0)
    ).toEqual(false)
    expect(
      DIUtils.has({})
    ).toEqual(false)
    expect(
      DIUtils.has([])
    ).toEqual(false)
    expect(
      DIUtils.has(/\d/)
    ).toEqual(false)
    expect(
      DIUtils.has(function () {})
    ).toEqual(false)
    expect(
      DIUtils.has({ a: { b: 11, c: 22, d: [33, 44] } })
    ).toEqual(false)
    expect(
      DIUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, null)
    ).toEqual(false)
    expect(
      DIUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, undefined)
    ).toEqual(false)
    expect(
      DIUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, '')
    ).toEqual(false)
    expect(
      DIUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, [])
    ).toEqual(false)
    expect(
      DIUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d[3]')
    ).toEqual(false)
    expect(
      DIUtils.has({ aa: undefined }, 'aa.bb.cc')
    ).toEqual(false)
    expect(
      DIUtils.has({ aa: null }, 'aa.bb.cc')
    ).toEqual(false)
    expect(
      DIUtils.has({ aa: { bb: null, cc: 11 } }, 'aa.bb.cc')
    ).toEqual(false)
    expect(
      DIUtils.has([0, 1, null, undefined, -1, /\d/], 6)
    ).toEqual(false)
    expect(
      DIUtils.has({ aa: { bb: null } }, 'aa.bb')
    ).toEqual(true)
    expect(
      DIUtils.has({ aa: { bb: { cc: undefined } } }, 'aa.bb.cc')
    ).toEqual(true)
    expect(
      DIUtils.has('abc', '[2]')
    ).toEqual(true)
    expect(
      DIUtils.has('abc', [0])
    ).toEqual(true)
    expect(
      DIUtils.has([11, 22, 33], 1)
    ).toEqual(true)
    expect(
      DIUtils.has([{ a: 11, b: 22 }, { a: 33, b: 44 }], 1)
    ).toEqual(true)
    expect(
      DIUtils.has([{ a: 11, b: 22 }, { a: 33, b: 44 }], '[1]')
    ).toEqual(true)
    expect(
      DIUtils.has([{ a: 11, b: 22 }, { a: 33, b: 44 }], '[1].b')
    ).toEqual(true)
    expect(
      DIUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, 'a')
    ).toEqual(true)
    expect(
      DIUtils.has({ a: { b: 0, c: 22, d: [33, 44] } }, 'a.b')
    ).toEqual(true)
    expect(
      DIUtils.has({ a: { b: 11, c: 22, d: [33, 44] }, 'a.d': 333 }, 'a.d')
    ).toEqual(true)
    expect(
      DIUtils.has({ a: { c: 22, d: [33, 44] }, 'a.b': 333 }, 'a.b')
    ).toEqual(true)
    expect(
      DIUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d')
    ).toEqual(true)
    expect(
      DIUtils.has({ a: { b: 11, c: 22, d: [null] } }, 'a.d[0]')
    ).toEqual(true)
    expect(
      DIUtils.has({ a: { b: 11, c: 22, d: [33, { f: 66 }] } }, 'a.d[1].f')
    ).toEqual(true)
    expect(
      DIUtils.has({ a: { b: 11, c: 22, d: [33, 44, 55, undefined] } }, 'a.d[3]')
    ).toEqual(true)
    expect(
      DIUtils.has({ a: { b: 11, c: undefined, d: [33, 44] } }, ['a', 'c'])
    ).toEqual(true)
    expect(
      DIUtils.has({ a: { b: 11, c: 22, d: [33, 44], e: 0 } }, ['a', 'e'])
    ).toEqual(true)
    expect(
      DIUtils.has([0, 1, null, undefined, -1, /\d/], 0)
    ).toEqual(true)
    expect(
      DIUtils.has([0, 1, null, undefined, -1, /\d/], 1)
    ).toEqual(true)
    expect(
      DIUtils.has([0, 1, null, undefined, -1, /\d/], 2)
    ).toEqual(true)
    expect(
      DIUtils.has([0, 1, null, undefined, -1, /\d/], '3')
    ).toEqual(true)
    expect(
      DIUtils.has([0, 1, null, undefined, -1, /\d/], '4')
    ).toEqual(true)
    expect(
      DIUtils.has([0, 1, null, undefined, -1, /\d/], '5')
    ).toEqual(true)
    expect(
      DIUtils.has({ a: 1, b: { c: null, d: 33, cc: { f: undefined, e: 0 } } }, 'a')
    ).toEqual(true)
    expect(
      DIUtils.has({ a: 1, b: { c: null, d: 33, cc: { f: undefined, e: 0 } } }, 'b')
    ).toEqual(true)
    expect(
      DIUtils.has({ a: 1, b: { c: null, d: 33, cc: { f: undefined, e: 0 } } }, 'b.c')
    ).toEqual(true)
    expect(
      DIUtils.has({ a: 1, b: { c: null, cc: { f: undefined, e: 0 } } }, 'b.cc.f')
    ).toEqual(true)
    expect(
      DIUtils.has({ a: 1, b: { c: null, cc: { f: undefined, e: 0 } } }, 'b.cc.e')
    ).toEqual(true)
  })

  test('get()', () => {
    expect(
      DIUtils.get()
    ).toEqual(undefined)
    expect(
      DIUtils.get('123')
    ).toEqual(undefined)
    expect(
      DIUtils.get(null)
    ).toEqual(undefined)
    expect(
      DIUtils.get(undefined)
    ).toEqual(undefined)
    expect(
      DIUtils.get([])
    ).toEqual(undefined)
    expect(
      DIUtils.get({})
    ).toEqual(undefined)
    expect(
      DIUtils.get(-1)
    ).toEqual(undefined)
    expect(
      DIUtils.get(0)
    ).toEqual(undefined)
    expect(
      DIUtils.get(/\d/)
    ).toEqual(undefined)
    expect(
      DIUtils.get(function () {})
    ).toEqual(undefined)
    expect(
      DIUtils.get({ a: { b: 11, c: 22, d: [33, 44] } })
    ).toEqual(undefined)
    expect(
      DIUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, null)
    ).toEqual(undefined)
    expect(
      DIUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, undefined)
    ).toEqual(undefined)
    expect(
      DIUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, '')
    ).toEqual(undefined)
    expect(
      DIUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, [])
    ).toEqual(undefined)
    expect(
      DIUtils.get('abc', '[2]')
    ).toEqual('c')
    expect(
      DIUtils.get('abc', [0])
    ).toEqual('a')
    expect(
      DIUtils.get([11, 22, 33], 1)
    ).toEqual(22)
    expect(
      DIUtils.get([{ a: 11, b: 22 }, { a: 33, b: 44 }], 1)
    ).toEqual({ a: 33, b: 44 })
    expect(
      DIUtils.get([{ a: 11, b: 22 }, { a: 33, b: 44 }], '[1]')
    ).toEqual({ a: 33, b: 44 })
    expect(
      DIUtils.get([{ a: 11, b: 22 }, { a: 33, b: 44 }], '[1].b')
    ).toEqual(44)
    expect(
      DIUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a')
    ).toEqual({ b: 11, c: 22, d: [33, 44] })
    expect(
      DIUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.b')
    ).toEqual(11)
    expect(
      DIUtils.get({ a: { b: 11, c: 22, d: [33, 44] }, 'a.b': 333 }, 'a.b')
    ).toEqual(333)
    expect(
      DIUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d')
    ).toEqual([33, 44])
    expect(
      DIUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d[0]')
    ).toEqual(33)
    expect(
      DIUtils.get({ a: { b: 11, c: 22, d: [33, { f: 66 }] } }, 'a.d[1].f')
    ).toEqual(66)
    expect(
      DIUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d[3]', '111')
    ).toEqual('111')
    expect(
      DIUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, ['a', 'c'], '222')
    ).toEqual(22)
    expect(
      DIUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, ['a', 'e'], '333')
    ).toEqual('333')
    expect(
      DIUtils.get([0, 1, null, undefined, -1, /\d/], 0)
    ).toEqual(0)
    expect(
      DIUtils.get([0, 1, null, undefined, -1, /\d/], 1)
    ).toEqual(1)
    expect(
      DIUtils.get([0, 1, null, undefined, -1, /\d/], 2)
    ).toEqual(null)
    expect(
      DIUtils.get([0, 1, null, undefined, -1, /\d/], '3')
    ).toEqual(undefined)
    expect(
      DIUtils.get([0, 1, null, undefined, -1, /\d/], '4')
    ).toEqual(-1)
    expect(
      DIUtils.get([0, 1, null, undefined, -1, /\d/], '5')
    ).toEqual(/\d/)
    expect(
      DIUtils.get({ a: 1, b: { c: null, d: 33, cc: { f: undefined, e: 0 } } }, 'a')
    ).toEqual(1)
    expect(
      DIUtils.get({ a: 1, b: { c: null, d: 33, cc: { f: undefined, e: 0 } } }, 'b')
    ).toEqual({ c: null, d: 33, cc: { f: undefined, e: 0 } })
    expect(
      DIUtils.get({ a: 1, b: { c: null, d: 33, cc: { f: undefined, e: 0 } } }, 'b.c')
    ).toEqual(null)
    expect(
      DIUtils.get({ a: 1, b: { c: null, cc: { f: undefined, e: 0 } } }, 'b.cc.f')
    ).toEqual(undefined)
    expect(
      DIUtils.get({ a: 1, b: { c: null, cc: { f: undefined, e: 0 } } }, 'b.cc.e')
    ).toEqual(0)
  })

  test('set()', () => {
    expect(
      DIUtils.set(null)
    ).toEqual(null)
    expect(
      DIUtils.set(undefined)
    ).toEqual(undefined)
    expect(
      DIUtils.set('')
    ).toEqual('')
    expect(
      DIUtils.set(0)
    ).toEqual(0)
    expect(
      DIUtils.set(-1)
    ).toEqual(-1)
    expect(
      DIUtils.set({})
    ).toEqual({})
    expect(
      DIUtils.set([])
    ).toEqual([])
    expect(
      DIUtils.set({ a: 11 }, null)
    ).toEqual({ a: 11 })
    expect(
      DIUtils.set([11])
    ).toEqual([11], null)
    expect(
      DIUtils.set({}, 'a', 11)
    ).toEqual({ a: 11 })
    expect(
      DIUtils.sum(DIUtils.set({ b: 22 }, 'a', 11))
    ).toEqual(33)
    expect(
      DIUtils.set({}, 'a.b', 11)
    ).toEqual({ a: { b: 11 } })
    expect(
      DIUtils.set({}, 'a.d[0]', 33)
    ).toEqual({ a: { d: [33] } })
    expect(
      DIUtils.set({ a: {} }, 'a.d[0].f.h', 44)
    ).toEqual({ a: { d: [{ f: { h: 44 } }] } })
    expect(
      DIUtils.set({}, 'a.d[0].f.h[0]', 55)
    ).toEqual({ a: { d: [{ f: { h: [55] } }] } })
    expect(
      DIUtils.set({}, ['a'], 11)
    ).toEqual({ a: 11 })
    expect(
      DIUtils.sum(DIUtils.set({ c: 33 }, ['a'], 11))
    ).toEqual(44)
    expect(
      DIUtils.set({}, ['a', 'c'], 22)
    ).toEqual({ a: { c: 22 } })
    expect(
      DIUtils.set({}, ['a', 'd[0]', 'f', 'h'], 44)
    ).toEqual({ a: { d: [{ f: { h: 44 } }] } })
    expect(
      DIUtils.set({ a: {} }, ['a', 'd[0]', 'f', 'h[0]'], 55)
    ).toEqual({ a: { d: [{ f: { h: [55] } }] } })

    var obj1 = {}
    DIUtils.set(obj1, '__proto__.attr1', 1)
    expect(
      obj1.attr1 === 1
    ).toEqual(true)
    expect(
      ({}).attr1 !== 1
    ).toEqual(true)

    var obj2 = {}
    DIUtils.set(obj2, 'constructor', 1)
    expect(
      obj2.constructor !== 1
    ).toEqual(true)

    var FN3 = function FN3(){}
    var obj3 = new FN3()
    DIUtils.set(obj3, 'prototype.a3', 1)
    expect(
      obj3.a3 === 1
    ).toEqual(true)
    var obj4 = new FN3()
    expect(
      obj4.a3 !== 1
    ).toEqual(true)

  })

  test('groupBy()', () => {
    expect(
      DIUtils.groupBy()
    ).toEqual({})
    expect(
      DIUtils.groupBy(null)
    ).toEqual({})
    expect(
      DIUtils.groupBy(undefined)
    ).toEqual({})
    expect(
      DIUtils.groupBy({})
    ).toEqual({})
    expect(
      DIUtils.groupBy([])
    ).toEqual({})
    expect(
      DIUtils.groupBy(/\d/)
    ).toEqual({})
    expect(
      DIUtils.groupBy(0)
    ).toEqual({})
    expect(
      DIUtils.groupBy(-1)
    ).toEqual({})
    expect(
      DIUtils.groupBy(0, -1)
    ).toEqual({})
    expect(
      DIUtils.groupBy(-1, 'type')
    ).toEqual({})
    expect(
      DIUtils.groupBy([{ type: 'a' }, { type: 'b' }], 'type')
    ).toEqual({ a: [{ type: 'a' }], b: [{ type: 'b' }] })
    expect(
      DIUtils.groupBy([{ type: 'a' }, { type: 'a' }, { type: 'b' }], 'type')
    ).toEqual({ a: [{ type: 'a' }, { type: 'a' }], b: [{ type: 'b' }] })
  })

  test('countBy()', () => {
    expect(
      DIUtils.countBy()
    ).toEqual({})
    expect(
      DIUtils.countBy(null)
    ).toEqual({})
    expect(
      DIUtils.countBy(undefined)
    ).toEqual({})
    expect(
      DIUtils.countBy({})
    ).toEqual({})
    expect(
      DIUtils.countBy([])
    ).toEqual({})
    expect(
      DIUtils.countBy(/\d/)
    ).toEqual({})
    expect(
      DIUtils.countBy(0)
    ).toEqual({})
    expect(
      DIUtils.countBy(-1)
    ).toEqual({})
    expect(
      DIUtils.countBy(0, -1)
    ).toEqual({})
    expect(
      DIUtils.countBy(-1, 'type')
    ).toEqual({})
    expect(
      DIUtils.countBy([{ type: 'a' }, { type: 'b' }], 'type')
    ).toEqual({ a: 1, b: 1 })
    expect(
      DIUtils.countBy([{ type: 'a' }, { type: 'a' }, { type: 'b' }], 'type')
    ).toEqual({ a: 2, b: 1 })
  })

  test('clone()', () => {
    expect(
      DIUtils.clone()
    ).toEqual()
    expect(
      DIUtils.clone(null)
    ).toEqual(null)
    expect(
      DIUtils.clone(undefined)
    ).toEqual(undefined)
    expect(
      DIUtils.clone([])
    ).toEqual([])
    expect(
      DIUtils.clone({})
    ).toEqual({})
    expect(
      DIUtils.clone(0)
    ).toEqual(0)
    expect(
      DIUtils.clone(-1)
    ).toEqual(-1)
    expect(
      DIUtils.clone(/\n/)
    ).toEqual(/\n/)

    let v1 = { 
      num: 11,
      str: 'abc',
      obj: { b1: 22 },
      date: new Date(),
      re: /\d/,
      set: new Set([11, 22, 33]),
      map: new Map([['aa', 11], ['bb', 22], [33, 0]])
    }

    let v2 = DIUtils.clone(v1)
    expect(
      v1.num === v2.num
    ).toEqual(true)
    expect(
      v1.str === v2.str
    ).toEqual(true)
    expect(
      v1.obj === v2.obj
    ).toEqual(true)
    expect(
      v1.date === v2.date
    ).toEqual(true)
    expect(
      v1.re === v2.re
    ).toEqual(true)
    expect(
      v1.set === v2.set
    ).toEqual(true)
    expect(
      v1.map === v2.map
    ).toEqual(true)

    let v3 = DIUtils.clone(v1, true)
    expect(
      v1.num === v3.num
    ).toEqual(true)
    expect(
      v1.str === v3.str
    ).toEqual(true)
    expect(
      v1.obj === v3.obj
    ).toEqual(false)
    expect(
      v1.date === v3.date
    ).toEqual(false)
    expect(
      v1.re === v3.re
    ).toEqual(false)
    expect(
      v1.set === v3.set
    ).toEqual(false)
    expect(
      v1.map === v3.map
    ).toEqual(false)
  })

  test('clear()', () => {
    expect(
      DIUtils.clear()
    ).toEqual()
    expect(
      DIUtils.clear(null)
    ).toEqual(null)
    expect(
      DIUtils.clear(undefined)
    ).toEqual(undefined)
    expect(
      DIUtils.clear({})
    ).toEqual({})
    expect(
      DIUtils.clear([])
    ).toEqual([])
    expect(
      DIUtils.clear(/\d/)
    ).toEqual(/\d/)
    expect(
      DIUtils.clear(0)
    ).toEqual(0)
    expect(
      DIUtils.clear(-1)
    ).toEqual(-1)
    expect(
      DIUtils.clear([11, 22, 33, 33])
    ).toEqual([])
    expect(
      DIUtils.clear([11, 22, 33, 33], undefined)
    ).toEqual([undefined, undefined, undefined, undefined])
    expect(
      DIUtils.clear([11, 22, 33, 33], null)
    ).toEqual([null, null, null, null])
    expect(
      DIUtils.clear({ b1: 11, b2: 22 })
    ).toEqual({})
    expect(
      DIUtils.clear({ b1: 11, b2: 22 }, undefined)
    ).toEqual({ b1: undefined, b2: undefined })
    expect(
      DIUtils.clear({ b1: 11, b2: 22 }, null)
    ).toEqual({ b1: null, b2: null })
  })

  test('remove()', () => {
    let list = [11, 22, 33, 44]
    DIUtils.remove(list)
    expect(list).toEqual([])

    list = [11, 22, 33, 44]
    DIUtils.remove(list, 2)
    expect(list).toEqual([11, 22, 44])

    list = [11, 22, 33, 44]
    DIUtils.remove(list, '2')
    expect(list).toEqual([11, 22, 33, 44])

    list = [11, 22, 33, 44]
    DIUtils.remove(list, item => item === 22)
    expect(list).toEqual([11, 33, 44])

    let obj = { a: 11, b: 22, c: 33 }
    DIUtils.remove(obj)
    expect(obj).toEqual({})

    obj = { a: 11, b: 22, c: 33 }
    DIUtils.remove(obj, item => item === 22)
    expect(obj).toEqual({ a: 11, c: 33 })

    obj = { a: 11, b: 22, c: 33 }
    DIUtils.remove(obj, 'c')
    expect(obj).toEqual({ a: 11, b: 22 })

    obj = { a: 11, b: 22, c: 33, 2: 33 }
    DIUtils.remove(obj, 2)
    expect(obj).toEqual({ a: 11, b: 22, c: 33, 2: 33 })
  })

  test('range()', () => {
    expect(
      DIUtils.range()
    ).toEqual([])
    expect(
      DIUtils.range(null)
    ).toEqual([])
    expect(
      DIUtils.range(undefined)
    ).toEqual([])
    expect(
      DIUtils.range({})
    ).toEqual([])
    expect(
      DIUtils.range([])
    ).toEqual([])
    expect(
      DIUtils.range(/\d/)
    ).toEqual([])
    expect(
      DIUtils.range(-5)
    ).toEqual([])
    expect(
      DIUtils.range(0)
    ).toEqual([])
    expect(
      DIUtils.range(10)
    ).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(
      DIUtils.range(-5, 5)
    ).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4])
    expect(
      DIUtils.range(0, 10, 0)
    ).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(
      DIUtils.range(0, 10, 2)
    ).toEqual([0, 2, 4, 6, 8])
    expect(
      DIUtils.range(1, 50, 10)
    ).toEqual([1, 11, 21, 31, 41])
  })

  test('destructuring()', () => {
    expect(
      DIUtils.destructuring()
    ).toEqual(undefined)
    expect(
      DIUtils.destructuring(undefined)
    ).toEqual(undefined)
    expect(
      DIUtils.destructuring(null)
    ).toEqual(null)
    expect(
      DIUtils.destructuring({})
    ).toEqual({})
    expect(
      DIUtils.destructuring([])
    ).toEqual([])
    expect(
      DIUtils.destructuring(/\d/)
    ).toEqual(/\d/)
    expect(
      DIUtils.destructuring(true)
    ).toEqual(true)
    expect(
      DIUtils.destructuring(0)
    ).toEqual(0)
    expect(
      DIUtils.destructuring(-1)
    ).toEqual(-1)
    expect(
      DIUtils.destructuring(null, { a: 11, b: 22, c: 33 })
    ).toEqual(null)
    expect(
      DIUtils.destructuring({}, { a: 11, b: 22, c: 33 })
    ).toEqual({})
    expect(
      DIUtils.destructuring({ a: null }, { a: 11, b: 22, c: 33 })
    ).toEqual({ a: 11 })
    expect(
      DIUtils.destructuring({ a: 11, d: 44 }, { a: 11, b: 22, c: 33 })
    ).toEqual({ a: 11, d: 44 })
    expect(
      DIUtils.destructuring({ a: 11, c: 33, d: 44 }, { a: 11, b: 22, c: null, e: 55, f: 66 })
    ).toEqual({ a: 11, c: null, d: 44 })
  })
})

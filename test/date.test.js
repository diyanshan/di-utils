const DIUtils = require('../func')

describe('Date functions', () => {
  let date = new Date(2017, 0, 1, 14, 5, 30, 99)
  let time = date.getTime()
  test('now()', () => {
    expect(
      DIUtils.now() >= time
    ).toEqual(true)
  })

  test('timestamp()', () => {
    expect(
      DIUtils.timestamp(-1).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.timestamp(123456).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.timestamp('abc').toString()
    ).toEqual('NaN')
    expect(
      DIUtils.timestamp([]).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.timestamp({}).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.timestamp(/\d/).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.timestamp(function () {}).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.timestamp() >= time
    ).toEqual(true)
    expect(
      DIUtils.timestamp(time)
    ).toEqual(new Date(2017, 0, 1, 14, 5, 30, 99).getTime())
    expect(
      DIUtils.timestamp(date)
    ).toEqual(time)
    expect(
      DIUtils.timestamp('2018-12-01')
    ).toEqual(new Date(2018, 11, 1).getTime())
    expect(
      DIUtils.timestamp('2017/12/20 10:10:30.459', 'yyyy/MM/dd HH:mm:ss.SSS')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 459).getTime())
  })

  test('isDateSame()', () => {
    expect(
      DIUtils.isDateSame()
    ).toEqual(false)
    expect(
      DIUtils.isDateSame(undefined)
    ).toEqual(false)
    expect(
      DIUtils.isDateSame(-1, 0)
    ).toEqual(false)
    expect(
      DIUtils.isDateSame(-1, -1)
    ).toEqual(false)
    expect(
      DIUtils.isDateSame(0, 0)
    ).toEqual(false)
    expect(
      DIUtils.isDateSame(new Date(''))
    ).toEqual(false)
    expect(
      DIUtils.isDateSame(new Date('abc'), 0)
    ).toEqual(false)
    expect(
      DIUtils.isDateSame(null, new Date(''))
    ).toEqual(false)
    expect(
      DIUtils.isDateSame(0, new Date('abc'))
    ).toEqual(false)
    expect(
      DIUtils.isDateSame(new Date(''), new Date(''))
    ).toEqual(false)
    expect(
      DIUtils.isDateSame(new Date('abc'), new Date('abc'))
    ).toEqual(false)
    expect(
      DIUtils.isDateSame('2018-12-01', '2018-12-11')
    ).toEqual(false)
    expect(
      DIUtils.isDateSame('2017-04-01', new Date(2017, 0, 1), 'yyyy-MM')
    ).toEqual(false)
    expect(
      DIUtils.isDateSame(new Date(2018, 0, 1), new Date(2018, 10, 2), 'yyyy-MM')
    ).toEqual(false)
    expect(
      DIUtils.isDateSame('2018-12-01', '2018-12-01')
    ).toEqual(true)
    expect(
      DIUtils.isDateSame(time, '2018-12-01', 'yyyy')
    ).toEqual(false)
    expect(
      DIUtils.isDateSame(new Date(2017, 0, 1), '2017-01-01', 'yyyy')
    ).toEqual(true)
    expect(
      DIUtils.isDateSame('2017-04-01', new Date(2017, 0, 1), 'yyyy')
    ).toEqual(true)
    expect(
      DIUtils.isDateSame(new Date(2018, 0, 1), new Date(2018, 0, 1), 'yyyy')
    ).toEqual(true)
    expect(
      DIUtils.isDateSame(new Date(2018, 0, 1), new Date(2018, 10, 1), 'yyyy')
    ).toEqual(true)
    expect(
      DIUtils.isDateSame(date, DIUtils.toStringDate('01/01/2017', 'MM/dd/yyyy'), 'MM')
    ).toEqual(true)
    expect(
      DIUtils.isDateSame('2018-01-28', '2018-12-01', 'yyyy')
    ).toEqual(true)
    expect(
      DIUtils.isDateSame('2017-12-01', '2018-12-01', 'MM-dd')
    ).toEqual(true)
    expect(
      DIUtils.isDateSame(time, date, 'dd')
    ).toEqual(true)
    expect(
      DIUtils.isDateSame(time, date, 'yyyyMMdd')
    ).toEqual(true)
  })

  test('toStringDate()', () => {
    expect(
      DIUtils.toStringDate() instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.toStringDate(undefined) instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.toStringDate(null) instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.toStringDate('') instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.toStringDate(0) instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.toStringDate(/\d/) instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.toStringDate([]) instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.toStringDate({}) instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.toStringDate([2018, 1, 1]) instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.toStringDate({ time: 2018 }) instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.toStringDate('null') instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.toStringDate(function () {}) instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.toStringDate('2') instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.toStringDate('20') instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.toStringDate('201') instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.toStringDate('Year:2018 Month:01 Day:26') instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.toStringDate().toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toStringDate(undefined).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toStringDate(null).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toStringDate('').toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toStringDate(0).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toStringDate(/\d/).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toStringDate([]).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toStringDate({}).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toStringDate([2018, 1, 1]).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toStringDate({ time: 2018 }).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toStringDate('null').toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toStringDate(function () {}).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toStringDate('2').toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toStringDate('20').toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toStringDate('Year:2018 Month:01 Day:26').toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toStringDate('201')
    ).toEqual(new Date(201, 0, 1))
    expect(
      DIUtils.toStringDate('Year:2018 Month:01 Day:26', 'Year:yyyy [M]onth:MM Day:dd')
    ).toEqual(new Date(2018, 0, 26))
    expect(
      DIUtils.toStringDate('2020')
    ).toEqual(new Date(2020, 0, 1))
    expect(
      DIUtils.toStringDate('2020-02')
    ).toEqual(new Date(2020, 1, 1))
    expect(
      DIUtils.toStringDate('2020-3')
    ).toEqual(new Date(2020, 2, 1))
    expect(
      DIUtils.toStringDate('2020-02-02')
    ).toEqual(new Date(2020, 1, 2))
    expect(
      DIUtils.toStringDate(time)
    ).toEqual(new Date(2017, 0, 1, 14, 5, 30, 99))
    expect(
      DIUtils.toStringDate('' + time)
    ).toEqual(new Date(2017, 0, 1, 14, 5, 30, 99))
    expect(
      DIUtils.toStringDate(date)
    ).toEqual(new Date(2017, 0, 1, 14, 5, 30, 99))
    expect(
      DIUtils.toStringDate('2017-12-20')
    ).toEqual(new Date(2017, 11, 20))
    expect(
      DIUtils.toStringDate('2017-5-2')
    ).toEqual(new Date(2017, 4, 2))
    expect(
      DIUtils.toStringDate('20|2018/12', 'dd|yyyy/MM')
    ).toEqual(new Date(2018, 11, 20))
    expect(
      DIUtils.toStringDate('20|2018/12', 'd|yyyy/M')
    ).toEqual(new Date(2018, 11, 20))
    expect(
      DIUtils.toStringDate('2018/12', 'yyyy/MM')
    ).toEqual(new Date(2018, 11))
    expect(
      DIUtils.toStringDate('2017-12-20 10:10:30')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30))
    expect(
      DIUtils.toStringDate('2017-8-2 9:1:3')
    ).toEqual(new Date(2017, 7, 2, 9, 1, 3))
    expect(
      DIUtils.toStringDate('2017-12-20 10:10:30.9')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 900))
    expect(
      DIUtils.toStringDate('2017-12-20 10:10:30.99')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 990))
    expect(
      DIUtils.toStringDate('2017-12-20 10:10:30.999')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 999))
    expect(
      DIUtils.toStringDate('2017-12-20T10:10:30.4+0800')
    ).toEqual(new Date('2017-12-20T10:10:30.400+08:00'))
    expect(
      DIUtils.toStringDate('2017-12-20T10:10:30.42+0800')
    ).toEqual(new Date('2017-12-20T10:10:30.420+08:00'))
    expect(
      DIUtils.toStringDate('2017-12-20T10:10:30.423+0800')
    ).toEqual(new Date('2017-12-20T10:10:30.423+08:00'))
    expect(
      DIUtils.toStringDate('2017-12-20T10:10:30.423+08:00')
    ).toEqual(new Date('2017-12-20T10:10:30.423+08:00'))
    expect(
      DIUtils.toStringDate('2017-12-20T10:10:30.423+00:00')
    ).toEqual(new Date('2017-12-20T10:10:30.423+00:00'))
    expect(
      DIUtils.toStringDate('2017-12-20T10:10:30.423+10:00')
    ).toEqual(new Date('2017-12-20T10:10:30.423+10:00'))
    expect(
      DIUtils.toStringDate('2017-12-20T10:10:30.42+10:00')
    ).toEqual(new Date('2017-12-20T10:10:30.420+10:00'))
    expect(
      DIUtils.toStringDate('2017-12-20T10:10:30.42+10:00')
    ).toEqual(new Date('2017-12-20T10:10:30.420+10:00'))
    expect(
      DIUtils.toStringDate('2017-12-2T10:2:30.42+10:00')
    ).toEqual(new Date('2017-12-02T10:02:30.420+10:00'))
    expect(
      DIUtils.toStringDate('2017-12-20T10:10:30.4Z')
    ).toEqual(new Date('2017-12-20T10:10:30.4Z'))
    expect(
      DIUtils.toStringDate('2017/12/20 10:10:30.4Z')
    ).toEqual(new Date('2017-12-20T10:10:30.400Z'))
    expect(
      DIUtils.toStringDate('2017-12-20T10:10:30.43Z')
    ).toEqual(new Date('2017-12-20T10:10:30.43Z'))
    expect(
      DIUtils.toStringDate('2017-12-20T10:10:30.43Z')
    ).toEqual(new Date('2017-12-20T10:10:30.430Z'))
    expect(
      DIUtils.toStringDate('2017/12/20T10:10:30.423Z')
    ).toEqual(new Date('2017-12-20T10:10:30.423Z'))
    expect(
      DIUtils.toStringDate('2017/1/3T10:10:30.423Z')
    ).toEqual(new Date('2017-01-03T10:10:30.423Z'))
    expect(
      DIUtils.toStringDate('2018/1/2T2:9:8.423Z')
    ).toEqual(new Date('2018-01-02T02:09:08.423Z'))
    expect(
      DIUtils.toStringDate('2018/1/2T2:9:8.4Z')
    ).toEqual(new Date('2018-01-02T02:09:08.400Z'))
    expect(
      DIUtils.toStringDate(1513735830000)
    ).toEqual(new Date(1513735830000))
    expect(
      DIUtils.toStringDate(20171220101030)
    ).toEqual(new Date(20171220101030))
    expect(
      DIUtils.toStringDate('1513735830000')
    ).toEqual(new Date(1513735830000))
    expect(
      DIUtils.toStringDate('20171220101030')
    ).toEqual(new Date(20171220101030))
    expect(
      DIUtils.toStringDate('12/20/2017', 'MM/dd/yyyy')
    ).toEqual(new Date(2017, 11, 20))
    expect(
      DIUtils.toStringDate('12/20/2017', 'M/d/yyyy')
    ).toEqual(new Date(2017, 11, 20))
    expect(
      DIUtils.toStringDate('20171220101030', 'yyyyMMddHHmmss')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30))
    expect(
      DIUtils.toStringDate('2017/12/20 10:10:30', 'yyyy/MM/dd HH:mm:ss')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30))
    expect(
      DIUtils.toStringDate('2017/12/20 10:10:30', 'yyyy/M/d H:m:s')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30))
    expect(
      DIUtils.toStringDate('12/20/2017 10:10:30.100', 'MM/dd/yyyy HH:mm:ss.SSS')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 100))
    expect(
      DIUtils.toStringDate('12/20/2017 10:10:30.1', 'M/d/yyyy H:m:s.S')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 100))
    expect(
      DIUtils.toStringDate('12/20/2017 10:10:30.10', 'M/d/yyyy H:m:s.S')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 100))
    expect(
      DIUtils.toStringDate('12/20/2017 10:10:30.100', 'M/d/yyyy H:m:s.S')
    ).toEqual(new Date(2017, 11, 20, 10, 10, 30, 100))
    expect(
      DIUtils.toStringDate('yyyy:2017 MM:01 dd:20', '[yyyy]:yyyy [MM]:MM [dd]:dd')
    ).toEqual(new Date(2017, 0, 20))
    expect(
      DIUtils.toStringDate('yyyy:2017 MM:01 dd:20', '[yyyy]:yyyy [MM]:M [dd]:d')
    ).toEqual(new Date(2017, 0, 20))
    expect(
      DIUtils.toStringDate('oo MM:01 dd:20 yyyy:2017 oo', 'oo [MM]:M [dd]:d [yyyy]:yyyy oo')
    ).toEqual(new Date(2017, 0, 20))
  })

  test('toDateString()', () => {
    expect(
      DIUtils.toDateString()
    ).toEqual('')
    expect(
      DIUtils.toDateString(undefined)
    ).toEqual('')
    expect(
      DIUtils.toDateString(null)
    ).toEqual('')
    expect(
      DIUtils.toDateString('')
    ).toEqual('')
    expect(
      DIUtils.toDateString(0)
    ).toEqual('')
    expect(
      DIUtils.toDateString(123)
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toDateString(-1)
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toDateString(/\d/)
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toDateString({})
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toDateString([])
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toDateString(function () {})
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toDateString([2018, 1, 1])
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toDateString({ time: 2018 })
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toDateString('null')
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toDateString(new Date(''))
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toDateString(new Date('abc'))
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toDateString('Year:2018 Month:01 Day:26')
    ).toEqual('Invalid Date')
    expect(
      DIUtils.toDateString('2017')
    ).toEqual('2017-01-01 00:00:00')
    expect(
      DIUtils.toDateString('2017-01')
    ).toEqual('2017-01-01 00:00:00')
    expect(
      DIUtils.toDateString('2017-02')
    ).toEqual('2017-02-01 00:00:00')
    expect(
      DIUtils.toDateString('2017-02-03')
    ).toEqual('2017-02-03 00:00:00')
    expect(
      DIUtils.toDateString(time)
    ).toEqual('2017-01-01 14:05:30')
    expect(
      DIUtils.toDateString('' + time)
    ).toEqual('2017-01-01 14:05:30')
    expect(
      DIUtils.toDateString(date)
    ).toEqual('2017-01-01 14:05:30')
    expect(
      DIUtils.toDateString(time, 'MM/dd/yyyy')
    ).toEqual('01/01/2017')
    expect(
      DIUtils.toDateString('2017-01-01 10:05:30', 'M/d/yyyy')
    ).toEqual('1/1/2017')
    expect(
      DIUtils.toDateString(date, 'yyyyMMddHHmmssSSS')
    ).toEqual('20170101140530099')
    expect(
      DIUtils.toDateString(date, 'yyyy-MM-dd')
    ).toEqual('2017-01-01')
    expect(
      DIUtils.toDateString(date, 'yy-M-d')
    ).toEqual('17-1-1')
    expect(
      DIUtils.toDateString(date, 'yyyy-MM-dd 00:00:00')
    ).toEqual('2017-01-01 00:00:00')
    expect(
      DIUtils.toDateString(date, 'yyyy-MM-dd 00:00:00.000')
    ).toEqual('2017-01-01 00:00:00.000')
    expect(
      DIUtils.toDateString(date, 'yyyy-MM-dd 23:59:59.999')
    ).toEqual('2017-01-01 23:59:59.999')
    expect(
      DIUtils.toDateString(date, 'yyyy-MM-dd HH:mm:ss.SSS')
    ).toEqual('2017-01-01 14:05:30.099')
    expect(
      DIUtils.toDateString(date, 'yyyy-MM-dd hh:mm:ss.SSS')
    ).toEqual('2017-01-01 02:05:30.099')
    expect(
      DIUtils.toDateString(date, 'yyyy-MM-dd hh:mm:ss.SSS')
    ).toEqual('2017-01-01 02:05:30.099')
    expect(
      DIUtils.toDateString('2017-01-07 14:05:30', 'yyyy-M-d h:m:s.S E e')
    ).toEqual('2017-1-7 2:5:30.0 6 6')
    expect(
      DIUtils.toDateString(date, 'yyyy-M-d H:m:s.S')
    ).toEqual('2017-1-1 14:5:30.99')
    expect(
      DIUtils.toDateString(time + 86400000, 'yyyy-M-d h:m:s.S E e')
    ).toEqual('2017-1-2 2:5:30.99 1 1')
    expect(
      DIUtils.toDateString(time, 'yyyy年MM月dd日 HH时mm分ss秒S毫秒,星期E 第q季度')
    ).toEqual('2017年01月01日 14时05分30秒99毫秒,星期7 第1季度')
    expect(
      DIUtils.toDateString(time, 'yy年M月d日 HH时m分s秒S毫秒,星期E 第q季度 今年第D天 今年第W周')
    ).toEqual('17年1月1日 14时5分30秒99毫秒,星期7 第1季度 今年第1天 今年第52周')
    expect(
      DIUtils.toDateString(time, 'yyyy年MM月dd日 hh时mm分ss秒SSS毫秒 星期E e 第q季 今年第DDD天 今年第WW周 a A')
    ).toEqual('2017年01月01日 02时05分30秒099毫秒 星期7 0 第1季 今年第001天 今年第52周 pm PM')
    expect(
      DIUtils.toDateString(date, 'yyyy-MM-dd [yyyy-MM-dd] [yyyy]] [[MM]')
    ).toEqual('2017-01-01 yyyy-MM-dd yyyy] [MM')
    expect(
      DIUtils.toDateString(date, '[Week] yyyy-MM-dd [[yyyy-MM-dd]]')
    ).toEqual('Week 2017-01-01 [yyyy-MM-dd]')
  })

  test('getWhatYear()', () => {
    expect(
      DIUtils.getWhatYear() instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.getWhatYear(0) instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.getWhatYear(-1) instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.getWhatYear([]) instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.getWhatYear({}) instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.getWhatYear(null) instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.getWhatYear(undefined) instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.getWhatYear([2018, 1, 1]) instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.getWhatYear({ time: 2018 }) instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.getWhatYear('null') instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.getWhatYear(new Date('')) instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.getWhatYear(new Date('abc')) instanceof Date
    ).toEqual(true)
    expect(
      DIUtils.getWhatYear().toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatYear(0).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatYear(-1).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatYear([]).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatYear({}).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatYear(null).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatYear(undefined).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatYear([2018, 1, 1]).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatYear({ time: 2018 }).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatYear('null').toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatYear(new Date('')).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatYear(new Date('abc')).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatYear(date, -1)
    ).toEqual(new Date(2016, 0, 1, 14, 5, 30, 99))
    expect(
      DIUtils.getWhatYear(time, -1)
    ).toEqual(new Date(2016, 0, 1, 14, 5, 30, 99))
    expect(
      DIUtils.getWhatYear('2017-12-20', -1)
    ).toEqual(new Date(2016, 11, 20))
    expect(
      DIUtils.getWhatYear('2017-12-20', 1)
    ).toEqual(new Date(2018, 11, 20))
    expect(
      DIUtils.getWhatYear(new Date(2017, 11, 10), 1)
    ).toEqual(new Date(2018, 11, 10))
    expect(
      DIUtils.getWhatYear('2017-12-20', 0, 'first')
    ).toEqual(new Date(2017, 0, 1, 0, 0, 0, 0))
    expect(
      DIUtils.getWhatYear('2017-12-20', 0, 'last')
    ).toEqual(new Date(2017, 11, 31, 23, 59, 59, 999))
  })

  test('getWhatQuarter()', () => {
    expect(
      DIUtils.getWhatQuarter().toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatQuarter(0).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatQuarter(-1).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatQuarter({}).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatQuarter([]).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatQuarter(null).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatQuarter(undefined).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatQuarter([2018, 1, 1]).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatQuarter({ time: 2018 }).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatQuarter('null').toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatQuarter(new Date('')).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatQuarter(new Date('abc')).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatQuarter(date, -1)
    ).toEqual(new Date(2016, 9, 1, 14, 5, 30, 99))
    expect(
      DIUtils.getWhatQuarter(time, 1)
    ).toEqual(new Date(2017, 3, 1, 14, 5, 30, 99))
    expect(
      DIUtils.getWhatQuarter('2017-12-20', -1)
    ).toEqual(new Date(2017, 6, 20))
    expect(
      DIUtils.getWhatQuarter('2017-12-20', 1)
    ).toEqual(new Date(2018, 0, 20))
    expect(
      DIUtils.getWhatQuarter(new Date(2017, 11, 20), 1)
    ).toEqual(new Date(2018, 0, 20))
    expect(
      DIUtils.getWhatQuarter(new Date(2017, 11, 20), 3)
    ).toEqual(new Date(2018, 6, 20))
    expect(
      DIUtils.getWhatQuarter('2017-12-20', -1, 'first')
    ).toEqual(new Date(2017, 6, 1, 0, 0, 0, 0))
    expect(
      DIUtils.getWhatQuarter('2017-12-20', 1, 'last')
    ).toEqual(new Date(2018, 0, 31, 23, 59, 59, 999))
    expect(
      DIUtils.getWhatQuarter('2021-01-31', -1)
    ).toEqual(new Date(2020, 9, 31))
    expect(
      DIUtils.getWhatQuarter('2021-01-31', -3)
    ).toEqual(new Date(2020, 3, 30))
    expect(
      DIUtils.getWhatQuarter('2021-01-31', 1)
    ).toEqual(new Date(2021, 3, 30))
    expect(
      DIUtils.getWhatQuarter('2021-01-31', 1, 'last')
    ).toEqual(new Date(2021, 3, 30, 23, 59, 59, 999))
    expect(
      DIUtils.getWhatQuarter('2021-01-31', 6)
    ).toEqual(new Date(2022, 6, 31))
    expect(
      DIUtils.getWhatQuarter('2021-01-31', -6)
    ).toEqual(new Date(2019, 6, 31))
    expect(
      DIUtils.getWhatQuarter('2021-01-31', 12)
    ).toEqual(new Date(2024, 0, 31))
  })

  test('getWhatMonth()', () => {
    expect(
      DIUtils.getWhatMonth().toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatMonth(0).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatMonth(-1).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatMonth({}).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatMonth([]).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatMonth(null).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatMonth(undefined).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatMonth([2018, 1, 1]).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatMonth({ time: 2018 }).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatMonth('null').toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatMonth(new Date('')).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatMonth(new Date('abc')).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatMonth(date, -1)
    ).toEqual(new Date(2016, 11, 1, 14, 5, 30, 99))
    expect(
      DIUtils.getWhatMonth(time, 1)
    ).toEqual(new Date(2017, 1, 1, 14, 5, 30, 99))
    expect(
      DIUtils.getWhatMonth('2017-12-20', -1)
    ).toEqual(new Date(2017, 10, 20))
    expect(
      DIUtils.getWhatMonth('2017-12-20', 1)
    ).toEqual(new Date(2018, 0, 20))
    expect(
      DIUtils.getWhatMonth(new Date(2017, 11, 20), 1)
    ).toEqual(new Date(2018, 0, 20))
    expect(
      DIUtils.getWhatMonth('2017-12-20', -1, 'first')
    ).toEqual(new Date(2017, 10, 1, 0, 0, 0, 0))
    expect(
      DIUtils.getWhatMonth('2017-12-20', 1, 'last')
    ).toEqual(new Date(2018, 0, 31, 23, 59, 59, 999))
    expect(
      DIUtils.getWhatMonth('2021-01-31', -1)
    ).toEqual(new Date(2020, 11, 31))
    expect(
      DIUtils.getWhatMonth('2021-01-31', -2)
    ).toEqual(new Date(2020, 10, 30))
    expect(
      DIUtils.getWhatMonth('2021-01-31', 1)
    ).toEqual(new Date(2021, 1, 28))
    expect(
      DIUtils.getWhatMonth('2021-01-31', 1, 'last')
    ).toEqual(new Date(2021, 1, 28, 23, 59, 59, 999))
    expect(
      DIUtils.getWhatMonth('2021-01-31', 2)
    ).toEqual(new Date(2021, 2, 31))
    expect(
      DIUtils.getWhatMonth('2021-01-31', 12)
    ).toEqual(new Date(2022, 0, 31))
  })

  test('getWhatWeek()', () => {
    expect(
      DIUtils.getWhatWeek().toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatWeek(0).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatWeek(-1).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatWeek(null).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatWeek(undefined).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatWeek({}).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatWeek([]).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatWeek([2018, 1, 1]).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatWeek({ time: 2018 }).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatWeek('null').toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatWeek(new Date('')).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatWeek(new Date('abc')).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatWeek(date, -1)
    ).toEqual(new Date(2016, 11, 25, 14, 5, 30, 99))
    expect(
      DIUtils.getWhatWeek(time, 1)
    ).toEqual(new Date(2017, 0, 8, 14, 5, 30, 99))
    expect(
      DIUtils.getWhatWeek('2017-12-20', -1)
    ).toEqual(new Date(2017, 11, 13))
    expect(
      DIUtils.getWhatWeek(new Date(2017, 11, 20), -1)
    ).toEqual(new Date(2017, 11, 13))
    expect(
      DIUtils.getWhatWeek('2017-12-20', 1)
    ).toEqual(new Date(2017, 11, 27))
    expect(
      DIUtils.getWhatWeek('2017-12-20', -1, 5)
    ).toEqual(new Date(2017, 11, 15))
    expect(
      DIUtils.getWhatWeek('2017-12-20', 1, 0)
    ).toEqual(new Date(2017, 11, 31))
  })

  test('getWhatDay()', () => {
    expect(
      DIUtils.getWhatDay().toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatDay(0).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatDay(-1).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatDay(123).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatDay(null).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatDay(undefined).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatDay({}).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatDay([]).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatDay([2018, 1, 1]).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatDay({ time: 2018 }).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatDay('null').toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatDay(new Date('')).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatDay(new Date('abc')).toString()
    ).toEqual('Invalid Date')
    expect(
      DIUtils.getWhatDay(date, -1)
    ).toEqual(new Date(2016, 11, 31, 14, 5, 30, 99))
    expect(
      DIUtils.getWhatDay(time, 1)
    ).toEqual(new Date(2017, 0, 2, 14, 5, 30, 99))
    expect(
      DIUtils.getWhatDay('2017-12-20', -1)
    ).toEqual(new Date(2017, 11, 19))
    expect(
      DIUtils.getWhatDay(new Date(2017, 11, 10), -1)
    ).toEqual(new Date(2017, 11, 9))
    expect(
      DIUtils.getWhatDay('2017-12-20', 1)
    ).toEqual(new Date(2017, 11, 21))
    expect(
      DIUtils.getWhatDay('2017-12-20', 0, 'first')
    ).toEqual(new Date(2017, 11, 20, 0, 0, 0, 0))
    expect(
      DIUtils.getWhatDay('2017-12-20', 0, 'last')
    ).toEqual(new Date(2017, 11, 20, 23, 59, 59, 999))
  })

  test('getYearDay()', () => {
    expect(
      DIUtils.getYearDay().toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearDay(0).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearDay(-1).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearDay(null).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearDay(undefined).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearDay({}).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearDay([]).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearDay([2018, 1, 1]).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearDay({ time: 2018 }).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearDay('null').toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearDay(new Date('')).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearDay(new Date('abc')).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearDay(date)
    ).toEqual(1)
    expect(
      DIUtils.getYearDay('2017-01-20')
    ).toEqual(20)
    expect(
      DIUtils.getYearDay('2018-05-20')
    ).toEqual(140)
  })

  test('getYearWeek()', () => {
    expect(
      DIUtils.getYearWeek().toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearWeek(0).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearWeek(null).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearWeek(undefined).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearWeek({}).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearWeek([]).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearWeek([2018, 1, 1]).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearWeek({ time: 2018 }).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearWeek('null').toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearWeek(new Date('')).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearWeek(new Date('abc')).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getYearWeek(date)
    ).toEqual(52)
    expect(
      DIUtils.getYearWeek('2017-01-01')
    ).toEqual(52)
    expect(
      DIUtils.getYearWeek('2017-01-01') === DIUtils.getYearWeek(new Date(2017, 0, 1))
    ).toEqual(true)
    expect(
      DIUtils.getYearWeek('2017-01-20')
    ).toEqual(3)
    expect(
      DIUtils.getYearWeek('2017-01-28')
    ).toEqual(4)
    expect(
      DIUtils.getYearWeek(new Date(2017, 0, 28))
    ).toEqual(4)
    expect(
      DIUtils.getYearWeek('2017-01-28') === DIUtils.getYearWeek(new Date(2017, 0, 28))
    ).toEqual(true)
    expect(
      DIUtils.getYearWeek('2018-05-20')
    ).toEqual(20)
    expect(
      DIUtils.getYearWeek('2018-11-20')
    ).toEqual(47)
    expect(
      DIUtils.getYearWeek('2018-11-20') === DIUtils.getYearWeek(new Date(2018, 10, 20))
    ).toEqual(true)
    expect(
      DIUtils.getYearWeek(new Date(2018, 10, 20))
    ).toEqual(47)
    expect(
      DIUtils.getYearWeek('2018-12-20')
    ).toEqual(51)
  })

  test('getMonthWeek()', () => {
    expect(
      DIUtils.getMonthWeek().toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getMonthWeek(0).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getMonthWeek(null).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getMonthWeek(undefined).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getMonthWeek({}).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getMonthWeek([]).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getMonthWeek([2018, 1, 1]).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getMonthWeek({ time: 2018 }).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getMonthWeek('null').toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getMonthWeek(new Date('')).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getMonthWeek(new Date('abc')).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getMonthWeek(date)
    ).toEqual(4)
    expect(
      DIUtils.getMonthWeek('2017-01-01')
    ).toEqual(4)
    expect(
      DIUtils.getMonthWeek(new Date(2017, 0, 1))
    ).toEqual(4)
    expect(
      DIUtils.getMonthWeek('2017-01-01') === DIUtils.getMonthWeek(new Date(2017, 0, 1))
    ).toEqual(true)
    expect(
      DIUtils.getMonthWeek('2017-01-20')
    ).toEqual(3)
    expect(
      DIUtils.getMonthWeek('2018-05-20')
    ).toEqual(2)
    expect(
      DIUtils.getMonthWeek(new Date(2018, 4, 20))
    ).toEqual(2)
    expect(
      DIUtils.getMonthWeek('2018-05-20') === DIUtils.getMonthWeek(new Date(2018, 4, 20))
    ).toEqual(true)
    expect(
      DIUtils.getMonthWeek('2018-05-25')
    ).toEqual(3)
    expect(
      DIUtils.getMonthWeek('2018-05-29')
    ).toEqual(4)
  })

  test('getDayOfYear()', () => {
    expect(
      DIUtils.getDayOfYear().toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfYear(0).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfYear(null).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfYear(undefined).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfYear({}).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfYear([]).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfYear([2018, 1, 1]).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfYear({ time: 2018 }).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfYear('null').toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfYear(new Date('')).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfYear(new Date('abc')).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfYear(date)
    ).toEqual(365)
    expect(
      DIUtils.getDayOfYear(time)
    ).toEqual(365)
    expect(
      DIUtils.getDayOfYear('2017-12-20')
    ).toEqual(365)
    expect(
      DIUtils.getDayOfYear(new Date(2017, 11, 20))
    ).toEqual(365)
    expect(
      DIUtils.getDayOfYear('2017-12-20') === DIUtils.getDayOfYear(new Date(2017, 11, 20))
    ).toEqual(true)
    expect(
      DIUtils.getDayOfYear('2019-12-10', 1)
    ).toEqual(366)
    expect(
      DIUtils.getDayOfYear(new Date(2019, 11, 10), 1)
    ).toEqual(366)
    expect(
      DIUtils.getDayOfYear('2019-12-10', 1) === DIUtils.getDayOfYear(new Date(2019, 11, 10), 1)
    ).toEqual(true)
    expect(
      DIUtils.getDayOfYear('2020-12-10')
    ).toEqual(366)
  })

  test('getDayOfMonth()', () => {
    expect(
      isNaN(DIUtils.getDayOfMonth())
    ).toEqual(true)
    expect(
      isNaN(DIUtils.getDayOfMonth(0))
    ).toEqual(true)
    expect(
      isNaN(DIUtils.getDayOfMonth(-1))
    ).toEqual(true)
    expect(
      isNaN(DIUtils.getDayOfMonth(null))
    ).toEqual(true)
    expect(
      isNaN(DIUtils.getDayOfMonth(undefined))
    ).toEqual(true)
    expect(
      isNaN(DIUtils.getDayOfMonth({}))
    ).toEqual(true)
    expect(
      isNaN(DIUtils.getDayOfMonth([]))
    ).toEqual(true)
    expect(
      isNaN(DIUtils.getDayOfMonth([2018, 1, 1]))
    ).toEqual(true)
    expect(
      isNaN(DIUtils.getDayOfMonth({ time: 2018 }))
    ).toEqual(true)
    expect(
      isNaN(DIUtils.getDayOfMonth('null'))
    ).toEqual(true)
    expect(
      isNaN(DIUtils.getDayOfMonth(new Date('')))
    ).toEqual(true)
    expect(
      isNaN(DIUtils.getDayOfMonth(new Date('abc')))
    ).toEqual(true)
    expect(
      DIUtils.getDayOfMonth().toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfMonth(0).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfMonth(-1).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfMonth(null).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfMonth(undefined).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfMonth({}).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfMonth([]).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfMonth([2018, 1, 1]).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfMonth({ time: 2018 }).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfMonth('null').toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfMonth(new Date('')).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfMonth(new Date('abc')).toString()
    ).toEqual('NaN')
    expect(
      DIUtils.getDayOfMonth(date)
    ).toEqual(31)
    expect(
      DIUtils.getDayOfMonth(time)
    ).toEqual(31)
    expect(
      DIUtils.getDayOfMonth('2017-12-20')
    ).toEqual(31)
    expect(
      DIUtils.getDayOfMonth(new Date(2017, 11, 20))
    ).toEqual(31)
    expect(
      DIUtils.getDayOfMonth('2017-12-20') === DIUtils.getDayOfMonth(new Date(2017, 11, 20))
    ).toEqual(true)
    expect(
      DIUtils.getDayOfMonth('2017-12-10', -1)
    ).toEqual(30)
    expect(
      DIUtils.getDayOfMonth(new Date(2017, 11, 10), -1)
    ).toEqual(30)
    expect(
      DIUtils.getDayOfMonth('2017-12-10', -1) === DIUtils.getDayOfMonth(new Date(2017, 11, 10), -1)
    ).toEqual(true)
    expect(
      DIUtils.getDayOfMonth('2017-12-20', 1)
    ).toEqual(31)
  })

  test('getDateDiff()', () => {
    expect(
      DIUtils.getDateDiff()
    ).toEqual({ done: false, time: 0 })
    expect(
      DIUtils.getDateDiff(0)
    ).toEqual({ done: false, time: 0 })
    expect(
      DIUtils.getDateDiff(-1)
    ).toEqual({ done: false, time: 0 })
    expect(
      DIUtils.getDateDiff(null)
    ).toEqual({ done: false, time: 0 })
    expect(
      DIUtils.getDateDiff(undefined)
    ).toEqual({ done: false, time: 0 })
    expect(
      DIUtils.getDateDiff(undefined, null)
    ).toEqual({ done: false, time: 0 })
    expect(
      DIUtils.getDateDiff(new Date(''))
    ).toEqual({ done: false, time: 0 })
    expect(
      DIUtils.getDateDiff(new Date('abc'))
    ).toEqual({ done: false, time: 0 })
    expect(
      DIUtils.getDateDiff([])
    ).toEqual({ done: false, time: 0 })
    expect(
      DIUtils.getDateDiff(null, '2017-12-21')
    ).toEqual({ done: false, time: 0 })
    expect(
      DIUtils.getDateDiff([], {})
    ).toEqual({ done: false, time: 0 })
    expect(
      DIUtils.getDateDiff({ time: 2018 }, '2017-12-21')
    ).toEqual({ done: false, time: 0 })
    expect(
      DIUtils.getDateDiff(0, '2017-12-21')
    ).toEqual({ done: false, time: 0 })
    expect(
      DIUtils.getDateDiff([2018, 1, 1], '2017-12-21')
    ).toEqual({ done: false, time: 0 })
    expect(
      DIUtils.getDateDiff([2018, 1, 1], 0)
    ).toEqual({ done: false, time: 0 })
    expect(
      DIUtils.getDateDiff(new Date(2017, 0, 1, 14, 5, 30).getTime(), new Date(2017, 0, 1, 15, 1, 48).getTime())
    ).toEqual({ done: true, time: 3378000, yyyy: 0, MM: 0, dd: 0, HH: 0, mm: 56, ss: 18, S: 0 })
    expect(
      DIUtils.getDateDiff(new Date(2017, 0, 1, 14, 5, 30), new Date(2017, 0, 1, 15, 1, 48))
    ).toEqual({ done: true, time: 3378000, yyyy: 0, MM: 0, dd: 0, HH: 0, mm: 56, ss: 18, S: 0 })
    expect(
      DIUtils.getDateDiff('2017-11-20', '2017-12-21')
    ).toEqual({ done: true, time: 2678400000, yyyy: 0, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, S: 0 })
    expect(
      DIUtils.getDateDiff('2017-12-20', '2017-12-21')
    ).toEqual({ done: true, time: 86400000, yyyy: 0, MM: 0, dd: 1, HH: 0, mm: 0, ss: 0, S: 0 })
    expect(
      DIUtils.getDateDiff('2018-01-01', '2017-12-21')
    ).toEqual({ done: false, time: 0 })
  })
})

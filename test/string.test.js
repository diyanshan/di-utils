const DIUtils = require('../func')

describe('String functions', () => {
  test('toValueString()', () => {
    expect(
      DIUtils.toValueString()
    ).toEqual('')
    expect(
      DIUtils.toValueString(null)
    ).toEqual('')
    expect(
      DIUtils.toValueString(undefined)
    ).toEqual('')
    expect(
      DIUtils.toValueString('')
    ).toEqual('')
    expect(
      DIUtils.toValueString(0)
    ).toEqual('0')
    expect(
      DIUtils.toValueString(-1)
    ).toEqual('-1')
    expect(
      DIUtils.toValueString(123)
    ).toEqual('123')
    expect(
      DIUtils.toValueString([])
    ).toEqual('')
    expect(
      DIUtils.toValueString(/\w/)
    ).toEqual('/\\w/')
    expect(
      DIUtils.toValueString({})
    ).toEqual('[object Object]')
    expect(
      DIUtils.toValueString(function () { })
    ).toEqual('function () {}')
    expect(
      DIUtils.toValueString(['3e-9'])
    ).toEqual('3e-9')
    expect(
      DIUtils.toValueString(1e-8)
    ).toEqual('0.00000001')
    expect(
      DIUtils.toValueString(-11e-10)
    ).toEqual('-0.0000000011')
    expect(
      DIUtils.toValueString(-11e+10)
    ).toEqual('-110000000000')
    expect(
      DIUtils.toValueString(-11e+20)
    ).toEqual('-1100000000000000000000')
    expect(
      Number(DIUtils.toValueString(-11e+20))
    ).toEqual(-11e+20)
    expect(
      DIUtils.toValueString(+11e-10)
    ).toEqual('0.0000000011')
    expect(
      DIUtils.toValueString(+11e+10)
    ).toEqual('110000000000')
    expect(
      Number(DIUtils.toValueString(+11e+10))
    ).toEqual(+11e+10)
    expect(
      DIUtils.toValueString(+11e+20)
    ).toEqual('1100000000000000000000')
    expect(
      DIUtils.toValueString(123456e-3)
    ).toEqual('123.456')
    expect(
      DIUtils.toValueString(123456e+3)
    ).toEqual('123456000')
    expect(
      DIUtils.toValueString(4567.890e-4)
    ).toEqual('0.456789')
    expect(
      Number(DIUtils.toValueString(4567.890e-4))
    ).toEqual(4567.890e-4)
    expect(
      DIUtils.toValueString(4567.890e+4)
    ).toEqual('45678900')
    expect(
      Number(DIUtils.toValueString(4567.890e+4))
    ).toEqual(4567.890e+4)
    expect(
      DIUtils.toValueString(-4567.890e-14)
    ).toEqual('-0.0000000000456789')
    expect(
      DIUtils.toValueString(+4567.890e+14)
    ).toEqual('456789000000000000')
    expect(
      DIUtils.toValueString(+4567.890e+18)
    ).toEqual('4567890000000000000000')
    expect(
      DIUtils.toValueString(3e-9)
    ).toEqual('0.000000003')
    expect(
      Number(DIUtils.toValueString(3e-9))
    ).toEqual(3e-9)
    expect(
      DIUtils.toValueString(3e+9)
    ).toEqual('3000000000')
    expect(
      DIUtils.toValueString(3e+22)
    ).toEqual('30000000000000000000000')
    expect(
      Number(DIUtils.toValueString(3e+22))
    ).toEqual(3e+22)
    expect(
      DIUtils.toValueString(123e-25)
    ).toEqual('0.0000000000000000000000123')
    expect(
      DIUtils.toValueString(123e+25)
    ).toEqual('1230000000000000000000000000')
    expect(
      DIUtils.toValueString(0.000003)
    ).toEqual('0.000003')
    expect(
      DIUtils.toValueString([123])
    ).toEqual('123')
    expect(
      DIUtils.toValueString([123.0000006])
    ).toEqual('123.0000006')
  })

  test('trim()', () => {
    expect(
      DIUtils.trim()
    ).toEqual('')
    expect(
      DIUtils.trim(null)
    ).toEqual('')
    expect(
      DIUtils.trim(undefined)
    ).toEqual('')
    expect(
      DIUtils.trim('')
    ).toEqual('')
    expect(
      DIUtils.trim('  ')
    ).toEqual('')
    expect(
      DIUtils.trim(0)
    ).toEqual('0')
    expect(
      DIUtils.trim(123456)
    ).toEqual('123456')
    expect(
      DIUtils.trim(-1)
    ).toEqual('-1')
    expect(
      DIUtils.trim([])
    ).toEqual('')
    expect(
      DIUtils.trim('0')
    ).toEqual('0')
    expect(
      DIUtils.trim(' abc ')
    ).toEqual('abc')
  })

  test('trimLeft()', () => {
    expect(
      DIUtils.trimLeft()
    ).toEqual('')
    expect(
      DIUtils.trimLeft(null)
    ).toEqual('')
    expect(
      DIUtils.trimLeft(undefined)
    ).toEqual('')
    expect(
      DIUtils.trimLeft('')
    ).toEqual('')
    expect(
      DIUtils.trimLeft('   ')
    ).toEqual('')
    expect(
      DIUtils.trimLeft(0)
    ).toEqual('0')
    expect(
      DIUtils.trimLeft(123456)
    ).toEqual('123456')
    expect(
      DIUtils.trimLeft(-1)
    ).toEqual('-1')
    expect(
      DIUtils.trimLeft([])
    ).toEqual('')
    expect(
      DIUtils.trimLeft('0')
    ).toEqual('0')
    expect(
      DIUtils.trimLeft(' abc ')
    ).toEqual('abc ')
  })

  test('trimRight()', () => {
    expect(
      DIUtils.trimRight()
    ).toEqual('')
    expect(
      DIUtils.trimRight(null)
    ).toEqual('')
    expect(
      DIUtils.trimRight(undefined)
    ).toEqual('')
    expect(
      DIUtils.trimRight('')
    ).toEqual('')
    expect(
      DIUtils.trimRight('   ')
    ).toEqual('')
    expect(
      DIUtils.trimRight(0)
    ).toEqual('0')
    expect(
      DIUtils.trimRight(123456)
    ).toEqual('123456')
    expect(
      DIUtils.trimRight(-1)
    ).toEqual('-1')
    expect(
      DIUtils.trimRight([])
    ).toEqual('')
    expect(
      DIUtils.trimRight('0')
    ).toEqual('0')
    expect(
      DIUtils.trimRight(' abc ')
    ).toEqual(' abc')
  })

  test('escape()', () => {
    expect(
      DIUtils.escape()
    ).toEqual('')
    expect(
      DIUtils.escape(null)
    ).toEqual('')
    expect(
      DIUtils.escape(undefined)
    ).toEqual('')
    expect(
      DIUtils.escape('')
    ).toEqual('')
    expect(
      DIUtils.escape(0)
    ).toEqual('0')
    expect(
      DIUtils.escape(123456)
    ).toEqual('123456')
    expect(
      DIUtils.escape(-1)
    ).toEqual('-1')
    expect(
      DIUtils.escape([])
    ).toEqual('')
    expect(
      DIUtils.escape('<a>link</a>')
    ).toEqual('&lt;a&gt;link&lt;/a&gt;')
    expect(
      DIUtils.escape('<script>alert()</script>')
    ).toEqual('&lt;script&gt;alert()&lt;/script&gt;')
  })

  test('unescape()', () => {
    expect(
      DIUtils.unescape()
    ).toEqual('')
    expect(
      DIUtils.unescape(null)
    ).toEqual('')
    expect(
      DIUtils.unescape(undefined)
    ).toEqual('')
    expect(
      DIUtils.unescape('')
    ).toEqual('')
    expect(
      DIUtils.unescape(0)
    ).toEqual('0')
    expect(
      DIUtils.unescape(123456)
    ).toEqual('123456')
    expect(
      DIUtils.unescape(-1)
    ).toEqual('-1')
    expect(
      DIUtils.unescape([])
    ).toEqual('')
    expect(
      DIUtils.unescape('&lt;a&gt;link&lt;/a&gt;')
    ).toEqual('<a>link</a>')
    expect(
      DIUtils.unescape('&lt;script&gt;alert()&lt;/script&gt;')
    ).toEqual('<script>alert()</script>')
  })

  test('camelCase()', () => {
    expect(
      DIUtils.camelCase()
    ).toEqual('')
    expect(
      DIUtils.camelCase(null)
    ).toEqual('')
    expect(
      DIUtils.camelCase(undefined)
    ).toEqual('')
    expect(
      DIUtils.camelCase('')
    ).toEqual('')
    expect(
      DIUtils.camelCase(0)
    ).toEqual('0')
    expect(
      DIUtils.camelCase(123456)
    ).toEqual('123456')
    expect(
      DIUtils.camelCase(-1)
    ).toEqual('1')
    expect(
      DIUtils.camelCase([])
    ).toEqual('')
    expect(
      DIUtils.camelCase('---project')
    ).toEqual('project')
    expect(
      DIUtils.camelCase('---project----')
    ).toEqual('project')
    expect(
      DIUtils.camelCase('proJect----')
    ).toEqual('proJect')
    expect(
      DIUtils.camelCase('-project-')
    ).toEqual('project')
    expect(
      DIUtils.camelCase('---project-name')
    ).toEqual('projectName')
    expect(
      DIUtils.camelCase('--project-name--')
    ).toEqual('projectName')
    expect(
      DIUtils.camelCase('--project----name--')
    ).toEqual('projectName')
    expect(
      DIUtils.camelCase('project-name')
    ).toEqual('projectName')
    expect(
      DIUtils.camelCase('projectName')
    ).toEqual('projectName')
    expect(
      DIUtils.camelCase('AABBC')
    ).toEqual('aabbc')
    expect(
      DIUtils.camelCase('AaBBC')
    ).toEqual('aaBbc')
    expect(
      DIUtils.camelCase('AaBBCdfGG')
    ).toEqual('aaBbCdfGg')
  })

  test('kebabCase()', () => {
    expect(
      DIUtils.kebabCase()
    ).toEqual('')
    expect(
      DIUtils.kebabCase(null)
    ).toEqual('')
    expect(
      DIUtils.kebabCase(undefined)
    ).toEqual('')
    expect(
      DIUtils.kebabCase('')
    ).toEqual('')
    expect(
      DIUtils.kebabCase(0)
    ).toEqual('0')
    expect(
      DIUtils.kebabCase(123456)
    ).toEqual('123456')
    expect(
      DIUtils.kebabCase(-1)
    ).toEqual('1')
    expect(
      DIUtils.kebabCase('----1')
    ).toEqual('1')
    expect(
      DIUtils.kebabCase([])
    ).toEqual('')
    expect(
      DIUtils.kebabCase('aaaa')
    ).toEqual('aaaa')
    expect(
      DIUtils.kebabCase('aaBa')
    ).toEqual('aa-ba')
    expect(
      DIUtils.kebabCase('aAba')
    ).toEqual('a-aba')
    expect(
      DIUtils.kebabCase('aaAba')
    ).toEqual('aa-aba')
    expect(
      DIUtils.kebabCase('aaaAba')
    ).toEqual('aaa-aba')
    expect(
      DIUtils.kebabCase('aABba')
    ).toEqual('a-a-bba')
    expect(
      DIUtils.kebabCase('ABaa')
    ).toEqual('a-baa')
    expect(
      DIUtils.kebabCase('ABCaa')
    ).toEqual('ab-caa')
    expect(
      DIUtils.kebabCase('ABCaaF')
    ).toEqual('ab-caa-f')
    expect(
      DIUtils.kebabCase('ABCaaFG')
    ).toEqual('ab-caa-fg')
    expect(
      DIUtils.kebabCase('ABCaaFGK')
    ).toEqual('ab-caa-fgk')
    expect(
      DIUtils.kebabCase('aABaa')
    ).toEqual('a-a-baa')
    expect(
      DIUtils.kebabCase('VXETable')
    ).toEqual('vxe-table')
    expect(
      DIUtils.kebabCase('Aaa')
    ).toEqual('aaa')
    expect(
      DIUtils.kebabCase('AAaa')
    ).toEqual('a-aaa')
    expect(
      DIUtils.kebabCase('AAAaa')
    ).toEqual('aa-aaa')
    expect(
      DIUtils.kebabCase('AAAAaa')
    ).toEqual('aaa-aaa')
    expect(
      DIUtils.kebabCase('AAAAAaa')
    ).toEqual('aaaa-aaa')
    expect(
      DIUtils.kebabCase('AB')
    ).toEqual('ab')
    expect(
      DIUtils.kebabCase('ABC')
    ).toEqual('abc')
    expect(
      DIUtils.kebabCase('ABCD')
    ).toEqual('abcd')
    expect(
      DIUtils.kebabCase('ABCDE')
    ).toEqual('abcde')
    expect(
      DIUtils.kebabCase('AaB')
    ).toEqual('aa-b')
    expect(
      DIUtils.kebabCase('AaBBBB')
    ).toEqual('aa-bbbb')
    expect(
      DIUtils.kebabCase('aaaBBBccc')
    ).toEqual('aaa-bb-bccc')
    expect(
      DIUtils.kebabCase('BBBffGG')
    ).toEqual('bb-bff-gg')
    expect(
      DIUtils.kebabCase('projectName')
    ).toEqual('project-name')
    expect(
      DIUtils.kebabCase('ProjectName')
    ).toEqual('project-name')
    expect(
      DIUtils.kebabCase('-ProjectName-')
    ).toEqual('project-name')
    expect(
      DIUtils.kebabCase('Enter')
    ).toEqual('enter')
    expect(
      DIUtils.kebabCase('AABBC')
    ).toEqual('aabbc')
    expect(
      DIUtils.kebabCase('a-bC')
    ).toEqual('a-b-c')
    expect(
      DIUtils.kebabCase('Ac-cc')
    ).toEqual('ac-cc')
    expect(
      DIUtils.kebabCase('AAc-cc')
    ).toEqual('a-ac-cc')
    expect(
      DIUtils.kebabCase('AAA-cc')
    ).toEqual('aaa-cc')
    expect(
      DIUtils.kebabCase('AAAc-cc')
    ).toEqual('aa-ac-cc')
    expect(
      DIUtils.kebabCase('AAA-BBB')
    ).toEqual('aaa-bbb')
    expect(
      DIUtils.kebabCase('AAA-BBbBB')
    ).toEqual('aaa-b-bb-bb')
    expect(
      DIUtils.kebabCase('--aaa--bb--')
    ).toEqual('aaa-bb')
    expect(
      DIUtils.kebabCase('a-b-C')
    ).toEqual('a-b-c')
    expect(
      DIUtils.kebabCase('a-b-----C')
    ).toEqual('a-b-c')
    expect(
      DIUtils.kebabCase('a-b-----CDF')
    ).toEqual('a-b-cdf')
    expect(
      DIUtils.kebabCase('aaDddddDDDff')
    ).toEqual('aa-ddddd-dd-dff')
    expect(
      DIUtils.kebabCase('aaBBffHHHggt--H-HHH-hjJ-J')
    ).toEqual('aa-b-bff-hh-hggt-h-hhh-hj-j-j')
    expect(
      DIUtils.kebabCase('a-b--bbBBB-bB--xxDDff')
    ).toEqual('a-b-bb-bbb-b-b-xx-d-dff')
    expect(
      DIUtils.kebabCase('aAA-bBBBB---bF--Fs')
    ).toEqual('a-aa-b-bbbb-b-f-fs')
  })

  test('repeat()', () => {
    expect(
      DIUtils.repeat()
    ).toEqual('')
    expect(
      DIUtils.repeat(null)
    ).toEqual('')
    expect(
      DIUtils.repeat(undefined)
    ).toEqual('')
    expect(
      DIUtils.repeat('')
    ).toEqual('')
    expect(
      DIUtils.repeat(0)
    ).toEqual('')
    expect(
      DIUtils.repeat([])
    ).toEqual('')
    expect(
      DIUtils.repeat('aaaaa')
    ).toEqual('')
    expect(
      DIUtils.repeat('aaaaa', 0)
    ).toEqual('')
    expect(
      DIUtils.repeat('aaaaa', null)
    ).toEqual('')
    expect(
      DIUtils.repeat('aaaaa', undefined)
    ).toEqual('')
    expect(
      DIUtils.repeat('a', 5)
    ).toEqual('aaaaa')
    expect(
      DIUtils.repeat('ab', 3)
    ).toEqual('ababab')
  })

  test('padStart()', () => {
    expect(
      DIUtils.padStart()
    ).toEqual('')
    expect(
      DIUtils.padStart(null)
    ).toEqual('')
    expect(
      DIUtils.padStart(undefined)
    ).toEqual('')
    expect(
      DIUtils.padStart('')
    ).toEqual('')
    expect(
      DIUtils.padStart(0)
    ).toEqual('0')
    expect(
      DIUtils.padStart([])
    ).toEqual('')
    expect(
      DIUtils.padStart(null, 2)
    ).toEqual('  ')
    expect(
      DIUtils.padStart(null, 6)
    ).toEqual('      ')
    expect(
      DIUtils.padStart(0, 2)
    ).toEqual(' 0')
    expect(
      DIUtils.padStart('', 2)
    ).toEqual('  ')
    expect(
      DIUtils.padStart('a', 4)
    ).toEqual('   a')
    expect(
      DIUtils.padStart('a', 6, undefined)
    ).toEqual('     a')
    expect(
      DIUtils.padStart('a', 6, null)
    ).toEqual('nullna')
    expect(
      DIUtils.padStart('a', 6, false)
    ).toEqual('falsea')
    expect(
      DIUtils.padStart('a', 5, 'b')
    ).toEqual('bbbba')
    expect(
      DIUtils.padStart('2', 5, 0)
    ).toEqual('00002')
    expect(
      DIUtils.padStart('2', 5, '0')
    ).toEqual('00002')
  })

  test('padEnd()', () => {
    expect(
      DIUtils.padEnd()
    ).toEqual('')
    expect(
      DIUtils.padEnd(null)
    ).toEqual('')
    expect(
      DIUtils.padEnd(undefined)
    ).toEqual('')
    expect(
      DIUtils.padEnd('')
    ).toEqual('')
    expect(
      DIUtils.padEnd(0)
    ).toEqual('0')
    expect(
      DIUtils.padEnd([])
    ).toEqual('')
    expect(
      DIUtils.padEnd(null, 2)
    ).toEqual('  ')
    expect(
      DIUtils.padEnd(null, 6)
    ).toEqual('      ')
    expect(
      DIUtils.padEnd(0, 2)
    ).toEqual('0 ')
    expect(
      DIUtils.padEnd('', 2)
    ).toEqual('  ')
    expect(
      DIUtils.padEnd('a', 4)
    ).toEqual('a   ')
    expect(
      DIUtils.padEnd('a', 6, undefined)
    ).toEqual('a     ')
    expect(
      DIUtils.padEnd('a', 6, null)
    ).toEqual('anulln')
    expect(
      DIUtils.padEnd('a', 6, false)
    ).toEqual('afalse')
    expect(
      DIUtils.padEnd('a', 5, 'b')
    ).toEqual('abbbb')
    expect(
      DIUtils.padEnd('2', 5, 0)
    ).toEqual('20000')
    expect(
      DIUtils.padEnd('2', 5, '0')
    ).toEqual('20000')
  })

  test('startsWith()', () => {
    expect(
      DIUtils.startsWith()
    ).toEqual(false)
    expect(
      DIUtils.startsWith(0)
    ).toEqual(false)
    expect(
      DIUtils.startsWith(-1)
    ).toEqual(false)
    expect(
      DIUtils.startsWith(null)
    ).toEqual(false)
    expect(
      DIUtils.startsWith(undefined)
    ).toEqual(false)
    expect(
      DIUtils.startsWith('')
    ).toEqual(false)
    expect(
      DIUtils.startsWith('abc')
    ).toEqual(false)
    expect(
      DIUtils.startsWith('abc', null)
    ).toEqual(false)
    expect(
      DIUtils.startsWith('abc', -1)
    ).toEqual(false)
    expect(
      DIUtils.startsWith('abc', 'b')
    ).toEqual(false)
    expect(
      DIUtils.startsWith('abc', 'b', 2)
    ).toEqual(false)
    expect(
      DIUtils.startsWith('abc', 'a')
    ).toEqual(true)
    expect(
      DIUtils.startsWith('abc', 'b', 1)
    ).toEqual(true)
  })

  test('endsWith()', () => {
    expect(
      DIUtils.endsWith()
    ).toEqual(false)
    expect(
      DIUtils.endsWith(0)
    ).toEqual(false)
    expect(
      DIUtils.endsWith(-1)
    ).toEqual(false)
    expect(
      DIUtils.endsWith(null)
    ).toEqual(false)
    expect(
      DIUtils.endsWith(undefined)
    ).toEqual(false)
    expect(
      DIUtils.endsWith('')
    ).toEqual(false)
    expect(
      DIUtils.endsWith('abc')
    ).toEqual(false)
    expect(
      DIUtils.endsWith('abc', null)
    ).toEqual(false)
    expect(
      DIUtils.endsWith('abc', -1)
    ).toEqual(false)
    expect(
      DIUtils.endsWith('abc', 'a')
    ).toEqual(false)
    expect(
      DIUtils.endsWith('abc', 'c', 2)
    ).toEqual(false)
    expect(
      DIUtils.endsWith('abc', 'c')
    ).toEqual(true)
    expect(
      DIUtils.endsWith('abc', 'b', 2)
    ).toEqual(true)
  })

  test('template()', () => {
    expect(
      DIUtils.template()
    ).toEqual('')
    expect(
      DIUtils.template(null)
    ).toEqual('')
    expect(
      DIUtils.template(undefined)
    ).toEqual('')
    expect(
      DIUtils.template(0)
    ).toEqual('0')
    expect(
      DIUtils.template(-1)
    ).toEqual('-1')
    expect(
      DIUtils.template(123)
    ).toEqual('123')
    expect(
      DIUtils.template(/\d/)
    ).toEqual('/\\d/')
    expect(
      DIUtils.template({})
    ).toEqual('[object Object]')
    expect(
      DIUtils.template(function () { })
    ).toEqual('function () {}')
    expect(
      DIUtils.template([])
    ).toEqual('')
    expect(
      DIUtils.template('0')
    ).toEqual('0')
    expect(
      DIUtils.template('[0]')
    ).toEqual('[0]')
    expect(
      DIUtils.template('{{0}}')
    ).toEqual('undefined')
    expect(
      DIUtils.template('name')
    ).toEqual('name')
    expect(
      DIUtils.template('{name')
    ).toEqual('{name')
    expect(
      DIUtils.template('name}name}')
    ).toEqual('name}name}')
    expect(
      DIUtils.template('{name}{name}')
    ).toEqual('{name}{name}')
    expect(
      DIUtils.template('{{name}}')
    ).toEqual('undefined')
    expect(
      DIUtils.template('{{name}}', null)
    ).toEqual('undefined')
    expect(
      DIUtils.template('{{name}}', undefined)
    ).toEqual('undefined')
    expect(
      DIUtils.template('{{name}}', '')
    ).toEqual('undefined')
    expect(
      DIUtils.template('{{name}}', -1)
    ).toEqual('undefined')
    expect(
      DIUtils.template('{{name}}', 0)
    ).toEqual('undefined')
    expect(
      DIUtils.template('{{name}}', [])
    ).toEqual('undefined')
    expect(
      DIUtils.template('{{name}}', {})
    ).toEqual('undefined')
    expect(
      DIUtils.template('{{0}}', [null])
    ).toEqual('null')
    expect(
      DIUtils.template('{{{0}}}', [null])
    ).toEqual('{null}')
    expect(
      DIUtils.template('{{  }}', { name: 'test1' })
    ).toEqual('undefined')
    expect(
      DIUtils.template('{{ }}')
    ).toEqual('undefined')
    expect(
      DIUtils.template('{{0}}', { name: 'test1' })
    ).toEqual('undefined')
    expect(
      DIUtils.template('{{name}}', { name: 'test1' })
    ).toEqual('test1')
    expect(
      DIUtils.template('{{}}', { name: 'test1' })
    ).toEqual('{{}}')
    expect(
      DIUtils.template('{{{{name}}}}', { name: 'test1' })
    ).toEqual('{{test1}}')
    expect(
      DIUtils.template('{{name }}', { name: 'test1' })
    ).toEqual('test1')
    expect(
      DIUtils.template('{{ name}}', { name: 'test1' })
    ).toEqual('test1')
    expect(
      DIUtils.template('{{ name }}', { name: 'test1' })
    ).toEqual('test1')
    expect(
      DIUtils.template('{{ name }}{{{ name }}}{{ name }}', { name: 'test1' })
    ).toEqual('test1{test1}test1')
    expect(
      DIUtils.template('{{ 0 }}{{{ 2 }}}{{ 3 }}', [null, 11, 22, 33, 44])
    ).toEqual('null{22}33')
    expect(
      DIUtils.template('{{name}}-{{age}}', { name: 'test1', age: 26 })
    ).toEqual('test1-26')
    expect(
      DIUtils.template('{{name}}-{{age}}', [])
    ).toEqual('undefined-undefined')
    expect(
      DIUtils.template('{{0}}-{{1}}', [])
    ).toEqual('undefined-undefined')
    expect(
      DIUtils.template('{{0}}-{{1}}', [11, '22'])
    ).toEqual('11-22')
    expect(
      DIUtils.template('{{name}} to {{{age}}}12{3} {{{{sex}}}}', { name: 'test1', age: 26, sex: '男' })
    ).toEqual('test1 to {26}12{3} {{男}}')
  })

  test('toFormatString()', () => {
    expect(
      DIUtils.toFormatString()
    ).toEqual('')
    expect(
      DIUtils.toFormatString(null)
    ).toEqual('')
    expect(
      DIUtils.toFormatString(undefined)
    ).toEqual('')
    expect(
      DIUtils.toFormatString(0)
    ).toEqual('0')
    expect(
      DIUtils.toFormatString(-1)
    ).toEqual('-1')
    expect(
      DIUtils.toFormatString(123)
    ).toEqual('123')
    expect(
      DIUtils.toFormatString(/\d/)
    ).toEqual('/\\d/')
    expect(
      DIUtils.toFormatString({})
    ).toEqual('[object Object]')
    expect(
      DIUtils.toFormatString(function () { })
    ).toEqual('function () {}')
    expect(
      DIUtils.toFormatString([])
    ).toEqual('')
    expect(
      DIUtils.toFormatString('0')
    ).toEqual('0')
    expect(
      DIUtils.toFormatString('[0]')
    ).toEqual('[0]')
    expect(
      DIUtils.toFormatString('{{0}}')
    ).toEqual('{undefined}')
    expect(
      DIUtils.toFormatString('name')
    ).toEqual('name')
    expect(
      DIUtils.toFormatString('{name')
    ).toEqual('{name')
    expect(
      DIUtils.toFormatString('name}name}')
    ).toEqual('name}name}')
    expect(
      DIUtils.toFormatString('{name}{name}')
    ).toEqual('undefinedundefined')
    expect(
      DIUtils.toFormatString('{name}')
    ).toEqual('undefined')
    expect(
      DIUtils.toFormatString('{name}', null)
    ).toEqual('undefined')
    expect(
      DIUtils.toFormatString('{name}', undefined)
    ).toEqual('undefined')
    expect(
      DIUtils.toFormatString('{name}', '')
    ).toEqual('undefined')
    expect(
      DIUtils.toFormatString('{name}', -1)
    ).toEqual('undefined')
    expect(
      DIUtils.toFormatString('{name}', 0)
    ).toEqual('undefined')
    expect(
      DIUtils.toFormatString('{name}', [])
    ).toEqual('undefined')
    expect(
      DIUtils.toFormatString('{name}', {})
    ).toEqual('undefined')
    expect(
      DIUtils.toFormatString('{0}', [null])
    ).toEqual('null')
    expect(
      DIUtils.toFormatString('{{0}}', [null])
    ).toEqual('{null}')
    expect(
      DIUtils.toFormatString('{  }', { name: 'test1' })
    ).toEqual('undefined')
    expect(
      DIUtils.toFormatString('{{ }}')
    ).toEqual('{undefined}')
    expect(
      DIUtils.toFormatString('{0}', { name: 'test1' })
    ).toEqual('undefined')
    expect(
      DIUtils.toFormatString('{name}', { name: 'test1' })
    ).toEqual('test1')
    expect(
      DIUtils.toFormatString('{}', { name: 'test1' })
    ).toEqual('{}')
    expect(
      DIUtils.toFormatString('{{{name}}}', { name: 'test1' })
    ).toEqual('{{test1}}')
    expect(
      DIUtils.toFormatString('{name }', { name: 'test1' })
    ).toEqual('test1')
    expect(
      DIUtils.toFormatString('{ name}', { name: 'test1' })
    ).toEqual('test1')
    expect(
      DIUtils.toFormatString('{ name }', { name: 'test1' })
    ).toEqual('test1')
    expect(
      DIUtils.toFormatString('{ name }{{ name }}{ name }', { name: 'test1' })
    ).toEqual('test1{test1}test1')
    expect(
      DIUtils.toFormatString('{ 0 }{{ 2 }}{ 3 }', [null, 11, 22, 33, 44])
    ).toEqual('null{22}33')
    expect(
      DIUtils.toFormatString('{name}-{age}', { name: 'test1', age: 26 })
    ).toEqual('test1-26')
    expect(
      DIUtils.toFormatString('{name}-{age}', [])
    ).toEqual('undefined-undefined')
    expect(
      DIUtils.toFormatString('{0}-{1}', [])
    ).toEqual('undefined-undefined')
    expect(
      DIUtils.toFormatString('{0}-{1}', [11, '22'])
    ).toEqual('11-22')
    expect(
      DIUtils.toFormatString('{name} to {{age}}12{3} {{{sex}}}', { name: 'test1', age: 26, sex: '男', 3: 'xx' })
    ).toEqual('test1 to {26}12xx {{男}}')
  })
})

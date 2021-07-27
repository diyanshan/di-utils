const DIUtils = require('../func')

describe('location functions', () => {
  test('serialize()', () => {
    expect(
      DIUtils.serialize()
    ).toEqual('')
    expect(
      DIUtils.serialize(null)
    ).toEqual('')
    expect(
      DIUtils.serialize(undefined)
    ).toEqual('')
    expect(
      DIUtils.serialize({})
    ).toEqual('')
    expect(
      DIUtils.serialize([])
    ).toEqual('')
    expect(
      DIUtils.serialize(-1)
    ).toEqual('')
    expect(
      DIUtils.serialize({ id: 123, name: 'test1' })
    ).toEqual('id=123&name=test1')
    expect(
      DIUtils.serialize({ id: 123, name: -1 })
    ).toEqual('id=123&name=-1')
    expect(
      DIUtils.serialize({ id: 123, name: 0 })
    ).toEqual('id=123&name=0')
    expect(
      DIUtils.serialize({ id: 123, name: false })
    ).toEqual('id=123&name=false')
    expect(
      DIUtils.serialize({ id: 123, name: null })
    ).toEqual('id=123&name=')
    expect(
      DIUtils.serialize({ id: 123, name: undefined })
    ).toEqual('id=123')
    expect(
      DIUtils.serialize({ list: [11, 22] })
    ).toEqual('list%5B%5D=11&list%5B%5D=22')
    expect(
      DIUtils.serialize({ list: [{ id: 11, name: 't1' }, { id: 44, name: 't2' }] })
    ).toEqual('list%5B0%5D%5Bid%5D=11&list%5B0%5D%5Bname%5D=t1&list%5B1%5D%5Bid%5D=44&list%5B1%5D%5Bname%5D=t2')
  })

  test('unserialize()', () => {
    expect(
      DIUtils.unserialize()
    ).toEqual({})
    expect(
      DIUtils.unserialize({})
    ).toEqual({})
    expect(
      DIUtils.unserialize([])
    ).toEqual({})
    expect(
      DIUtils.unserialize(null)
    ).toEqual({})
    expect(
      DIUtils.unserialize(undefined)
    ).toEqual({})
    expect(
      DIUtils.unserialize(0)
    ).toEqual({})
    expect(
      DIUtils.unserialize(-1)
    ).toEqual({})
    expect(
      DIUtils.unserialize('id=123&name=test1')
    ).toEqual({ id: '123', name: 'test1' })
    expect(
      DIUtils.unserialize('id=123&name=false')
    ).toEqual({ id: '123', name: 'false' })
    expect(
      DIUtils.unserialize('id=123&name=0')
    ).toEqual({ id: '123', name: '0' })
    expect(
      DIUtils.unserialize('id=123&name=null')
    ).toEqual({ id: '123', name: 'null' })
    expect(
      DIUtils.unserialize('id=123&name=')
    ).toEqual({ id: '123', name: '' })
  })

  test('parseUrl()', () => {
    expect(
      DIUtils.parseUrl('http://xuliangzhan.com')
    ).toEqual({
      hash: '',
      hashKey: '',
      hashQuery: {},
      host: 'xuliangzhan.com',
      hostname: 'xuliangzhan.com',
      href: 'http://xuliangzhan.com',
      origin: 'http://xuliangzhan.com',
      path: '/',
      pathname: '/',
      port: '',
      protocol: 'http:',
      search: '',
      searchQuery: {}
    })
    expect(
      DIUtils.parseUrl('http://127.0.0.1/demo')
    ).toEqual({
      hash: '',
      hashKey: '',
      hashQuery: {},
      host: '127.0.0.1',
      hostname: '127.0.0.1',
      href: 'http://127.0.0.1/demo',
      origin: 'http://127.0.0.1',
      path: '/demo',
      pathname: '/demo',
      port: '',
      protocol: 'http:',
      search: '',
      searchQuery: {}
    })
    expect(
      DIUtils.parseUrl('http://localhost:8080/demo?id=123')
    ).toEqual({
      hash: '',
      hashKey: '',
      hashQuery: {},
      host: 'localhost:8080',
      hostname: 'localhost',
      href: 'http://localhost:8080/demo?id=123',
      origin: 'http://localhost:8080',
      path: '/demo?id=123',
      pathname: '/demo',
      port: '8080',
      protocol: 'http:',
      search: '?id=123',
      searchQuery: {
        id: '123'
      }
    })
    expect(
      DIUtils.parseUrl('http://localhost:8080/demo/#/home?id=123')
    ).toEqual({
      hash: '#/home?id=123',
      hashKey: '/home',
      hashQuery: {
        id: '123'
      },
      host: 'localhost:8080',
      hostname: 'localhost',
      href: 'http://localhost:8080/demo/#/home?id=123',
      origin: 'http://localhost:8080',
      path: '/demo/',
      pathname: '/demo/',
      port: '8080',
      protocol: 'http:',
      search: '',
      searchQuery: {}
    })
    expect(
      DIUtils.parseUrl('http://www.xuliangzhan.com:8080/demo/?v=1#/home?id=123')
    ).toEqual({
      hash: '#/home?id=123',
      hashKey: '/home',
      hashQuery: {
        id: '123'
      },
      host: 'www.xuliangzhan.com:8080',
      hostname: 'www.xuliangzhan.com',
      href: 'http://www.xuliangzhan.com:8080/demo/?v=1#/home?id=123',
      origin: 'http://www.xuliangzhan.com:8080',
      path: '/demo/?v=1',
      pathname: '/demo/',
      port: '8080',
      protocol: 'http:',
      search: '?v=1',
      searchQuery: {
        v: '1'
      }
    })
  })
})

'use strict'

var setupDefaults = require('./setupDefaults')

var arrayEach = require('./arrayEach')
var each = require('./each')
var isFunction = require('./isFunction')

var assign = require('./assign')

var DIUtils = function () {}

function mixin () {
  arrayEach(arguments, function (methods) {
    each(methods, function (fn, name) {
      DIUtils[name] = isFunction(fn) ? function () {
        var result = fn.apply(DIUtils.$context, arguments)
        DIUtils.$context = null
        return result
      } : fn
    })
  })
}

function setup (options) {
  return assign(setupDefaults, options)
}

DIUtils.VERSION = '@VERSION'
DIUtils.mixin = mixin
DIUtils.setup = setup

module.exports = DIUtils

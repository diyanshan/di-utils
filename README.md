# di-shan-utils

JavaScript 函数库、工具类

## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_7-8/internet-explorer_7-8_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- | --- |
7+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 6+ ✔ |

## Docs

[To view the document](https://x-extends.github.io/xe-utils/) [查看文档](https://x-extends.gitee.io/xe-utils/)

## Installing

```shell
npm install di-shan-utils
```

Using nodejs

```javascript
const DIUtils = require('di-shan-utils')
```

<!-- Get on [unpkg](https://unpkg.com/xe-utils/) and [cdnjs](https://cdn.jsdelivr.net/npm/xe-utils/) -->

```HTML
<!-- <script src="https://cdn.jsdelivr.net/npm/xe-utils"></script> -->
```

### Import all methods

```javascript
import DIUtils from 'di-shan-utils'

DIUtils.toDateString(Date.now())
// 2018-01-01 10:30:28
DIUtils.toStringDate('2018-01-01 10:30:00')
// Mon Jan 01 2018 10:30:00 GMT+0800 (中国标准时间)
```

## Import on demand

这样按需引入方法，可以使体积达到最小  
单个导入，包的大小 gzip >≈ 60B+，按需导入

```javascript
import each from 'di-shan-utils/each'
import toDateString from 'di-shan-utils/toDateString'

each({ a: 11, b: 22, c: 33 }, function (item, key){
  console.log(item)
})
// 11
// 22
// 33
toDateString(Date.now(), 'yyyy-MM-dd HH:mm:ss')
// 2018-01-01 10:30:28
```

```javascript
import DIUtils from 'di-shan-utils/ctor'
import each from 'di-shan-utils/each'
import toDateString from 'di-shan-utils/toDateString'
import toFixedNumber from 'di-shan-utils/toFixedNumber'

DIUtils.mixin({
  each,
  toDateString,
  toFixedNumber
})
DIUtils.toDateString(Date.now(), 'yyyy-MM-dd HH:mm:ss')
// 2018-01-01 10:30:28
```

按功能导入所有方法

```javascript
import DIUtils from 'di-shan-utils/ctor'
import objectMethods from 'di-shan-utils/object'
import arrayMethods from 'di-shan-utils/array'
import baseMethods from 'di-shan-utils/base'
import numberMethods from 'di-shan-utils/number'
import dateMethods from 'di-shan-utils/date'
import stringMethods from 'di-shan-utils/string'
import functionMethods from 'di-shan-utils/function'
import urlMethods from 'di-shan-utils/url'
import webMethods from 'di-shan-utils/web'

DIUtils.mixin(
  // Object
  objectMethods,
  // Array
  arrayMethods,
  // Base
  baseMethods,
  // Number
  numberMethods,
  // Date
  dateMethods,
  // String
  stringMethods,
  // Function
  functionMethods,
  // URL
  urlMethods,
  // Web
  webMethods
)
```

<!-- ## License

[MIT](LICENSE) © 2017-present-->

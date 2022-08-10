# 1. 安装Babel
```shell
npm install babel-cli babel-preset-env --save
```

# 2. 创建.babelrc

```json
{
  "presets": ["env"]
}
```

# 3. 引入Jquery,挂载到window上
```js
import $ from 'jquery';
window.jQuery = window.$ = $
```

# 4. 转义es6成CommonJs
```shell
npm babel src.js -o bundle.js
```

# 5. 转CommonJS成Es5
```shell
browserify bundle.js -o jquery.js
```
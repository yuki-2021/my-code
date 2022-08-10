/*
* 配置require.js
* */
requirejs.config({
    // baseUrl - 指定module的位置,从index.html开始计算
    baseUrl: 'src/modules/',
    // paths: - 指定module和对应的文件,不要加'.js文件后缀'
    paths: {
        module1: 'module1',
        module2: 'module2',
        vue: '../../lib/vue',
        angular: '../../lib/angular'
    },
    shim: {
       angular: {
           deps: [],
           exports: 'angular'
       }
    }
});




require(['module2', 'vue','angular'], function (module2,Vue, Angular) {
    console.log(module2)
    module2.sayName()
    console.log(new Vue())
    console.log(Angular)
})
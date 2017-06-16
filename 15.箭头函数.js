/**
 * Created by enbinye on 2017/6/15.
 */
'use strict';

//ES6标准新增了一种新的函数：Arrow Function（箭头函数）
var f = x => x * x;
console.log(f(3));

//返回一个对象
x => {{foo : x}};

//箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者obj
var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
        return fn();
    }
};
obj.getAge(); // 25


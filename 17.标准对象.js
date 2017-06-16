/**
 * Created by enbinye on 2017/6/15.
 */
'use strict'

console.log(typeof 123); // 'number'
console.log(typeof NaN); // 'number'
console.log(typeof 'str'); // 'string'
console.log(typeof true); // 'boolean'
console.log(typeof undefined); // 'undefined'
console.log(typeof Math.abs); // 'function'
console.log(typeof null); // 'object'
console.log(typeof []); // 'object'
console.log(typeof {}); // 'object'

//包装对象
var n = new Number(123);
var b = new Boolean(true);
var s = new String('str');
//包装完后成为object对象
console.log(n === 123);//false
console.log(b === true);//false
console.log(s === 'str');//false

//有这么几条规则需要遵守
/*
 * 不要使用new Number()、new Boolean()、new String()创建包装对象；

 * 用parseInt()或parseFloat()来转换任意类型到number；

 * 用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；

 * 通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；

 * typeof操作符可以判断出number、boolean、string、function和undefined；

 *  判断Array要使用Array.isArray(arr)；

 * 判断null请使用myVar === null；

 * 判断某个全局变量是否存在用typeof window.myVar === 'undefined'；

 * 函数内部判断某个变量是否存在用typeof myVar === 'undefined'。
 */

//最后有细心的同学指出，任何对象都有toString()方法吗？null和undefined就没有！确实如此，这两个特殊值要除外，虽然null还伪装成了object类型。

//更细心的同学指出，number对象调用toString()报SyntaxError：

// 123.toString(); // SyntaxError
//遇到这种情况，要特殊处理一下：

console.log(123..toString()); // '123', 注意是两个点！
console.log((123).toString()); // '123'
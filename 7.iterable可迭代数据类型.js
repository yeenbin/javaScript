/**
 * Created by enbinye on 2017/6/9.
 */
'use strict';

//遍历Array可以采用下标循环，遍历Map和Set就无法使用下标。为了统一集合类型，ES6标准引入了新的iterable类型，Array、Map和Set都属于iterable类型。
//具有iterable类型的集合可以通过新的for ... of循环来遍历
var a = [1,2,3];
a.name = 'xxx';
for(var x of a){
    console.log(`for...of循环结果: ${x}`);
}
console.log('你的浏览器支持for...of循环');

/*for ... of循环和for ... in循环有何区别？
* for ... in循环由于历史遗留问题，它遍历的实际上是对象的属性名称。一个Array数组实际上也是一个对象，它的每个元素的索引被视为一个属性。
*
*for ... in循环将把name包括在内，但Array的length属性却不包括在内。
* */

for (var x in a )
{
    console.log(`for...in循环结果: ${x}`);
}

//for ... in循环将把name包括在内，但Array的length属性却不包括在内。
//for ... of循环则完全修复了这些问题，它只循环集合本身的元素.

//更好的方式是直接使用iterable内置的forEach方法，它接收一个函数，每次迭代就自动回调该函数。以Array
var b = ['A','B','C'];
b.name = 'aaa';
b.forEach(function (element,index,array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(`索引${index}为${element}`);
});
//注意，forEach()方法是ES5.1标准引入的，你需要测试浏览器是否支持。

//Set与Array类似，但Set没有索引，因此回调函数的前两个参数都是元素本身：
var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set) {
    console.log(`set元素:${element}`);
});

//Map的回调函数参数依次为value、key和map本身：
var m = new Map([[1,'x'],[2,'y'],[3,'z']]);
m.forEach(function (value,key,map) {
   console.log(`map value:${value} key:${key}`);
});



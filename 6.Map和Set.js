/**
 * Created by enbinye on 2017/6/8.
 */
'use strict';
var m = new Map();
var s = new Set();
console.log('你的浏览器支持Map和Set！');

//Map是一组键值对的结构，具有极快的查找速度。
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
console.log(m);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined
console.log(m);

//由于一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值冲掉
m.set('Bob',69);
console.log(m);



//------Set
//Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。
var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3
//重复元素在Set中自动被过滤
var s3 = new Set([1, 2, 3, 3, '3']);
console.log(s3); // Set {1, 2, 3, "3"}

//通过add(key)方法可以添加元素到Set中，可以重复添加，但不会有效果
s3.add(4);
s3.add(4);
console.log(s3);

//通过delete(key)方法可以删除元素：
s3.delete(3);
console.log(s3);
//如果被移除的key不存在 也不会报错
console.log(s3.delete(5));//返回false
console.log(s3);

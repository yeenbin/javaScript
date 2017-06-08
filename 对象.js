/**
 * Created by enbinye on 2017/6/8.
 */
'use strict';

//JavaScript的对象是一种无序的集合数据类型，它由若干键值对组成。
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null,
    'middle-school': 'No.1 Middle School'
};

console.log(xiaoming);
//JavaScript用一个{...}表示一个对象，键值对以xxx: xxx形式申明，用,隔开。注意，最后一个键值对不需要在末尾加,，如果加了，有的浏览器（如低版本的IE）将报错。

//可以通过变量xiaoming来获取小明的属性了
xiaoming.name;// '小明'
xiaoming.birth;// 1990
console.log(xiaoming.name,xiaoming.birth);

//访问属性是通过.操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用''括起来：
//xiaohong的属性名middle-school不是一个有效的变量，就需要用''括起来。访问这个属性也无法使用.操作符，必须用['xxx']
xiaoming['middle-school'];//'No.1 Middle School'
console.log(xiaoming['middle-school']);

//JavaScript规定，访问不存在的属性不报错，而是返回undefined
xiaoming.age;//undefined
console.log(xiaoming.age);
xiaoming.age = 18; // 新增一个age属性
xiaoming.age; // 18
delete xiaoming.age; // 删除age属性
xiaoming.age; // undefined
delete xiaoming['name']; // 删除name属性
xiaoming.name; // undefined
delete xiaoming.school; // 删除一个不存在的school属性也不会报错

//如果我们要检测xiaoming是否拥有某一属性，可以用in操作符
'name' in xiaoming; // true
'grade' in xiaoming; // false
//不过要小心，如果in判断一个属性存在，这个属性不一定是xiaoming的，它可能是xiaoming继承得到的
'toString' in xiaoming; // true
//要判断一个属性是否是xiaoming自身拥有的，而不是继承得到的，可以用hasOwnProperty()方法：

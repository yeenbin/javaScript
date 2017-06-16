/**
 * Created by enbinye on 2017/6/16.
 */
'use strict';
/*
  当我们用obj.xxx访问一个对象的属性时，JavaScript引擎先在当前对象上查找该属性，如果没有找到，就到其原型对象上找，如果还没有找到，就一直上溯到Object.prototype对象，最后，如果还没有找到，就只能返回undefined。
* */

//arr ----> Array.prototype ----> Object.prototype ----> null

//foo ----> Function.prototype ----> Object.prototype ----> null


//****************构造函数
function Student(name) {
    this.name = '小明';
    this.hello = function () {
        console.log('Hello' + this.name + '!');
    }
}

var xiaoming = new Student('小明');
console.log(xiaoming.name);
xiaoming.hello();

/*
* 在strict模式下，this.name = name将报错，因为this绑定为undefined，在非strict模式下，this.name = name不报错，因为this绑定为window，于是无意间创建了全局变量name，并且返回undefined，这个结果更糟糕。

 所以，调用构造函数千万不要忘记写new。为了区分普通函数和构造函数，按照约定，构造函数首字母应当大写，而普通函数首字母应当小写，这样，一些语法检查工具如jslint将可以帮你检测到漏写的new。
 */

function Cat(name) {
    this.name = name || '猫';//默认名字为猫

}

//让所有的Cat共享一个say()方法
Cat.prototype.say = function () {
    return 'Hello, ' + this.name + '!';
}


// 测试:
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
if (kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}
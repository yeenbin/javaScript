/**
 * Created by enbinye on 2017/6/9.
 */
'use strict'

//在一个对象中绑定函数，称为这个对象的方法。
// var  xiaoming = {
//     name : '小明',
//     birth : 1991,
//     age : function () {
//         var year = new Date().getFullYear();
//         return year - this.birth;
//     }
// }
// console.log(xiaoming.age());

//this关键词的注意点
//如果以对象的方法形式调用，比如xiaoming.age()，该函数的this指向被调用的对象，也就是xiaoming，这是符合我们预期的。
//如果单独调用函数，比如getAge()，此时，该函数的this指向全局对象，也就是window。
//要保证this指向正确，必须用obj.xxx()的形式调用！

//用一个that变量首先捕获this
// var xiaoming1 = {
//     name: '小明',
//     birth: 1991,
//     age: function () {
//         var that = this; // 在方法内部一开始就捕获this
//         function getAgeFromBirth() {
//             var y = new Date().getFullYear();
//             return y - that.birth; // 用that而不是this
//         }
//         return getAgeFromBirth();
//     }
// };
// console.log(xiaoming1.age());

//*********apply

//要指定函数的this指向哪个对象，可以用函数本身的apply方法，它接收两个参数，第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming2 = {
    name : '小明',
    birth : 1990,
    age : getAge
}

console.log(xiaoming2.age());
getAge.apply(xiaoming2,[]);

//对普通函数调用，我们通常把this绑定为null
var max1 = Math.max.apply(null,[3,4,5]);
var max2 = Math.max.call(null,3,4,5);
/**
 * Created by enbinye on 2017/6/14.
 */
'use strict'
//JS中的函数其实都指某个变量,既然变量可以指向函数,函数的参数能接收变量,那么一个函数就可以接收另一个函数作为参数,这种函数称之为高阶函数。
//一个最简单的高阶函数
function add(x,y,f) {
    return f(x) + f(y);
}

var num = add(-5,6,Math.abs);
console.log(num);

//*************** map方法
//由于map()方法定义在JavaScript的Array中，我们调用Array的map()方法，传入我们自己的函数，就得到了一个新的Array作为结果.

function pow(x) {//平方数
    return x * x;
}

var array = [1,2,-3,4,5,-6,-7];

var arr1 = array.map(pow);

console.log(arr1);
console.log(array.map(String));
console.log(array.map(Math.abs));

//*************** reduce方法
//Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上，这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算,其效果就是[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)

var arr2 = [1,3,5,7,9];
var num = arr2.reduce(function (x,y)  {
    return x + y;
});
console.log(num);

//给数组求积的函数

function product(arr) {
    return arr.reduce(function (x, y) {
        return x * y;
    });
}

// 测试:
if (product([1, 2, 3, 4]) === 24 && product([0, 1, 2]) === 0 && product([99, 88, 77, 66]) === 44274384) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
}

//将数组拼接成按位排列的整数
console.log(arr2.reduce(function (x, y) {
    return x * 10 + y;
}));

//***********练习1.不要使用JavaScript内置的parseInt()函数，利用map和reduce操作实现一个string2int()函数
var str = '13579';

function string2int(s) {
   var arr = s.split('');

    return arr.map(function (x) {
        return 1 * x;
    }).reduce(function (x, y) {
        return x * 10 + y;
    });
}

console.log(string2int(str));

if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        console.log('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        console.log('请勿使用Number()!');
    } else {
        console.log('测试通过!');
    }
}
else {
    console.log('测试失败!');
}

//************练习2:请把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。输入：['adam', 'LISA', 'barT']，输出：['Adam', 'Lisa', 'Bart']。
function normalize(arr) {
    var arr1 = arr.map(function (s) {
        var strArr = s.toLowerCase().split('');
        var zero = strArr[0].toString().toUpperCase();
        strArr.shift();
        strArr.unshift(zero);
        return strArr.reduce(function (x,y) {
            return x + y;
        });
    });
    console.log(arr1);
}

normalize(['adam', 'LISA', 'barT']);

//**********练习4

var arr4 = ['1','2','3'];
console.log(arr4.map(parseInt));// [1, NaN, NaN]
console.log(arr4.map(Number));// [1, 2, 3]

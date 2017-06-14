/**
 * Created by enbinye on 2017/6/9.
 */
'use strict';
//函数的定义
//第一种定义方式
function abs(x) {
    if(x > 0){
        return x;
    }else {
        return -x;
    }
}

//第二种定义方式
var fun_abs = function (x) {
    //避免收到undefined的参数
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if(x > 0){
        return x;
    }else {
        return -x;
    }
};

console.log(abs(10),fun_abs(-9));

/*上述abs()函数的定义如下：

 function指出这是一个函数定义；
 abs是函数的名称；
 (x)括号内列出函数的参数，多个参数以,分隔；
 { ... }之间的代码是函数体，可以包含若干语句，甚至可以没有任何语句。
 请注意，函数体内部的语句在执行时，一旦执行到return时，函数就执行完毕，并将结果返回。因此，函数内部通过条件判断和循环可以实现非常复杂的逻辑。

 如果没有return语句，函数执行完毕后也会返回结果，只是结果为undefined。

 由于JavaScript的函数也是一个对象，上述定义的abs()函数实际上是一个函数对象，而函数名abs可以视为指向该函数的变量。
 */

//由于JavaScript允许传入任意个参数而不影响调用，因此传入的参数比定义的参数多也没有问题，虽然函数内部并不需要这些参数:

abs(10, 'blablabla'); // 返回10
abs(-9, 'haha', 'hehe', null); // 返回9

//传入的参数比定义的少也没关系
//此时abs(x)函数的参数x将收到undefined，计算结果为NaN。
abs(); //返回NaN
// fun_abs();//会报错


//**********arguments

//JavaScript还有一个免费赠送的关键字arguments，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。arguments类似Array但它不是一个Array

function new_abs() {
    if (arguments.length === 0){
        return 0 ;
    }
    var x = arguments[0];
    return  x >= 0 ? x : -x;
}

console.log(new_abs(),new_abs(-10));


//如何获取多余的参数,ES6标准引入了rest参数
function foo(a,b,...reset) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(reset);
}

foo(1,2,3,4,5);
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

foo(1);
// 结果:
// a = 1
// b = undefined
// Array []

//rest参数只能写在最后，前面用...标识，从运行结果可知，传入的参数先绑定a、b，多余的参数以数组形式交给变量rest，所以，不再需要arguments我们就获取了全部参数。
//如果传入的参数连正常定义的参数都没填满，也不要紧，rest参数会接收一个空数组（注意不是undefined）。

/*
* 练习

 定义一个计算圆面积的函数area_of_circle()，它有两个参数：

 r: 表示圆的半径；
 pi: 表示π的值，如果不传，则默认3.14
 */
function area_of_circle(r,pi) {
    if(arguments.length === 0){
        return 0;
    }else if (arguments.length === 1){
        pi = 3.14;
    }

    return pi * r * r;
}

// 测试:
if (area_of_circle(2) === 12.56 && area_of_circle(2, 3.1416) === 12.5664) {
    console.log('测试通过');
} else {
    console.log('测试失败');
}


//返回2个数中比较大的那个
function max(a,b) {
    return a > b ? a : b;
}

console.log(max(3,9));
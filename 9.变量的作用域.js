/**
 * Created by enbinye on 2017/6/9.
 */
'use strict'

//变量的作用域
//如果一个变量在函数体内部申明，则该变量的作用域为整个函数体，在函数体外不可引用该变量：
//如果两个不同的函数各自申明了同一个变量，那么该变量只在各自的函数体内起作用。换句话说，不同函数内部的同名变量互相独立，互不影响
//由于JavaScript的函数可以嵌套，此时，内部函数可以访问外部函数定义的变量，反过来则不行：

//JavaScript的函数在查找变量时从自身函数定义开始，从“内”向“外”查找。如果内部函数定义了与外部函数重名的变量，则内部函数的变量将“屏蔽”外部函数的变量。
function foo() {
    var x = 1;
    function bar() {
        var x = 'A';
        console.log('x in bar() = ' + x); // 'A'
    }
    console.log('x in foo() = ' + x); // 1
    bar();
}

foo();


//虽然是strict模式，但语句var x = 'Hello, ' + y;并不报错，原因是变量y在稍后申明了。但是alert显示Hello, undefined，说明变量y的值为undefined。这正是因为JavaScript引擎自动提升了变量y的声明，但不会提升变量y的赋值。
function foo1() {
    var x = 'Hello, ' + y;
    console.log(x);
    var y = 'Bob';
}

foo1();


//由于JavaScript的这一怪异的“特性”，我们在函数内部定义变量时，请严格遵守“在函数内部首先申明所有变量”这一规则。最常见的做法是用一个var申明函数内部用到的所有变量

function foo2() {
    var
        x = 1, // x初始化为1
        y = x + 1, // y初始化为2
        z, i; // z和i为undefined
    // 其他语句:
    for (i=0; i<100; i++) {

    }
}

//************全局作用域
//不在任何函数内定义的变量就具有全局作用域。实际上，JavaScript默认有一个全局对象window，全局作用域的变量实际上被绑定到window的一个属性：
//JavaScript实际上只有一个全局作用域。任何变量（函数也视为变量），如果没有在当前函数作用域中找到，就会继续往上查找，最后如果在全局作用域中也没有找到，则报ReferenceError错误。

//*************名字空间
//减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中

// 唯一的全局变量MYAPP:
var MYAPP = {};

// 其他变量:
MYAPP.name = 'myapp';
MYAPP.version = 1.0;

// 其他函数:
MYAPP.foo = function () {
    return 'foo';
};

//把自己的代码全部放入唯一的名字空间MYAPP中，会大大减少全局变量冲突的可能。
function foo1() {
    for (var i=0; i<100; i++) {
        //
    }
    i += 100; // 仍然可以引用变量i
}

//为了解决块级作用域，ES6引入了新的关键字let，用let替代var可以申明一个块级作用域的变量：

function foo2() {
    var sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
    }
    i += 1; // SyntaxError
}

// foo1();
// foo2();//报错

//ES6标准引入了新的关键字const来定义常量，const与let都具有块级作用域
const PI = 3.14;
PI = 3; // 某些浏览器不报错，但是无效果！
PI; // 3.14
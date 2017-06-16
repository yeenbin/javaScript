/**
 * Created by enbinye on 2017/6/15.
 */
'use strict';

//函数做返回值
function sum_arr(arr) {
    var sum1 = function () {
        return arr.reduce(function (x ,y) {
            return x + y;
        });
    }
    return sum1;
}

var f = sum_arr([1,2,3,4]);//返回值为函数
console.log(f());

//闭包
//创建多次方运算的函数
function make_pow(n) {
    return function (x) {
        return Math.pow(x,n);
    }
}

var pow2 = make_pow(2);//平方函数
var pow3 = make_pow(3);
console.log(pow2(2));//4

console.log(pow3(2));//8

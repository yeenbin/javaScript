/**
 * Created by enbinye on 2017/6/14.
 */
'use strict'

//和map()类似，Array的filter()也接收一个函数。和map()不同的是，filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。
//一个数组中删除偶数 保留奇数
var array = [1,2,4,5,6,9,10,15];
var r = array.filter(function (x) {
   return x % 2 !== 0;
});
console.log(r);


// filter()接收的回调函数，其实可以有多个参数。通常我们仅使用第一个参数，表示Array的某个元素。回调函数还可以接收另外两个参数，表示元素的位置和数组本身：

var arr = ['A', 'B', 'C'];
var r = arr.filter(function (element, index, self) {
    console.log(element); // 依次打印'A', 'B', 'C'
    console.log(index); // 依次打印0, 1, 2
    console.log(self); // self就是变量arr
    return true;
});

//利用filter 可以巧妙的给array去重
var r, arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
r = arr.filter(function (element,index,self) {
    return self.indexOf(element) === index;
});
console.log(r);

//去除重复元素依靠的是indexOf总是返回第一个元素的位置，后续的重复元素位置与indexOf返回的位置不相等，因此被filter滤掉了。
function get_primes(arr) {
   return arr.filter(function (x) {
        if(x <= 1) return false;
       var bool = true;
        for(let i = 2 ;i <= x - 1; i++){
            if( x % i === 0){
                bool = false;
                break;
            }
        }
        return bool;
    });
}

console.log(get_primes([1,2,3,4,5,6,7]));
// 测试:
var
    x,
    r,
    arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log('测试通过!');
} else {
    console.log('测试失败: ' + r.toString());
}
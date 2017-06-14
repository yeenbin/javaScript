/**
 * Created by enbinye on 2017/6/8.
 */
'use strict';

var x = 0;
var i;
for (i=1; i <= 10000; i++)
{
    x = x + i;
}
console.log(x);//50005000

//利用for循环计算1 * 2 * 3 * ... * 10的结果
var num = 1;
var j;
for (j=1; j <= 10; j++)
{
    num = num * j;
}
console.log(num);//3628800

//for循环最常用的地方就是用来遍历数组

//for循环的3个条件都可以省略,如果没有退出循环的判断条件 必须使用break语句退出循环
//否者就死循环了
var y = 0;
for(;;){
    if(y > 10) break;
    y++;
    console.log(y);
}

//for in
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
   if(o.hasOwnProperty(key))
   {
       console.log(key);
   }

}

//由于Array也是对象，而它的每个元素的索引被视为对象的属性，因此，for ... in循环可以直接循环出Array的索引：

var a = ['A','B','C'];
for (var i in a){
    console.log(i);//0,1,2
    console.log(a[i]);//'A', 'B', 'C'
}

//请注意，for ... in对Array的循环得到的是String而不是Number。

//while循环
//for循环在已知循环的初始和结束条件时非常有用。而上述忽略了条件的for循环容易让人看不清循环的逻辑，此时用while循环更佳。
//while循环只有一个判断条件，条件满足，就不断循环，条件不满足时则退出循环。比如我们要计算100以内所有奇数之和，可以用while循环实现：
var num = 0;
var n = 99;
while(n > 0) {
    num = num + n;
    n = n - 2;
}
console.log(num);//2500

//do ... while
//最后一种循环是do { ... } while()循环，它和while循环的唯一区别在于，不是在每次循环开始的时候判断条件，而是在每次循环完成的时候判断条件：
var n = 0;
do {
    n = n + 1;
}while (n < 100);
console.log(n);

//练习
//请利用循环遍历数组中的每个名字，并显示Hello, xxx!：
var array = ['Bart', 'Lisa', 'Adam'];
//for循环正序遍历
for(var i in array){
    console.log(`Hello,${array[i]}!`);
}

//for循环倒序遍历
var len = array.length;
for(var i = len - 1; i >= 0; i--) {
    console.log(`Hello,${array[i]}!`);
}

//while循环正序遍历
var i = 0;
while(i < array.length){
    console.log(`Hello,${array[i]}!`);
    i++;
}

//while循环倒序遍历
var i = array.length - 1;
while(i >= 0) {
    console.log(`Hello,${array[i]}!`);
    i--;
}

/**
 * Created by enbinye on 2017/6/5.
 */

//转义字符\可以转义很多字符，比如\n表示换行，\t表示制表符，字符\本身也要转义，所以\\表示的字符就是\。
// alert('I\'m \"OK\"\u4e2d\u6587');
/*
由于多行字符串用\n写起来比较费事，所以最新的ES6标准新增了一种多行字符串的表示方法，用反引号 ` ... ` 表示
 `这是一个
 多行
 字符串`;
 *  */

//当前的脚本暂未支持这种形式
// alert(`多行
// 字符串
// 测试`);

console.log();
var name = '小明';
var age = 20;
var message = `你好,${name}, 你今年${age}岁了`;
console.log(message);


//-------操作字符串
var s = 'Hello, World!';
// 需要特别注意的是，字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果
s[0] = 'X';
console.log(s);

//字符串的一些方法
//toUpperCase()把一个字符串全部变为大写
var upper = s.toUpperCase();
console.log(upper);

//toLowerCase()把一个字符串全部变为小写
var lower = s.toLowerCase();
console.log(s);

//indexOf()会搜索指定字符串出现的位置
var index1 = s.indexOf('World');// 返回7
var index2 = s.indexOf('world');// 没有找到指定的子串，返回-1

console.log(index1,index2);

//返回指定索引区间的子串
var subString1 = s.substring(0, 5); // 从索引0开始到5（不包括5），返回'Hello'
var subString2 = s.substring(7); // 从索引7开始到结束，返回'World'
console.log(subString1);
console.log(subString2);








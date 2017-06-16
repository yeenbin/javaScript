/*** Created by enbinye on 2017/6/15.*/

'use strict'
var now = new Date();
console.log(now);//Thu Jun 15 2017 17:11:42 GMT+0800 (CST)
console.log(now.getFullYear());//2017年
console.log(now.getMonth());//5月
console.log(now.getDate());//1号
console.log(now.getDay());//星期四
console.log(now.getHours());//17
console.log(now.getMinutes());//11
console.log(now.getSeconds());//42
console.log(now.getMilliseconds());//654 毫秒数
console.log(now.getTime());//1497517902654 以number形式表示的时间戳

var d = new Date(2015, 5, 19, 20, 15, 30, 123);
console.log(d) // Fri Jun 19 2015 20:15:30 GMT+0800 (CST)

//你可能观察到了一个非常非常坑爹的地方，就是JavaScript的月份范围用整数表示是0~11，0表示一月，1表示二月……，所以要表示6月，我们传入的是5！这绝对是JavaScript的设计者当时脑抽了一下，但是现在要修复已经不可能了。


//***********时区
//Date对象表示的时间总是按浏览器所在时区显示的，不过我们既可以显示本地时间，也可以显示调整后的UTC时间
var d = new  Date(1435146562875);
console.log(d.toLocaleString()); // 北京时间2015-6-24 19:49:22
console.log(d.toUTCString()); // Wed, 24 Jun 2015 11:49:22 GMT (与本地时间相差8小时)

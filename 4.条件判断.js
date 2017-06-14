/**
 * Created by enbinye on 2017/6/8.
 */

//JavaScript使用if () { ... } else { ... }来进行条件判断。
'use strict';
  //多行条件判断
    var age = 20;
    if (age >= 18 ) {
        console.log('成年人');
    }else if (age > 6) {
        console.log('青年人');
    }else{
        console.log('孩子');
    }

//请注意，if...else...语句的执行特点是二选一，在多个if...else...语句中，如果某个条件成立，则后续就不再继续判断了。

//JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true

var s = '123';
if (s.length){
    console.log('这个条件是true的');
}


/*
* 请根据BMI公式（体重除以身高的平方）帮小明计算他的BMI指数，并根据BMI指数：

 低于18.5：过轻
 18.5-25：正常
 25-28：过重
 28-32：肥胖
 高于32：严重肥胖
 */
var height = parseFloat(prompt('请输入身高(m:)'));
var weight = parseFloat(prompt('请输入体重(kg:)'));
var bmi = weight / (height * height);
if (bmi < 18.5) {
    console.log('过轻');
}else if (18.5 <= bmi && bmi < 25)
{
    console.log('正常');
}else if (25 <= bmi && bmi < 28){
    console.log('过重');
}
else if (28 <= bmi && bmi < 32){
    console.log('肥胖');
}else {
    console.log('严重肥胖');
}






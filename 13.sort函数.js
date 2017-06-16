/**
 * Created by enbinye on 2017/6/14.
 */
'use strict'

//通常规定，对于两个元素x和y，如果认为x < y，则返回-1，如果认为x == y，则返回0，如果认为x > y，则返回1，这样，排序算法就不用关心具体的比较过程，而是根据比较结果直接排序。

console.log(['Google', 'Apple', 'Microsoft'].sort());//["Apple", "Google", "Microsoft"]
console.log(['Google', 'apple', 'Microsoft'].sort());//["Google", "Microsoft", "apple"]
console.log([10, 20, 1, 2].sort());//[1, 10, 2, 20]
//这是因为Array的sort()方法默认把所有元素先转换为String再排序，结果'10'排在了'2'的前面，因为字符'1'比字符'2'的ASCII码小。

//sort也是高阶函数
//从小到大排列
var arr = [10, 20, 1, 2];
console.log(arr.sort(function (x,y) {
    if(x > y) {
        return 1;
    }else if(x < y){
        return -1;
    }else {
        return 0;
    }

}));

////从大到小排列
var arr = [10, 20, 1, 2];
console.log(arr.sort(function (x,y) {
    if(x > y) {
        return -1;
    }else if(x < y){
        return 1;
    }else {
        return 0;
    }

}));

//字符串之间的对比(先将字符全部变成大写或者小写再做比较)
var strArr = ['Bread','Cat','apple'];
var strArr1 = strArr.sort(function (s1,s2) {
    var x1 = s1.toUpperCase();
    var x2 = s2.toUpperCase();
    if (x1 < x2) {
        return -1;
    }else if (x1 > x2){
        return 1;
    }
    return 0;
});
console.log(strArr);//["apple", "Bread", "Cat"]
console.log(strArr1);//["apple", "Bread", "Cat"]
console.log(strArr === strArr1);//true
//最后友情提示 sort()方法会直接对Array进行修改,返回的仍是当前的Array。





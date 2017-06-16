/**
 * Created by enbinye on 2017/6/15.
 */
'use strict';

//generator和函数不同的是，generator由function*定义（注意多出的*号），并且，除了return语句，还可以用yield返回多次。
//编写一个产生斐波那契数列的函数
function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 1;
     while(n <= max){
         yield a;
         t = a + b;
         a = b;
         b = t;
         n ++ ;
     }
     return a;
}

for (var x of fib(5))
{
    console.log(x);
}


//要生成一个自增的ID 使用generator改写
function* next_id(){
    var i = 1;
    while(true){
        yield i;
        i ++;
    }
}


// 测试:
var
    x,
    pass = true,
    g = next_id();
for (x = 1; x < 100; x ++) {
    if (g.next().value !== x) {
        pass = false;
        console.log('测试失败!');
        break;
    }
}
if (pass) {
    console.log('测试通过!');
}


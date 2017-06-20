/**
 * Created by enbinye on 2017/6/20.
 */

//在现代浏览器上写AJAX主要依靠XMLHttpRequest对象
//对于低版本的IE，需要换一个ActiveXObject对象


function success(text) {
    var textarea = document.getElementsById('test-response-text');
    textarea.value = text;
}

function fail(code) {
    var textarea = document.getElementsById('test-response-text');
    textarea.value = 'Error code: ' +  code;
}

var request;
//通过检测window对象是否有XMLHttpRequest属性来确定浏览器是否支持标准的XMLHttpRequest.
request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
request.onreadystatechange = function () {//状态发生变化时背回调
    if(request.readyState === 4){//成功完成
        if (request.state === 200){
            //成功,通过responseText拿到响应的文本
            return success(request.responseText);
        }else {
            //失败,根据响应码判断失败原因:
            return fail(request.status);
        }
    }else {
        //HTTP请求还在继续。。。
    }

}

//发送请求:
// request.open('GET','/api/categories');
// request.send();

console.log('请求已发送,请等待响应...');

/*
当创建了XMLHttpRequest对象后，要先设置onreadystatechange的回调函数。在回调函数中，通常我们只需通过readyState === 4判断请求是否完成，如果已完成，再根据status === 200判断是否是一个成功的响应。

 XMLHttpRequest对象的open()方法有3个参数，第一个参数指定是GET还是POST，第二个参数指定URL地址，第三个参数指定是否使用异步，默认是true，所以不用写。

 注意，千万不要把第三个参数指定为false，否则浏览器将停止响应，直到AJAX请求完成。如果这个请求耗时10秒，那么10秒内你会发现浏览器处于“假死”状态。

 最后调用send()方法才真正发送请求。GET请求不需要参数，POST请求需要把body部分以字符串或者FormData对象传进去。
 */


//延迟回调
function callback() {
    console.log('Done');
}

console.log('before setTimeout()');
setTimeout(callback,1000);//1秒后调用callback函数
console.log('after setTimeout()');

//**********************Promise
//这种“承诺将来会执行”的对象在JavaScript中称为Promise对象
new Promise(function () {

});

console.log('支持Promise!');

//先看一个最简单的Promise例子:生成一个0-2之间的随机数，如果小于1，则等待一段时间后返回成功，否则返回失败
function test(resolve, reject) {
    var timeout = Math.random() * 2;
    console.log('setTimeout to' + timeout + 'seconds.');
    setTimeout(function () {
       if(timeout < 1){
           console.log('call resolve...');
           resolve('200 OK');
       }
       else {
           console.log('call rejejct()...');
           reject('timeout in ' + timeout + 'seconds.');
       }
    },timeout * 1000);
}

//可以看出，test()函数只关心自身的逻辑，并不关心具体的resolve和reject将如何处理结果。
//有了执行函数,我们就用一个Promise对象来执行它,并在将来某个时刻获得成功或失败的结果
var p = new Promise(test).then(function (result) {
    console.log(('成功: ' + result));
}).catch(function (reason) {
    console.log('失败: ' + reason);
});

//Promise还可以做更多的事情，比如，有若干个异步任务，需要先做任务1，如果成功后再做任务2，任何任务失败则不再继续并执行错误处理函数。
//job1.then(job2).then(job3).catch(handleError); job1、job2和job3都是Promise对象


var logging = document.getElementById('test-promise2-log');
while (logging.children.length > 1) {
    logging.removeChild(logging.children[logging.children.length - 1]);
}

function log(s) {
    var p = document.createElement('p');
    p.innerHTML = s;
    logging.appendChild(p);
}

// 0.5秒后返回input*input的计算结果:
function multiply(input) {
    return new Promise(function (resolve, reject) {
        log('calculating ' + input + ' x ' + input + '...');
        setTimeout(resolve, 500, input * input);
    });
}

// 0.5秒后返回input+input的计算结果:
function add(input) {
    return new Promise(function (resolve, reject) {
        log('calculating ' + input + ' + ' + input + '...');
        setTimeout(resolve, 500, input + input);
    });
}

var p = new Promise(function (resolve, reject) {
    log('start new Promise...');
    resolve(123);
});

p.then(multiply)
    .then(add)
    .then(multiply)
    .then(add)
    .then(function (result) {
        log('Got value: ' + result);
    });


//将上一节的AJAX异步执行函数转换为Promise对象

function ajax(method, url, data) {
    var request = new XMLHttpRequest();
    return new Promise(function (resolve,reject) {
        request.onreadystatechange = function () {
          if (request.readyState === 4){
                if(request.status === 200){
                    resolve(request.responseText);
                }else {
                    reject(request.status);
                }
          } else {
              console.log('请求还在继续');
          }
        };
    });
}

var log1 = document.getElementById('test-promise-ajax-result');
var p = ajax('GET','/api/categories');
p.then(function (text) {//如果AJAX成功,获得响应的内容
    log1.innerText = text;
}).then(function () {//如果AJAX失败,获得响应代码
  log1.innerText = 'ERROR: ' + status;
});

//除了串行执行若干异步任务外，Promise还可以并行执行异步任务。
var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'P2');
});
// 同时执行p1和p2，并在它们都完成后执行then:
Promise.all([p1, p2]).then(function (results) {
    console.log(results); // 获得一个Array: ['P1', 'P2']
});

//有些时候，多个异步任务是为了容错。比如，同时向两个URL读取用户的个人信息，只需要获得先返回的结果即可。这种情况下，用Promise.race()实现
var p3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P1');
});
var p4 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'P2');
});
Promise.race([p3, p4]).then(function (result) {
    console.log(result); // 'P1'
});

// 由于p3执行较快，Promise的then()将获得结果'P3'。p4仍在继续执行，但执行结果将被丢弃。


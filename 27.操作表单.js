/**
 * Created by enbinye on 2017/6/20.
 */
'use strict';

/*
* HTML表单的输入控件主要有以下几种：

 文本框，对应的<input type="text">，用于输入文本；

 口令框，对应的<input type="password">，用于输入口令；

 单选框，对应的<input type="radio">，用于选择一项；

 复选框，对应的<input type="checkbox">，用于选择多项；

 下拉框，对应的<select>，用于选择一项；

 隐藏文本，对应的<input type="hidden">，用户不可见，但表单提交时会把隐藏文本发送到服务器。

 */

// <input type="text" id="email">
// var input = document.getElementById('email');
// input.value; // '用户输入的值'

//这种方式可以应用于text、password、hidden以及select。但是，对于单选框和复选框，value属性返回的永远是HTML预设的值，而我们需要获得的实际是用户是否“勾上了”选项，所以应该用checked判断：

// <label><input type="radio" name="weekday" id="monday" value="1"> Monday</label>
// <label><input type="radio" name="weekday" id="tuesday" value="2"> Tuesday</label>
// var mon = document.getElementById('monday');
// var tue = document.getElementById('tuesday');
// mon.value; // '1'
// tue.value; // '2'
// mon.checked; // true或者false
// tue.checked; // true或者false


//*******************设置值
// 设置值和获取值类似，对于text、password、hidden以及select，直接设置value就可以：

// <input type="text" id="email">
// var input = document.getElementById('email');
// input.value = 'test@example.com'; // 文本框的内容已更新
// 对于单选框和复选框，设置checked为true或false即可。


function checkForm() {
    var input_pwd = document.getElementById('input-password');
    var md5_pwd = document.getElementById('md5-password');
    // 把用户输入的明文变为MD5:
    md5_pwd.value = toMD5(input_pwd.value);
    // 继续下一步:
    return true;
}

//注意到id为md5-password的<input>标记了name="password"，而用户输入的id为input-password的<input>没有name属性。没有name属性的<input>的数据不会被提交。
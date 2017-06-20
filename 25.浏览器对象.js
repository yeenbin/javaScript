/**
 * Created by enbinye on 2017/6/19.
 */
'use strict';

//window对象不但充当全局作用域，而且表示浏览器窗口

//window对象有innerWidth和innerHeight属性，可以获取浏览器窗口的内部宽度和高度。内部宽高是指除去菜单栏、工具栏、边框等占位元素后，用于显示网页的净宽高。

// 兼容性：IE<=8不支持。
console.log('window inner size is' + window.innerWidth + ' x ' + window.innerHeight);

//对应的，还有一个outerWidth和outerHeight属性，可以获取浏览器窗口的整个宽高
console.log('window outer size is' + window.outerWidth + ' x ' + window.outerHeight);


/*
* navigator对象表示浏览器的信息，最常用的属性包括：

 navigator.appName：浏览器名称；
 navigator.appVersion：浏览器版本；
 navigator.language：浏览器设置的语言；
 navigator.platform：操作系统类型；
 navigator.userAgent：浏览器设定的User-Agent字符串。
 */
console.log('appName = ' + navigator.appName + '\n' +
    'appVersion = ' + navigator.appVersion + '\n' +
    'language = ' + navigator.language + '\n' +
    'platform = ' + navigator.platform + '\n' +
    'userAgent = ' + navigator.userAgent);


//这样既可能判断不准确，也很难维护代码。正确的方法是充分利用JavaScript对不存在属性返回undefined的特性，直接用短路运算符||
var width = window.innerWidth || document.body.clientWidth;


//*************************screen
/*
* screen对象表示屏幕的信息，常用的属性有：

 screen.width：屏幕宽度，以像素为单位；
 screen.height：屏幕高度，以像素为单位；
 screen.colorDepth：返回颜色位数，如8、16、24。

 */
console.log('Screen size = ' + screen.width + ' x ' + screen.height);


//***************************location
//location对象表示当前页面的URL信息。可以用location.href获取。要获得URL各个部分的值
//http://localhost:63342/javaScript/0.index.html?_ijt=656rms5hoppbc253lcvt4l0h4f
console.log(location.protocol); // http:
console.log(location.host); // localhost:63342
console.log(location.port); // '8080'
console.log(location.pathname); // '/path/index.html'
console.log(location.search); // '?a=1&b=2'
console.log(location.hash); // 'TOP'


//要加载一个新页面，可以调用location.assign()。如果要重新加载当前页面，调用location.reload()方法非常方便。
// if(confirm('重新加载当前页面' + location.href +'?')){
//     location.reload();
// }else {
//     location.assign('/javaScript/1.index.html?_ijt=656rms5hoppbc253lcvt4l0h4f');
// }


//用document对象提供的getElementById()和getElementsByTagName()可以按ID获得一个DOM节点和按Tag名称获得一组DOM节点
var menu = document.getElementById('drink-menu');
var  drinks = document.getElementsByTagName('dd');
console.log(menu.innerHTML);
var i,s;
s = '提供的饮料有:';
for (i=0; i<drinks.length; i++) {
    s = s + drinks[i].innerHTML + ',';
}
console.log(s);

//document对象还有一个cookie属性，可以获取当前页面的Cookie。
console.log(document.cookie);

//为了防止第三方JavaScript获取到cookies，服务器在设置Cookie时可以使用httpOnly，设定了httpOnly的Cookie将不能被JavaScript读取。这个行为由浏览器实现，主流浏览器均支持httpOnly选项，IE从IE6 SP1开始支持。
//为了确保安全，服务器端在设置Cookie时，应该始终坚持使用httpOnly。

/*history

 history对象保存了浏览器的历史记录，JavaScript可以调用history对象的back()或forward ()，相当于用户点击了浏览器的“后退”或“前进”按钮。

 这个对象属于历史遗留对象，对于现代Web页面来说，由于大量使用AJAX和页面交互，简单粗暴地调用history.back()可能会让用户感到非常愤怒。

 新手开始设计Web页面时喜欢在登录页登录成功时调用history.back()，试图回到登录前的页面。这是一种错误的方法。

 任何情况，你都不应该使用history这个对象了。
 */


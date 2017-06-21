/**
 * Created by enbinye on 2017/6/21.
 */
'use strict';

console.log(window.jQuery);//function ( selector, context )
console.log(window.$);//function ( selector, context )
console.log($ === jQuery);//true
console.log(typeof($));//function

//$本质上就是一个函数，但是函数也是对象，于是$除了可以直接调用外，也可以有很多其他属性

//如果$这个变量不幸地被占用了，而且还不能改，那我们就只能让jQuery把$变量交出来，然后就只能使用jQuery这个变量

// $; // jQuery(selector, context)
// jQuery.noConflict();
// $; // undefined
// jQuery; // jQuery(selector, context)
//这种黑魔法的原理是jQuery在占用$之前，先在内部保存了原来的$,调用jQuery.noConflict()时会把原来保存的变量还原。

//*************选择器
//jQuery的选择器就是帮助我们快速定位到一个或多个DOM节点。
//①。按ID查找
var div = $('#abc');
console.log(div.get(0));
//返回的对象是jQuery对象
//如果你拿到了一个DOM对象，那可以简单地调用$(aDomObject)把它变成jQuery对象，这样就可以方便地使用jQuery的API了

//②按tag查找 只需要写上tag名称就可以了
var p = $('p');
console.log(p.length);

//③按class查找  按class查找注意在class名称前加一个.
var p1 = $('.p1');
console.log(p1);
//通常很多节点有多个class，我们可以查找同时包含red和green的节点

//④按属性查找
var email = $('[name=email]');
console.log(email);

// 当属性的值包含空格等特殊字符时，需要用双引号括起来。
var icons = $('[name^=icon]'); // 找出所有name属性值以icon开头的DOM
var names = $('[name$=with]'); // 找出所有name属性值以with结尾的DOM
//这个方法尤其适合通过class属性查找，且不受class包含多个名称的影响：
var icons = $('[class^=icon-]');//找出所有class包含至少一个以`icon-`开头的DOM

//⑤组合查找
var  emailspan = $('span[name=email]');
console.log(emailspan);

//⑥多项选择器
//多项选择器就是把多个选择器用,组合起来一块选

var pAndSpan = $('p,span');
console.log(pAndSpan);


//***************练习
//仅选择JavaScript
console.log($('p#para-1.color-red'));
//仅选择Erlang
console.log($('.color-red.color-green'));
//选择JavaScript和Erlang
console.log($('.color-red'));
//选择所有编程语言
console.log($('.color-red,.color-green,.color-black'));
//选择名字input
console.log($('input[name=name]'));
//选择邮件和名字input
console.log($('input[name=name],input[name=email]'));


//*****************层级选择器(支持多层选择)
//格式: $(父节点 子节点1 子节点2);  用空格隔开
//找JavaScript
console.log($('div#test-jquery p#para-1.color-red'));


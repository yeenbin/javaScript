/**
 * Created by enbinye on 2017/6/19.
 */
'use strict';

/*由于HTML文档被浏览器解析后就是一棵DOM树，要改变HTML的结构，就需要通过JavaScript来操作DOM。

 始终记住DOM是一个树形结构。操作一个DOM节点实际上就是这么几个操作：

 更新：更新该DOM节点的内容，相当于更新了该DOM节点表示的HTML的内容；

 遍历：遍历该DOM节点下的子节点，以便进行进一步操作；

 添加：在该DOM节点下新增一个子节点，相当于动态增加了一个HTML节点；

 删除：将该节点从HTML中删除，相当于删掉了该DOM节点的内容以及它包含的所有子节点。

 由于ID在HTML文档中是唯一的，所以document.getElementById()可以直接定位唯一的一个DOM节点。document.getElementsByTagName()和document.getElementsByClassName()总是返回一组DOM节点。要精确地选择DOM，可以先定位父节点，再从父节点开始选择，以缩小范围。

 */

// 返回ID为'test'的节点：
// var test = document.getElementById('test');
//
// // 先定位ID为'test-table'的节点，再返回其内部所有tr节点：
// var trs = document.getElementById('test-table').getElementsByTagName('tr');
//
// // 先定位ID为'test-div'的节点，再返回其内部所有class包含red的节点：
// var reds = document.getElementById('test-div').getElementsByClassName('red');
//
// // 获取节点test下的所有直属子节点:
// var cs = test.children;
//
// // 获取节点test下第一个、最后一个子节点：
// var first = test.firstElementChild;
// var last = test.lastElementChild;
//
// //第二种方法是使用querySelector()和querySelectorAll()，需要了解selector语法，然后使用条件来获取节点，更加方便.
// // 通过querySelector获取ID为q1的节点：
// var q1 = document.querySelector('#q1');
//
// // 通过querySelectorAll获取q1节点内的符合条件的所有节点：
// var ps = q1.querySelectorAll('div.highlighted > p');

//注意：低版本的IE<8不支持querySelector和querySelectorAll。IE8仅有限支持。


//两者的区别在于读取属性时，innerText不返回隐藏元素的文本，而textContent返回所有文本。另外注意IE<9不支持textContent。

// 修改CSS也是经常需要的操作。DOM节点的style属性对应所有的CSS，可以直接获取或设置。因为CSS允许font-size这样的名称，但它并非JavaScript有效的属性名，所以需要在JavaScript中改写为驼峰式命名fontSize

var p = document.getElementById('p-id');
p.innerHTML = 'ABC';
p.style.color = '#ff0000';
p.style.fontSize = '20px';
p.style.paddingTop = '2em';



//********************插入DOM
var hask = document.createElement('p');
hask.id = 'hask';
hask.innerText = 'Hask';
//插入一个新的子节点
p.appendChild(hask);


//把子节点插入到指定的位置
var para = document.createElement('p');
para.id = 'para';
para.innerText = 'Para';
//插入一个新的子节点

var  pID = document.getElementById('p');
p.insertBefore(para,hask);


//********************删除DOM
//要删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的removeChild把自己删掉
p.removeChild(p.children[0]);
// p.removeChild(p.children[1]);
//删除多个节点时，要注意children属性时刻都在变化
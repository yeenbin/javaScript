/**
 * Created by enbinye on 2017/6/5.
 */
'use strict';

//JavaScript的Array可以包含任意数据类型，并通过索引来访问每个元素。

var arr = ['1','2',3,null,true];
var length = arr.length;
console.log(length);

//直接给Array的length赋一个新的值会导致Array大小的变化
var arr2 = [1, 2, 3];
arr2.length; // 3
arr2.length = 6;
arr2; // arr变为[1, 2, 3, undefined, undefined, undefined]
arr2.length = 2;
arr2; // arr变为[1, 2]
console.log(arr2);

//Array可以通过索引把对应的元素修改为新的值，因此，对Array的索引进行赋值会直接修改这个Array
var arr3 = ['A','B','C'];
arr3[1] = 9;
console.log(arr3);

//请注意，如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化
arr3[5] = 'x';
console.log(arr3);//arr3变为['A',9,'C', undefined, undefined, 'x']

//indexOf
//与String类似，Array也可以通过indexOf()来搜索一个指定的元素的位置
arr3.indexOf('A');//元素'A'的索引为0
arr3.indexOf(10);//元素10没有找到 返回索引为-1

//slice()就是对应String的substring()版本，它截取Array的部分元素，然后返回一个新的Array

var arr4 = ['A','B','C','D','E','F','G'];
console.log(arr4.slice(0,3)); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
console.log(arr4.slice(3));// 从索引3开始到结束: ['D', 'E', 'F', 'G']

//注意到slice()的起止参数包括开始索引，不包括结束索引。
//如果不给slice()传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个Array

var copyArray = arr4.slice();
console.log(copyArray);
console.log(copyArray === arr4);


//------push和pop
//push()向Array的末尾添加若干元素，pop()则把Array的最后一个元素删除掉
var arr5 = [1,2];
arr5.push('A','B');
console.log(arr5);
arr5.pop();
console.log(arr5);
arr5.pop();
arr5.pop();
arr5.pop();
arr5.pop();//空数组继续pop不会报错，而是返回undefined
console.log(arr5);

//------unshift和shift
//如果要往Array的头部添加若干元素，使用unshift()方法，shift()方法则把Array的第一个元素删掉

var arr6 = [1,2];
arr6.unshift('A','B');// 返回Array新的长度: 4
console.log(arr6);// ['A', 'B', 1, 2]
arr6.shift(); //'A'
console.log(arr6);
arr6.shift();
arr6.shift();
arr6.shift();// 连续shift 3次
console.log(arr6);
arr6.shift();//空数组继续shift不会报错，而是返回undefined


//--------sort
//sort()可以对当前Array进行排序，它会直接修改当前Array的元素位置，直接调用时，按照默认顺序排序
var arr7 = ['B','c','A',1];
console.log(arr7.sort());

//-----reverse
//reverse()把整个Array的元素给掉个个，也就是反转
var arr8 = ['one','two','three'];
console.log(arr8.reverse());

//-----splice
//splice()方法是修改Array的"万能方法",它可以从指定的索引开始删除元素 然后从该位置元素
var array9 = ['A','B','C','D','E','F','G'];
//从索引2开始删除3个元素
array9.splice(2,3,'H','J','K');//返回删除的元素['C','D','E']
console.log(array9);//['A','B','F','G','H','J','K'];
//只删除 不添加的
array9.splice(2,2);//['F','G','H'];
console.log(array9);//

//------concat
//concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array
var addedArray = array9.concat(arr);
console.log(addedArray);
//concat()方法并没有修改当前Array，而是返回了一个新的Array
//实际上concat()方法可以接收任意个元素和rray，并且自动把Array拆开,然后添加到新的Array中去。
var array10 = ['A','B','C'];
var array11 = array10.concat([1,2,[3,4]]);
console.log(array11);


//11.-----join
// join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：
console.log(array11.join('-'));
//如果Array的元素不是字符串，将自动转换为字符串后再连接。

//12.----多维数组
//如果数组的某个元素也是Array 那么可以形成多维数组
var  array12 = [[1,2,3],[400,500,600],'-'];
//通过索引取到500
var fiveHundred = array12[1][1];
console.log(fiveHundred);

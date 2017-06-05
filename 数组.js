/**
 * Created by enbinye on 2017/6/5.
 */
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

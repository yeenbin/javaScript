/**
 * Created by enbinye on 2017/6/16.
 */
'use strict'

/*
在JSON中，一共就这么几种数据类型：

 number：和JavaScript的number完全一致；
 boolean：就是JavaScript的true或false；
 string：就是JavaScript的string；
 null：就是JavaScript的null；
 array：就是JavaScript的Array表示方式——[]；
 object：就是JavaScript的{ ... }表示方式。
 */
/*
*
* JavaScript中，我们可以直接使用JSON，因为JavaScript内置了JSON的解析
*把任何JavaScript对象变成JSON，就是把这个对象序列化成一个JSON格式的字符串，这样才能够通过网络传递给其他计算机。

 如果我们收到一个JSON格式的字符串，只需要把它反序列化成一个JavaScript对象，就可以在JavaScript中直接使用这个对象了。
* */

//序列化
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

console.log(JSON.stringify(xiaoming));
//输出得好看些,可以加上参数,按缩进输出
console.log(JSON.stringify(xiaoming,null,' '));

//第二个参数用于控制如何筛选的对象的键值,如果我们只想输出指定的属性 可以传入Array
console.log(JSON.stringify(xiaoming,['name','skills'],' '));

//还可以传入一个函数,这样对象的每个键值对都会先被函数处理
function convert(key,value) {
    if(typeof value === 'string'){
        return value.toUpperCase();
    }
    return value;
}

console.log(JSON.stringify(xiaoming,convert,'  '));

//如果我们还想精确的控制如何序列化小明  我们可以给小明定义一个toJSON的方法

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }
};
console.log(JSON.stringify(xiaoming,null,'  '));

//******************反序列化
//拿到一个JSON格式的字符串 我们直接用JSON.parse()把它变成一个JavaScript对象
var ming = JSON.parse('{"name":"小明","age":14}');
console.log(ming);

//JSON.parse()还可以接收一个函数,用来转换解析出的属性
var ming1 = JSON.parse('{"name":"小明","age":14}',function (key,value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});

console.log(ming1);
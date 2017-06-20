/**
 * Created by enbinye on 2017/6/19.
 */

'use strict'

//先回顾Student的构造函数

function Student(props) {
    this.name = props.name || 'Uname';
}

Student.prototype.hello = function () {
  console.log('Hello' + this.name + '!');
};

//基于Student 扩展PrimaryStudent
function PrimaryStudent(props) {
    //调用Student的构造函数
    Student.call(this,props);
    this.grade = props.grade || 1;
}

var xiaoming = new PrimaryStudent({
    name : '小明',
    grade : 2
});
console.log(xiaoming.__proto__ === PrimaryStudent.prototype);//true
console.log(xiaoming.__proto__.__proto__ === Student.prototype);//false
console.log(xiaoming instanceof PrimaryStudent);//true
console.log(xiaoming instanceof Student);//false
/*
* 调用了Student构造函数不等于继承了Student，PrimaryStudent创建的对象的原型是：

 new PrimaryStudent() ----> PrimaryStudent.prototype ----> Object.prototype ----> null
 必须想办法把原型链修改为：

 new PrimaryStudent() ----> PrimaryStudent.prototype ----> Student.prototype ----> Object.prototype ----> null

*/

/*
* JavaScript的原型继承实现方法就是
* 1.定义新的构造函数,并在内部用call()调用希望继承的构造函数,并绑定this。
* 2.借助中间函数F实现原型链继承,最好通过封装的inherist函数完成。
* 3.继续在新的构造函数的原型上定义新方法。
* */

//继承方法
function inherist(Child,Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

//实现原型链的继承
inherist(PrimaryStudent,Student);

//绑定其他的方法到PrimaryStudent上
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
}

var xiaohong = new PrimaryStudent({
    name : '小红',
    grade : 16
});
console.log(xiaohong.getGrade());
console.log(xiaohong.__proto__ === PrimaryStudent.prototype);//true
console.log(xiaohong.__proto__.__proto__ === Student.prototype);//true
console.log(xiaohong instanceof PrimaryStudent);//true
console.log(xiaohong instanceof Student);//true




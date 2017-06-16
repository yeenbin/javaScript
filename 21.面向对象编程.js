/**
 * Created by enbinye on 2017/6/16.
 */
'use strict'
/*
*
* 类：类是对象的类型模板，例如，定义Student类来表示学生，类本身是一种类型，Student表示学生类型，但不表示任何具体的某个学生；

 实例：实例是根据类创建的对象，例如，根据Student类可以创建出xiaoming、xiaohong、xiaojun等多个实例，每个实例表示一个具体的学生，他们全都属于Student类型。

 所以，类和实例是大多数面向对象编程语言的基本概念。

 不过，在JavaScript中，这个概念需要改一改。JavaScript不区分类和实例的概念，而是通过原型（prototype）来实现面向对象编程。

 */

var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

var xiaoming = {
    name: '小明'
};

xiaoming.__proto__ = Student;

//JavaScript的原型链和Java的Class区别就在，它没有“Class”的概念，所有对象都是实例，所谓继承关系不过是把一个对象的原型指向另一个对象而已。

/*
请注意，上述代码仅用于演示目的。在编写JavaScript代码时，不要直接用obj.__proto__去改变一个对象的原型，并且，低版本的IE也无法使用__proto__。Object.create()方法可以传入一个原型对象，并创建一个基于该原型的新对象，但是新对象什么属性都没有，因此，我们可以编写一个函数来创建xiaoming
*/

function createStudent(name) {
    //基于Student原型创建一个新对象:
    var s = Object.create(Student);
    s.name = name;
    return s;
}

var xiaoming1 = createStudent('小明');
xiaoming1.run();
console.log(xiaoming1.__proto__ === Student);
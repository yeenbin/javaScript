/**
 * Created by enbinye on 2017/6/19.
 */
'use strict';

//新的关键字class从ES6开始正式被引入到JavaScript中。class的目的就是让定义类更简单。

class Student {
    constructor(name){
        this.name = name;
    }

    //方法
    hello() {
        console.log('Hello,' + this.name + '!');
    }
}

var xiaoming = new Student('小明');
xiaoming.hello();//Hello,小明!

//****************class继承
//用class定义对象的另一个巨大的好处是继承更方便了。想一想我们从Student派生一个PrimaryStudent需要编写的代码量。现在，原型继承的中间对象，原型对象的构造函数等等都不需要考虑了，直接通过extends来实现：
class PrimaryStudent extends Student {
    constructor(name,grade) {
        super(name);//记得用super调用父类的构造方法
        this.grade = grade;
    };

    myGrade() {
        console.log('I am at grade' + this.grade);
    }

}

//PrimaryStudent已经自动获得了父类Student的hello方法，我们又在子类中定义了新的myGrade方法。
//简而言之，用class的好处就是极大地简化了原型链代码。

//现在用还早了点，因为不是所有的主流浏览器都支持ES6的class。如果一定要现在就用上，就需要一个工具把class代码转换为传统的prototype代码，可以试试Babel这个工具。


//*******************练习
//请利用class重新定义Cat，并让它从已有的Animal继承，然后新增一个方法say()，返回字符串'Hello, xxx!'
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal {
    // constructor(name) {
    //     super(name);
    // }
    say() {
        return 'Hello, ' + this.name + '!';
    }
}

var cat = new Cat('小猫');
console.log(cat.name);
console.log(cat.say());


// 测试:
var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
if ((new Cat('x') instanceof Animal) && kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}
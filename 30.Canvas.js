/**
 * Created by enbinye on 2017/6/21.
 */
'use strict';

var canvas = document.getElementById('test-canvas');
//getContext('2d')方法让我们拿到一个CanvasRenderingContext2D对象，所有的绘图操作都需要通过这个对象完成。
var ctx = canvas.getContext('2d');

console.log(ctx);
//如果需要绘制3D怎么办？HTML5还有一个WebGL规范，允许在Canvas中绘制3D图形

var gl = canvas.getContext("webgl");

console.log(gl);

//Canvas的坐标以左上角为原点，水平向右为X轴，垂直向下为Y轴，以像素为单位，所以每个点都是非负整数。


//利用Path绘制复杂路径:
//绘制图画
function canvasPic() {
    ctx.clearRect(0,0,200,200);// 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
    ctx.fillStyle = '#dddddd';//设置颜色
    ctx.fillRect(10,10,130,130);//把(10,10)位置大小为130x130的矩形涂色

    var path = new Path2D();
    path.arc(75,75,50,0,Math.PI*2,true);
    path.moveTo(110,75);
    path.arc(75, 75, 35, 0, Math.PI, false);
    path.moveTo(65, 65);
    path.arc(60, 65, 5, 0, Math.PI*2, true);
    path.moveTo(95, 65);
    path.arc(90, 65, 5, 0, Math.PI*2, true);
    ctx.strokeStyle = '#0000ff';
    ctx.stroke(path);
}

//绘制文字
function canvasText() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.shadowColor = '#666666';
    ctx.font = '24px Arial';
    ctx.fillStyle = '#333333';
    ctx.fillText('带阴影的文字',20,40);
}


/*Canvas除了能绘制基本的形状和文本，还可以实现动画、缩放、各种滤镜和像素转换等高级操作。如果要实现非常复杂的操作，考虑以下优化方案：

 通过创建一个不可见的Canvas来绘图，然后将最终绘制结果复制到页面的可见Canvas中；

 尽量使用整数坐标而不是浮点数；

 可以创建多个重叠的Canvas绘制不同的层，而不是在一个Canvas中绘制非常复杂的图；

 背景图片如果不变可以直接用<img>标签并放到最底层。
 */

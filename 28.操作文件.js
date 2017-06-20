/**
 * Created by enbinye on 2017/6/20.
 */
'use strict';
//在HTML表单中，可以上传文件的唯一控件就是<input type="file">
//注意：当一个表单包含<input type="file">时，表单的enctype必须指定为multipart/form-data，method必须指定为post，浏览器才能正确编码并以multipart/form-data格式发送表单的数据。出于安全考虑，浏览器只允许用户点击<input type="file">来选择本地文件，用JavaScript对<input type="file">的value赋值是没有任何效果的。当用户选择了上传某个文件后，JavaScript也无法获得该文件的真实路径

function checkFile() {
    var f = document.getElementById('test-file-upload');
    var filename = f.value; // 'C:\fakepath\test.png'
    if (!filename || !(filename.endsWith('.jpg') || filename.endsWith('.png') || filename.endsWith('.gif'))) {
        alert('Can only upload image file.');
        return false;
    }else {
        alert('允许上传');
    }

}
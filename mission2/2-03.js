'use strict';

function datetimeshow(){
    var datetime = new Date();
    // alert(datetime);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    var day = datetime.getDate();
    var hour = datetime.getHours();
    var minute = datetime.getMinutes();
    var second = datetime.getSeconds();
    var datetime_jp = `${year}年${month}月${day}日${hour}時${minute}分${second}秒`;
    // alert(datetime_jp);
    var object = document.getElementById("datetime");
    object.innerText = datetime_jp;

    // ここは勝手にいれたもの. 
    var newObject = document.createElement('div');
    newObject.textContent = "hello";
    object.appendChild(newObject);

    
}
'use strict';
var array = new Array("山田", "田中", "鈴木");
console.log(array[0]);

var omikuji = ["大吉", "中吉", "小吉"];
for(var ele of omikuji){ // of じゃなくて in だとインデックスが表示される. 
    console.log(ele);
}
for(var i=0; i<omikuji.length; i++){
    console.log(omikuji[i]);
}
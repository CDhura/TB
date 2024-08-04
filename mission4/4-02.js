'use strict';
var r = Math.random(); // 0以上1未満の数字が発生する。
console.log(r);

var r1 = Math.floor(r); // 切り捨て
var r2 = Math.ceil(r); // 切り上げ
var r3 = Math.round(r); // 四捨五入

for(var i=0; i<20; i++){
    var rd = 5 * Math.random();
    var intRd = Math.floor(rd);
    console.log(intRd);
}


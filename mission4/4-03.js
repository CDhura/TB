'use strict';
var omikuji = new Array("大吉", "吉", "中吉", "小吉", "凶");
var omikuji_count = new Array(omikuji.length);
omikuji_count.fill(0);
for(var i=0; i<200; i++){
    var random_idx =  Math.floor(omikuji.length * Math.random());
    // console.log(omikuji[random_idx]);
    omikuji_count[random_idx]++;
}

for(var i=0; i<omikuji_count.length; i++){
    console.log(`${omikuji[i]}: ${omikuji_count[i]}回`);
}

var random_idx = Math.floor(omikuji.length * Math.random());
var element = document.getElementById("id1");
element.innerText = omikuji[random_idx];
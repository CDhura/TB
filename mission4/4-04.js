'use strict';

function onclickSample(){
    var element = document.getElementById("id1");
    var omikuji = ["大吉", "中吉", "小吉"];

    // omikujiのインデックスをランダムに決める　
    var rand_idx = Math.floor(omikuji.length * Math.random());
    // console.log(omikuji[rand_idx]); //テスト
    element.innerText = `${omikuji[rand_idx]}`;
}
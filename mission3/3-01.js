'use strict';

function printGreeting(name, greeting){
    console.log(`${name}さん、${greeting}`);
}

var name = "関";
var greeting = "こんにちは";
console.log(name + "さん、" + greeting);
name = "中川";
greeting = "こんばんは";
console.log(name + "さん、" + greeting);

name = "山田";
greeting = "おはよう";
printGreeting(name, greeting);
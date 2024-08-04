'use strict';
var M = 30;
for(var i=0; i<M; i++){
    if(i % 3 === 0){
        if(i % 5 === 0){
            console.log("FizzBuzz");
        }else{
            console.log("Fizz");
        }
    }else{
        if(i % 5 === 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
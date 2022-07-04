// sync or blocking model in js 
const fs = require('fs');
const text = fs.readFileSync('try.html','utf-8');
console.log("This is a blocking model --> : \n" +text);

// assync or non blocking element in js
fs.readFileSync('try.html','utf-8',(data)=>{
    console.log("Try html file have been readead sucessfully and the error will not print here")
})
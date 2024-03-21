//SYNCHRONOUS

//const {readFileSync , writeFileSync}= require('fs')
//first method 
const {readFileSync , writeFileSync} = require('fs')
//second method 
const fs= require('fs')
console.log('start')
const first= fs.readFileSync('./content/first.txt', 'utf8')
const second= fs.readFileSync('./content/second.txt', 'utf8' )


fs.writeFileSync('./content/result-sync.txt' , 
 `here is the result: ${first} , ${second}` ,{flag:'a'}, 'utf-8' )
console.log('done')
console.log ('starting next one')

// npm : node package manger
//  npm enables us to do three things:
//1-reuse our own code in other projects 
//2-use code written by other developers
//3-  lastly share our own solutionswith other developers as well
//nots1 :npm calls the reusable code a package and a package essentially is a folder that contains a javascript code
//nots2 :now another names you'll hear are modules and dependencies 
//nots3 :there is no quality control in npm registry anyone can publish anything
//lowdash is utility library  

const _ = require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

//2:02 //MrWahba
//git init 
//git add .
// git config --global user.name "MrWahba"
// git config --global user.email "abo.aseem.mc@gmail.com"
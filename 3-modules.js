//Modules -encapsulated code (only share minimum)
//commonjs, every  file is module (by default)
//second way 
// const {john , mohamad}  
// for export the varliabls ---> {x ,y , z}
// for export the fanction --->  name fanction 


const x = require('./4-names');
const sayhi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mine-grenade')
//sayhi('susan')
// sayhi(x.mohamad)
// sayhi(x.john) 

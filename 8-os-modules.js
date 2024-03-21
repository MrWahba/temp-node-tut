// os module    
const os = require('os') 
//into about current user
const user= os.userInfo()
console.log(user) ; 

//method returns the system uptime in seconds 
console.log (`${os.uptime()}`); 

const currentos={
    name :os.type(), 
    release:os.release(), 
    totalmem:os.totalmem(), 
    freemem:os.freemem(), 

}
console.log(currentos) ;
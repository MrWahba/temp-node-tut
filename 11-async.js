const { readFile, writeFile } = require('fs')
console.log ('start') 
readFile('./content/first.txt', 'utf-8', (err, results) => {
    if (err) {
        console.log(err);
        return
    }
    const first = results;

    readFile('./content/second.txt', 'utf-8', (err, results) => {
        if (err) {
            console.log(err);
            return 
        }
        const second = results;
        writeFile('./content/result-sync.txt', `here is : ${first} , ${second}`, (err, results) => {
            if (err) {
                console.log(err);
                return
            }
            console.log('done with this task ');
        })


    })

})

console.log ('starting next') ;  

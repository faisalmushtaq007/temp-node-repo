const { readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8' , (error, result) => {
    if(error) {
        console.log(error)
        retrun;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (error, result)=>{
        if(error){
            console.log(error)
            return;
        }
        const second = result
        writeFile('./content/result-async.txt', 
        `Here is the new result ${first}, ${second}`)
    })
})
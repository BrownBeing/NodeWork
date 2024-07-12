// console.log("I am here");

//const {readFileSync, writeFileSync} = require('fs');
const {readFile , writeFile} = require('fs');

const path = require('path');

readFile(path.join(__dirname, './content', 'reply.txt'), 'utf-8', (err, data)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(data);
    const reply = data;
    writeFile(path.join('./content', 'newReply.txt'), `${reply}`, (err)=>{
        if(err){
            console.log(err);
        }
        console.log("FILE written")

    })
})



//const fs = require('fs');


// const first = readFileSync(path.join(__dirname, 'content','first.txt'),'utf-8')
// const second = readFileSync('./content/subfolder/reply.txt', 'utf-8')
// writeFileSync('./content/third.txt', `${first +" "+ second}`, {flag:'a'})
// const third = readFileSync('./content/third.txt', 'utf-8')   

// console.log(path.join(__dirname, 'content','first.txt'))
// console.log(first, second)
// console.log(third)

// // const os = require('os');
// // console.log(os.type());
// // console.log(os.version());
// // console.log(os.homedir());
// // console.log(__dirname)

// // console.log(path.parse(__filename))

// // console.log(maths.add(4,3))



// fs.readFile(path.join(__dirname,'test.txt'),'utf-8', (err,data) =>{
//     if(err)throw err;
//         console.log(data);
    
// })

// fs.writeFile(path.join(__dirname, 'reply.txt'), 'happy to write first file',(err)=>{
//     if(err) throw err;
//     console.log('file written')
// })

// fs.appendFile(path.join(__dirname, 'test.txt'), '\t am another line', (err)=>{
//     if (err) throw err;
//     console.log('file appended');
// })

// console.log(path.resolve('test.txt'))
// console.log(os.uptime()/360)
// console.log(path.sep)
// console.log(path.join(__dirname, 'happy'))
// console.log(__dirname)



import fs from 'fs';

const konten = "hello\n";
fs.appendFile("file.txt",konten,err => {
    if(err){
        console.err;
        return;
    }
});

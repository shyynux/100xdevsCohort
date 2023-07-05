// A program that writes to a file

// We will use fs

const fs = require('fs');

// the fs module from the Node.js standard library is used to interact with the file system. 
//  'require' is a keyword used in Node.js to import modules or files.

// SYNTAX = fs.writeFile(path, content, callback);

const content = "Hi, this is me, I am back!";

const filePath = "file1.txt";

fs.writeFile(filePath, content, (err) => {
    if(err){
        console.log("OOPS, my bad, there is an error.");
        return;
    }
    console.log("File updated successfully.");
});

// Things to note - If the file does not exists, this command creates a new file as well in the mentioned filepath.
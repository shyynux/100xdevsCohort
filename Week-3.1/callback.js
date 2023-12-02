const fs = require('fs');

function callback(err, data){
  console.log(data);
}

fs.readFile("a.txt", "utf-8", callback);

fs.readFile("a.txt", "utf-8", function(err, data){
  console.log("anon: ", data);
});

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(" arrow fun ", data);
});



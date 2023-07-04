// A program that does an HTTP call

// For this we are using the HTTP - module

const fs = require('fs');
const http = require("http");
const https = require('https');

const url = "http://jsonplaceholder.typicode.com/posts";

// We will use the http.get() method
// SYNTAX - http.get(url, options, callback)
// options (object, optional): An object containing additional options for the HTTP request, 
// such as headers or query parameters. This parameter is optional, and we can omit it if not needed.

// without options and error handling
//http.get(url, callback);

// Handling error
http.get(url, callback).on('error', (error) => {
    console.error('Error:', error.message);
});

// Create a file with the response received
var count = 0;
function writeResponsetofile(data, filename){
    count++;
    console.log("This function is called the ", count, "times.");
    fs.writeFile(filename, data, (err) => {
        if(err){
            console.log("MISSION ABORTED, Problem in writing to file!!!");
            return;
        }
        console.log("Response stored in a file safely.");
    });
}

// The callback function takes one argument, which is the response object or an error object.
function callback(response){

    let data = ' ';

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        // console.log('Response:', data);
        writeResponsetofile(data, 'response.json');
    });
}

/* Write another similar function for https request */

const path = "https://api.github.com/users/";
const username = 'shyynux';
const githubURL = path + username;

// We can specify path, method  in options as well
// path: '/users/' + username + '/repos', method: 'GET',
var options = {
    headers: {'user-agent': 'node.js'}
};


https.get(githubURL, options, getUserDetails).on('error', (err) => {
    if(err){
        console.log("There was a problem, SORRY :(, but it was YOU!");
        return;
    }
    console.log("Success, You are Amazing!");
});

function getUserDetails(response){

    let data = ' ';

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        writeResponsetofile(data, 'shyynux.json');
    })

}

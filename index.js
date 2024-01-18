
let express = require('express');

/* 
    app set up
*/

let app = express();


/* 
    server set up
*/

let server = app.listen(4000,()=>{
    console.log("project is runnin on localhost:4000");
});

// route setup

app.get("/",(res,req) => {
    req.sendFile(__dirname + "/public/index.html");
});
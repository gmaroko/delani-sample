const express = require('express');
const homeRouter = require("./routes/home");

const app = express();

app.set('view engine', "ejs");

app.use(homeRouter.router);

// process.env.DB_URL

app.listen(5500, ()=>{
    console.log("Application is starting...");
});
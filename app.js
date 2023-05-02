const express = require('express');
const homeRouter = require("./routes/home");
const loginRouter = require("./routes/login");
const app = express();

app.set('view engine', "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(homeRouter.router);
app.use(loginRouter);

// process.env.DB_URL

app.listen(5500, ()=>{
    console.log("Application is starting...");
});
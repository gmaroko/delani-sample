const express = require('express');

const router = express.Router();

router.get("/login", (req, res)=>{
    console.log("Home page accessed.");
    let data = "Eliud Gateri"
    res.render("login", {title: "Login Page", data: data});
    res.end();
});

router.post("/login", (req, res)=>{
    var details = {
        name: req.body.name,
        password: req.body.password,
    
      };
    
      console.log(res);
    
      res.send(
        "<p>You have successfully logged in with below details:- </p><p><strong>Name:</strong> " +
          details.name +
          " </p><p> <strong>Password (Plain Text): </strong>" +
          details.password +
          " </p><p><a href =/>Home</a></p>"
      );
      res.end();
});

module.exports = router;
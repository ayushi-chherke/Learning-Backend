// Middleware
// Common middleware functions :
// *   methodOverride v
// *   bodyParser
// *   express.static
// *   express.urlencoded
// PUT
// DELETE
// app.use (express.urlencoded ({ extended: true })) ;
// app-use(express static(path.join(__dirname, "/public")));

// What do middlewares do?
// Middleware functions can perform the following tasks:
// *   Execute any code.
// *   Make changes to the request and the response objects.
// *   End the request-response cycle.
// *   Call the next middleware function in the stack.

const express = require("express");
const app =express();

//Our first middleware,on account to it ye next middleware kabhi call karega hi nhi 


// app.use("/random",(req,res)=>{
// console.log("Heyyy");
// res.send("res.send->on frontend");
// });

// app.use(()=>{
//     console.log("Hii,I'm middleware!!");
// });
//middleware response send 
// app.get("/",(req,res)=>{
// res.send();
// });




//Now using next use se link create hogi for next middleware execution 
//Cookie parser is a kind of--
// app.use("/random",(req,res,next)=>{
//     console.log("Heyyy");
//     res.send("res.send-> on frontend");
//     next();
//     });
    
//     app.use((req,res,next)=>{
//         console.log("Hii,I'm 1st middleware!!");
//         next();
//     });
//     app.use((req,res,next)=>{
//         console.log("Hii,I'm 2nd middleware!!");
//         next();
//     });

//looger morgan 

app.use((req,res,next)=>{
req.time = Date.now();
console.log(req.method, req.hostname,req.path, req.time);
next();
});

app.use((req,res)=>{
// res.status(404).send("page not found");
res.send("I,m here");
}); 

app.listen(8080,(req,res)=>{
    console.log("LIstining on port 8080");
    });
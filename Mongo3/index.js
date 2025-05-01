const express = require("express");
const app = express();

const Chat = require("./models/chat");
const path = require("path");

const methodOverride = require("method-override");
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method")); //for updating the msg(put method)
const mongoose = require("mongoose");

//Parsing data-
app.use(express.urlencoded({extended:true}));

main()
    .then(() => {
        console.log("Connection sucessful");
    })
    .catch((err) => {
        console.log(err)
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

app.listen(8080, () => {
    console.log("Listening on port 8080");
});

//Index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", { chats });
});

//New Route
app.get("/chats/new", async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("new.ejs", { chats });
});

//Create route 
app.post("/chats",(req,res) => {
    let{from,to,msg} = req.body;
    let newChat= new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    newChat
    .save()
    .then(() => {
        console.log("Connection sucessful");
    })
    .catch((err) => {
        console.log(err)
    });
    res.redirect("/chats");
});

//Edit Route-
app.get("/chat/:id/edit", async (req, res) => {
    let {id}= req.params;
    let chat = await Chat.findById(id);
    console.log(chat);
    res.render("edit.ejs",{chat});
});

//Update Route-
app.put("/chats/:id",async(req,res) => {
    let{id} = req.params;
    let {msg:newMSg}= req.body;
    console.log(newMSg);
    let updatedChat = await Chat.findByIdAndUpdate(
       id,
       {msg: newMSg},
       {runValidators: true, new:true }
    );
     //  console.log(updatedChat);
       res.redirect("/chats");
});

//Delete Route
app.delete("/chats/:id",async(req,res)=>{
    let{id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});
app.get("/", (req, res) => {
    res.send("Root is working");
});

/*
let chat1= new Chat({
    from:"neha",
    to:"Priya",
    msg:"All the best",
    created_at:new Date(),
});

chat1.save();
*/
const mongoose = require("mongoose");
const Chat=require("./models/chat");
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

let chats = [
    {
        from: "Neha",
        to: "Preeti",
        msg: "Teach me JS",
        created_at: new Date(),
    },
    {
        from: "rsishi",
        to: "Parth",
        msg: "Teach me oop",
        created_at: new Date(),
    },
    {
        from: "payal",
        to: "Pret",
        msg: "hey, its hot today",
        created_at: new Date(),
    },
    {
        from: "heyaa",
        to: "rihaa",
        msg: "love too study",
        created_at: new Date(),
    },
    {
        from: "rim",
        to: "astha",
        msg: "Teach her",
        created_at: new Date(),
    },
    {
        from: "sejal",
        to: "shraddha",
        msg: "No more cesa ",
        created_at: new Date(),
    },
    {
        from: "nobody",
        to: "sheemar",
        msg: "stop it now ",
        created_at: new Date(),
    },
];

Chat.insertMany(chats);
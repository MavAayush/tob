const mongoose = require("mongoose");

const DB = "mongodb://root:12345@cluster0-shard-00-00.sdywd.mongodb.net/Keshriweb?replicaSet=atlas-5pw8ij-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB).then(()=>console.log("data base connected"))
.catch((error)=>
// console.log("data base not connected"),
console.log("error"+error.message));


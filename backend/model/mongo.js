const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/collection_DB",  {useNewUrlparser:true}, {useUnifiedTopology:true})
.then((data)=>{
    console.log(`mongo connected success ${data.connection.host}`);
}).catch((err)=>{
    console.log(err.message);
})

const Schema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },useremail:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    token:{
        type:String,
        require:true
    }
}) 

const Collection = new mongoose.model("AuthCollection",Schema)

module.exports = Collection
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const Collection = require("./model/mongo");
const jwt =require("jsonwebtoken");
const cookieParser =require("cookie-parser");
const bcryptjs=require("bcryptjs");

dotenv.config({path:"./Config/config.env"});

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

const Register = path.join(__dirname , '../Client/Register');
const staticPathstyle = (path.join(__dirname , "../Client"));
app.use(express.static(Register));
app.use(express.static(staticPathstyle));
// const register = path.join(__dirname , "../Client/Register/login.html")
// const login = path.join(__dirname + "../client/index.html")

async function hashPass(password){
    const res = await bcryptjs.hash(password,10)
    return res
}
async function compare(userPass,hashPass){
    const res = await bcryptjs.compare(userPass,hashPass)
    return res
}

const users = [
    {username:"shaheem", password:"123456"},
    {username:"dhawood", password:"654321"},
]

app.get("/home",(req,res)=>{
    const {token} = req.cookies
    console.log(token);

    jwt.verify(token, process.env.JWT_SECRET_KEY, function(err,result){
        if(err){
           res.redirect("/login")
        }else{
            res.redirect('/')
        }
    })
});

app.get("/login", (req,res) => {
    res.sendFile(path.join(__dirname , "../Client/Register/login.html"))
});

app.get("/signup", (req,res) => {
    res.sendFile(path.join(__dirname , "../Client/Register/signup.html"))
});

app.post("/signup",async(req,res) =>{
   
    const {username, password} = req.body;
    const user = users.find((data) => data.username === username && data.password === password);

    if(user){
        const datas = {
            username,
            date:Date(),
        }
        const token = jwt.sign(datas,process.env.JWT_SECRET_KEY,{expiresIn:"10min"})      
        const data = {
            username:req.body.username,
            useremail:req.body.useremail,
            password:await hashPass(req.body.password),
            token:token
        }  
        await Collection.insertMany([data])
        res.cookie("token", token).redirect("/")
    }else{
        res.status(500).send("Authetication failed")      
    }      
    
});

app.post("/login",async(req,res) => {

    const users = [
        {useremail:"shaheem@gmail.com", password:"123456"},
        {useremail:"dhawood@gmail.com", password:"654321"},
    ]

    const {useremail, password} = req.body;
    const user = users.find((data) => data.useremail === useremail && data.password === password);

    if(user){
       res.redirect("/home")
    }else{
      res.redirect("/signup")  
    }      
});

app.get("/",(req,res)=>{
    res.sendFile((path.join(__dirname , "../Client/index.html")))
})

app.listen(process.env.PORT,() =>{
    console.log(`server runing on  port ${process.env.PORT}`);
})
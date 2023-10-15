const mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
const path=required("path")
const multer=require("multer")



const upload=multer()

const app=express()
 app.use(cors())
 app.use(express.static(path.join(__dirname,"./client/build")))

 
app.listen(4017,()=>{
    console.log("listening to port 4017")
})

let connectionToMDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://charansai:Charan63@cluster0.c42ge1g.mongodb.net/guvi1?retryWrites=true&w=majority")
        console.log("connection to mdb")
    } catch (error) {
        console.log("unable to connect") ;
        console.log(error)
    }
}

let dataSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
   
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    conformpassword:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    mobileNo:{
        type:String,
        required:true,
    },    
})
let Data=new mongoose.model("data",dataSchema);

app.post("/Signup",upload.none(),async (req,res)=>{
    let data=new Data({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        conformpassword:req.body.password,
        age:req.body.age,
        gender:req.body.gender,
        mobileNo:req.body.mobileNo,
    })
    try {
        await Data.insertMany([data])
        console.log(data)
        res.json(data)
    } catch (error) {
      console.log("something wrong")
      console.log(error)  
    }
})
  
app.post("/login",upload.none(),async (req,res)=>{
    let data= await Data.find({email:`${req.body.email}`})
    console.log(data);
    if(req.body.password == data[0].password){
        res.json({
            email:data[0].email,
            name: data[0].name,
            age:data[0].age,
            gender:data[0].gender,
            mobileNo:data[0].mobileNo,
           IsLoggedIn: true,
           Data: data,
        })
    }else{
        res.json({
            msg: "Invalid username or password",
             IsLoggedIn: false,   
        })
    }
})

connectionToMDB();

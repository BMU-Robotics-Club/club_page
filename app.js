const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const multer = require("multer");


// ! define storage for the images 
const storage = multer.diskStorage({
    // destination for files.
    destination:(request,response,callback)=>{
      callback(null,__dirname + "/public/uploads/images");
    },
    // add back the file extension
    filename:(request,file,callback)=>{
      callback(null,Date.now() + file.originalname);
    }
  });
  
  // ! upload parameters for multer
  const upload = multer({
    storage:storage
  });

  const app = express();
// ? List for posts 
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://jaladisishir:Test-123@cluster0.58bhe.mongodb.net/blogDB",{useNewUrlParser:true});
const blogSchema = {
  blogTitle:{
    type:String,
    minLenght:1,
    required:true
  },
  blogBody:{
    type:String,
    minLenght:30,
    required:true
  },
  blogImg:{
    type:String,
    default:"/placeholder.png"
  }
};
const Blog = mongoose.model('Blog',blogSchema);

// ! ROUTING

// * / -> home
app.get('/',(req,res)=>{
    res.render('home');
});

// * /events -> events
app.get('/events',(req,res)=>{
    res.render('events');
});
// * /teams -> teams
app.get('/teams',(req,res)=>{
  res.render('teams');
});

// * /blogs -> blogs
app.get('/blogs',(req,res)=>{
   res.render('error');
});



// ! Setting server to a port 
app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  


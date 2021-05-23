const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const multer = require("multer");
const date = require(__dirname+"/date.js");

// ! define storage for the images 
const storage = multer.diskStorage({
    // destination for files.
    destination:(request,response,callback)=>{
      callback(null,__dirname + "/public/uploads/images/");
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

mongoose.connect("mongodb://localhost:27017/blogDB",{useNewUrlParser:true});
const blogSchema = {
  blogAuthor:{
    type:String,
    minLenght:5,
    required:true
  },
  blogTitle:{
    type:String,
    minLenght:1,
    required:true
  },
  blogDate:{
    type:String,
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
   res.render('blogs');
});

app.get('/compose',(req,res)=>{
  res.render('compose');
});

app.post('/compose',upload.single("image"),(req,res)=>{
  console.log(req.file);
  console.log(req.body);
  // todo : save the post to database
  let blogDic = {
    "blogAuthor":req.body.authorName,
    "blogTitle":req.body.blogTitle,
    "blogDate":date.getDate(),
    "blogBody":req.body.blogBody
  };
  if(req.file !== undefined){
    blogDic.blogImg = "/uploads/images/"+req.file.filename;
  }
  console.log(blogDic);
  const blog = new Blog(blogDic);
  blog.save((err)=>{
    if(!err){
      res.redirect('/blogs');
    }
  });
});

// ! search results 
app.post('/search',(req,res)=>{
  console.log(req.body);
  res.redirect('/blogs');
});

app.get('/error',(req,res)=>{
  res.render('error');
});

// ! Setting server to a port 
app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  


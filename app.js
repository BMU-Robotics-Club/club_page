const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const multer = require("multer");
const date = require(__dirname+"/date.js");
const errTitle = "404 Page Not Found ... ";
const noBlogTitle = "Blogs coming soon ..."

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

app.get('/events/registration',(req,res)=>{
  res.render('eventRegistrationForm');
});
// * /teams -> teams
app.get('/teams',(req,res)=>{
  res.render('teams');
});

// * /blogs -> blogs
app.get('/blogs',(req,res)=>{
   Blog.find().sort({$natural:-1}).exec((err,result)=>{
    if(err) console.log(err);
    else{
      if(result.length !== 0){
        console.log(result);
        res.render('blogs',{
          "recentArTitle":result[0].blogTitle,
          "recentArImg":result[0].blogImg,
          "recentArBody":result[0].blogBody,
          "recentArDate":result[0].blogDate,
          "recentArId":result[0]._id,
          "smallArr":result.slice(4),
          "sideArr":result.slice(1,4)
        });
      }
      else{
        console.log(result);
        console.log(typeof(result));
        res.render('error',{
          "errTitle":noBlogTitle
        });
      }
     
    }

   });
});

app.get('/blogs/:blogID',(req,res)=>{
  console.log(req.params);
  
  res.render('error',{
    "errTitle":"Wait for sometime .."
  });
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
  res.render('error',{
    "errTitle":errTitle
  });
});

// ! Setting server to a port 
app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  


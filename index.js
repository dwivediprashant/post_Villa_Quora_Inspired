const express=require("express");
const app=express();
const port =3000;
const path=require("path");
const {v4 : uuidv4}=require("uuid");
const methodOverride=require("method-override");
const multer=require("multer")

let postData=require("./data.json");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


//////-----------multer setup----////
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/uploads");
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now()+path.extname(file.originalname));
    }
});

const upload=multer({storage});

///-------------------------------------///
app.get("/posts",(req,res)=>{
    res.render("Home",{postData});
})
app.get("/posts/new",(req,res)=>{
    res.render("Form");
})
app.get("/posts/myPosts",(req,res)=>{
    let user=req.query.username;
    // let myPosts=[];
    let myPosts=(postData.filter((ele)=>{
        return ele.username==user.trim();
    }));
    // for(let post of postData){
    //     if(post.username==user){
    //         myPosts.push(post);
    //     }
    // }
    // console.log(myPosts);
    myPosts[0]==null? res.status(404).render("NoUser", { user }): res.render("myPosts",{myPosts}) ;
})
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    // console.log(id);
    let reqPost;
    for(let p of postData){
        if(p.postId==id){
            reqPost=p;
        }
    }
    res.render("Detail",{reqPost});
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let reqPost;
    for(let p of postData){
        if(p.postId==id){
            reqPost=p;
        }
    }
    res.render("Edit",{reqPost});
})

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let editData=req.body;
    let reqPost;
    for(let p of postData){
        if(p.postId==id){
            reqPost=p;
        }
    }
    reqPost.post.description=editData.description;
    // res.send("patch request");
    res.redirect("/posts");
})

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    postData=postData.filter((ele)=> ele.postId!=id);
    // console.log(postData);
    res.redirect("/posts");
})

app.post("/posts",upload.single("image"),(req,res)=>{
    let {username ,description }=req.body;
    username=username.trim();
    let postId=uuidv4();
    let like=0;
    let dislike=0;
    let image=req.file ? `uploads/${req.file.filename}` : null;
    postData.unshift({postId,username,post:{like,dislike,description},image});
    res.redirect("/posts");
})

app.listen(port,()=>{
    console.log(`server running at port ${port}`)
})
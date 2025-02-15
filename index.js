import express from "express"
import bodyParser from "body-parser"
const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("page1.ejs.");
})

app.listen(port,()=>{
    console.log(`erver running live on port ${3000}` );
})


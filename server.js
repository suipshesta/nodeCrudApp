const express=require('express');


const app=express();
const PORT=process.env.PORT||8080;


// creating raute
app.get('/',(req,res)=>{
    res.send("Crud app loi loi");
});

app.get('/login',(req,res)=>{
    res.send
});
app.listen(PORT,()=>console.log(`server is running on http://localhost:${PORT} `));
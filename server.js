const express=require('express');

const app=express();
const PORT=process.env.PORT||8080;
app.get('/',(req,res)=>{

    res.send("Crud app loi loi");

});

app.listen(PORT,()=>console.log(`server is running on http://localhost:${PORT} `));
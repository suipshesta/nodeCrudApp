// const express=require('express');
// const app=express();
// const PORT=process.env.PORT||8080;
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/views/index.html');
// });
// app.listen(PORT,()=>console.log(`server is running on http://localhost:${PORT} `));


const express=require('express');
const app=express();
const path=require('path');
const PORT=process.env.PORT||3000;

const http=require('http').createServer(app);

http.listen(PORT,()=>{
console.log(` server is running on http://localhost:${PORT}`);

})
const staticPath=path.join(__dirname,'assets');
app.use(express.static(staticPath));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html');
    // res.writeHead(200,{'Content-Type':'text/html'});
});
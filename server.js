const http=require('http');

const server=http.createServer((req,res)=>{
    res.write("joker");
    res.end();
});

const PORT=process.env.PORT||5000;
server.listen(PORT,()=>{
console.log(`Server is running on port ${PORT}`);
});
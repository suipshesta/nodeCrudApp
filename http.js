const http=require('http');



const myhttp=http.createServer((req,res)=>{
   res.write("hello, k cha?");
   res.end();
});

myhttp.listen(5000,()=>{
    console.log("server is running on 5000");
})
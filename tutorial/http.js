// const http = require('http');
// const myhttp = http.createServer((req, res) => { 
//     res.write("thk cha"); 
//     res.end(); 
// });
// const PORT = process.env.PORT || 5000;
// myhttp.listen(PORT, () => { 
//     console.log(`server is running on ${PORT}`);
//  });



const http=require('http');
const path=require('path');
const fs=require('fs');

let loginfileName = path.join(__dirname, '/views/login.html'); // full path
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url==='/'){
        res.end("<h1>Home Page</h1>");
        
    }else if(req.url===`/login`){
         fs.readFile(loginfileName, 'utf8', (err, data) => {
            if (err) 
                throw err;
           res.end(data);
        });
    }else if(req.url===`/register`){
        res.end("<h1>Register Page</h1>");
    }else{
        res.end("<h1>404 page not found</h1>");
    }
});

const PORT=process.env.PORT||5000;
server.listen(PORT,()=>{
console.log(`Server is running on port ${PORT}`);
});

 
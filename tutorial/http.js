const http = require('http');
const myhttp = http.createServer((req, res) => { 
    res.write("thk cha"); 
    res.end(); 
});
const PORT = process.env.PORT || 5000;
myhttp.listen(PORT, () => { console.log(`server is running on ${PORT}`); });
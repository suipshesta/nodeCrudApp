const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path= require('path');
const PORT=process.env.PORT||3000;
const staticPath=path.join(__dirname,'assets');
app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('send', (msg) => {
    console.log('message: ' + msg);
    socket.broadcast.emit('receive',msg);
  });
});

server.listen(PORT, () => {
    console.log(` server is running on http://localhost:${PORT}`);
});



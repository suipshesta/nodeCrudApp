const io=require('socket.io')(8000)

const users={};


io.on('connection',socket=>{
    socket.on('newUserJoin',name=>{
        users[socket.id]=name;
        socket.broadcast.emit('userJoined',name);
    });

    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message,name:user[socket.id]});
    });

});

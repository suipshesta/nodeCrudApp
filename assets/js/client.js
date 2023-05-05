const socket = io();
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');

var name = prompt("enter you name to join");

const append=(message)=>{
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message');
    // messageElement.classList.add('')
    messageContainer.append(messageElement);
}

form.addEventListener('submit',(e)=>{
    if(messageInput.value=='')
    return false;
    e.preventDefault();
    let msg = { 
        'message':messageInput.value,
        'user':name 
    }
    append(`you: ${msg.message}`);
    socket.emit('send',msg);
    messageInput.value='';
    document.querySelector('.container').scrollTo(0,document.querySelector('.container').scrollHeight);
   
});
messageInput.addEventListener('keyup',e=>{
    if(e.key=='Enter'){
        document.getElementById('sendbtn').click();
        
    }
});


socket.emit('newUserJoin', name => {
    append(`${name} joined the chat`);
});

socket.on('receive',data=>{
    console.log(data);
append(`${data.user} : ${data.message}`);
document.querySelector('.container').scrollTo(0,document.querySelector('.container').scrollHeight);
});
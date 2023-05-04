const socket = io('http://localhost:8000');
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');

const name = prompt("enter you name to join");

const append=(message)=>{
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message');
    // messageElement.classList.add('')
    messageContainer.append(messageElement);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message=messageInput.value;
    append(`you: ${message}`);
    socket.emit('send',message);
});


socket.emit('newUserJoin', name => {
    append(`${name} joined the chat`);
});

socket.on('receive',data=>{
append(`${data.message} : ${data.user}`);
});
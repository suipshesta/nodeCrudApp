const EventEmitter=require('events');

// create class
class MyEmitter extends EventEmitter{}

// init class
const myemitter=new MyEmitter;

//event listener
myemitter.on('event',(d)=>console.log(d));

//create/init event
myemitter.emit('event',"haha");




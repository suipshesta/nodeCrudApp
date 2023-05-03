const EventEmitter=require('events');

// create class
class MyEmitter extends EventEmitter{}

// init class
const myemitter=new MyEmitter;

//event listener
myemitter.on('event',()=>console.log("event fire"));

//init event
myemitter.emit('event');




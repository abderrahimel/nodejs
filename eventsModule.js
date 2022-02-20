// Here we require in the 'events' module and save a reference to it in an events variable
let events = require('events');

let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}
const myEmitter = new events.EventEmitter();
// Each event emitter instance has an .on()
//  take two argument 
//  the name of the event 
//  the name of the callback function 
myEmitter.on('celebration', listenerCallback)

// Each event emitter instance also has an .emit() method
// takes as its first argument the name of the event as a string
// the data that should be passed into the listener callback function.
myEmitter.emit('celebration', ' i am going to be the argument of the callback function');


const events = require('events');

// Create a new EventEmitter instance
myEmitter = new events.EventEmitter();

// Set up an event listener which listens for the event name 'event'
// which is then handled by the callback function,
// which takes data received from the emitted event
myEmitter.on('something', function(data) {
    console.log(data.greeting + 'NodeJS Events!');
})

// Emit and event, and data to the event handler that is responsible for this event
myEmitter.emit('something', { greeting: 'Hello, ' });

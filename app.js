const events = require('events');
const util = require('util');

// define person
function Bud(name) {
    this.name = name;
}


// make person inherit event emitter
util.inherits(Bud, events.EventEmitter)


// Create event handlers for each person
let mik = new Bud('Mik');
let lee = new Bud('Lee');

let buds = [lee, mik];
buds.forEach(function(bud) {
    bud.on('speak', function(msg) {
        console.log(bud.name + ': ' + msg)
    })
})

// person emits and event
mik.emit('speak', 'I am a chef!');
lee.emit('speak', 'What yall want do?');

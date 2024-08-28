#!usr/bin/node

const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', number => {
  console.log(number*number)
})

eventEmitter.on('wunderbar', () => {
  console.log("is wonderful!")
});

eventEmitter.emit('start', 23);
eventEmitter.emit('start', 44);
eventEmitter.emit('wunderbar');

console.log(
  eventEmitter.eventNames()
)

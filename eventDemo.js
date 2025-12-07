import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log('Hello, welcom ' + name);
}

function goodbyeHandler(name) {
  console.log('Goodbye ' + name);
}

//  Register event listeners

myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

//  Emit events --> here events are triggered

myEmitter.emit('greet', 'Hussain');
myEmitter.emit('goodbye', 'Hussain');

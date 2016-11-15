const { sayHelloTo  } = require('./hello.js');

const span = document.createElement('span');
span.innerText = sayHelloTo('João Developer');

document.body.appendChild(span);
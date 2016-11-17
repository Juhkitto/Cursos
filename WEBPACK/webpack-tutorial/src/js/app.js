const { sayHelloTo  } = require('./hello.js');

const span = document.createElement('span');
span.innerText = sayHelloTo('ola Developer');

document.body.appendChild(span);
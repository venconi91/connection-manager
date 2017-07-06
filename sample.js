const connectionManager = require('./');
console.log('disabled')
connectionManager.disableConnection();

setTimeout(() => {
   connectionManager.enableConnection();
   console.log('enabled');
}, 5000);

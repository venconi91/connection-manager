const manager = require('./lib');

module.exports = {
    disableConnection: manager.disableConnection,
    enableConnection: manager.enableConnection,
    isConnected: manager.isConnected
}
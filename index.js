const manager = require('./lib');

module.exports = {
    disableConnection: manager.disableConnection,
    enableConnection: manager.enableConnection,
    isEnabled: () => {
        throw new Error('not implemented');
    }
}
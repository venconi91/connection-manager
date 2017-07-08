const assert = require('assert');

const connectionManager = require('./../');

connectionManager.isConnected()
    .then((connected) => {
        assert.ok(connected);
    })
    .catch((err) => {
        assert.fail(err);
    })
    .then(() => {
        connectionManager.disableConnection();
    })
    .then(() => {
        return connectionManager.isConnected()
            .then((connected) => {
                assert.fail('should not be connected');
            })
            .catch((err) => {
                assert.ok(err);
            })
    })
    .then(() => {
        setTimeout(() => {
            Promise
                .resolve()
                .then(() => {
                    connectionManager.enableConnection();
                })
                .then(() => {
                    setTimeout(() => {
                        connectionManager.isConnected()
                            .then((connected) => {
                                assert.ok(connected);
                            })
                            .catch((err) => {
                                assert.fail('should be connected');
                            })
                    }, 8000)
                })
        }, 5000);
    })
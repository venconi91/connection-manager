const connectionManager = require('./');

connectionManager.isConnected()
    .then((connected) => {
        console.log(connected)
    })
    .catch((err) => {
        console.log(err)
    })
    .then(() => {
        connectionManager.disableConnection();
    })
    .then(() => {
        return connectionManager.isConnected()
            .then((connected) => {
                console.log(connected)
            })
            .catch((err) => {
                console.log(err)
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
                                console.log(connected)
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    }, 8000)
                })
        }, 5000);
    })
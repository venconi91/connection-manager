const connectionManager = require('./');

connectionManager
    .isConnected()
    .then((connected) => {
        console.log(connected)
    })
    .catch((err) => {
        console.log(err)
    })
    .then(() => {
        return connectionManager.disableConnection();
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
        Promise
            .resolve()
            .then(() => {
                return connectionManager.enableConnection();
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
    });
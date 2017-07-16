const { spawn } = require('child_process');
const dns = require('dns');

const processConfigForDisabling = {
    win32: {
        command: 'ipconfig',
        params: ['/release']
    },
    linux: {
        command: 'service',
        params: ['network-manager', 'stop']
    },
    darwin: '',
    freebsd: '',
    sunos: ''
}

const processConfigForEnabling = {
    win32: {
        command: 'ipconfig',
        params: ['/renew']
    },
    linux: {
        command: 'service',
        params: ['network-manager', 'start']
    },
    darwin: '',
    freebsd: '',
    sunos: ''
}

const getToggleConnectionPromise = (sourceObj) => {
    let promise = new Promise((resolve, reject) => {
        let params = sourceObj[process.platform];
        if (!params) {
            throw new Error('unsupported os');
        }

        spawn(params.command, params.params)
            .on('close', (code) => {
                if (code === 0) {
                    resolve();
                } else {
                    reject();
                }
            });
    });
    return promise;
}

module.exports = {
    disableConnection: () => {
        return getToggleConnectionPromise(processConfigForDisabling);
    },
    enableConnection: () => {
        return getToggleConnectionPromise(processConfigForEnabling);
    },
    isConnected: () => {
        let promise = new Promise((resolve, reject) => {
            dns.resolve('google.com', function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(true);
                }
            });
        });

        return promise;
    }
}
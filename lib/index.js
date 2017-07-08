const { spawnSync } = require('child_process');
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
    darwin: 'not implemented',
    freebsd: 'not implemented',
    sunos: 'not implemented'
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
    darwin: 'not implemented',
    freebsd: 'not implemented',
    sunos: 'not implemented'
}

module.exports = {
    disableConnection: () => {
        let params = processConfigForDisabling[process.platform];
        if (!params) {
            throw new Error('unsupported os');
        }
        return spawnSync(params.command, params.params)
    },
    enableConnection: () => {
        let params = processConfigForEnabling[process.platform];
        if (!params) {
            throw new Error('unsupported os');
        }
        return spawnSync(params.command, params.params)
    },
    isConnected: () => {
        let promise = new Promise((resolve, reject) => {
            dns.resolve('google.com', function(err) {
                if (err)
                    reject(err);
                else {
                    resolve(true);
                }
            });
        });

        return promise;
    }
}
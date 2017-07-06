const { spawnSync } = require('child_process');

const processConfigForDisabling = {
    win32: {
        command: 'ipconfig',
        params: ['/release']
    },
    linux: 'not implemented',
    darwin: 'not implemented',
    freebsd: 'not implemented',
    sunos: 'not implemented'
}

const processConfigForEnabling = {
    win32: {
        command: 'ipconfig',
        params: ['/renew']
    },
    linux: 'not implemented',
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
    }
}
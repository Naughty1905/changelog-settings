import { exec } from 'child_process';

const getBranch = () => new Promise((resolve, reject) => {
    return exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
        if (err)
            return reject(`getBranch Error: ${err}`);
        else if (typeof stdout === 'string')
            return resolve(stdout.trim());
    });
});

export { getBranch }

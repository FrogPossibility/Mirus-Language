const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);
const path = require('path');
const chalk = require('chalk');

async function main() {
    const filename = process.argv[2];
    await myExec(`node parse.js ${filename}`);
    await myExec(`node generate.js ${filename}.ast`);
    const jsFilename = path.basename(filename, '.x') + '.js';
    await myExec(`node ${jsFilename}`, 'green');

}

async function myExec(command, outputStyle) {
    if (!outputStyle) {
        outputStyle = 'dim';
    }
    console.log(chalk.dim(command));
    const { stdout, stderr } = await execPromise(command);
    if (stdout) console.log(chalk[outputStyle](stdout.trim()));
    if (stderr) console.error(chalk.magenta(stderr.trim()));
}

main().catch(err => console.log(chalk.red(err.message)));
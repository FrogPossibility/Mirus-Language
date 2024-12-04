const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);
const path = require('path');
const chalk = require('chalk');

async function main() {
    const filename = process.argv[2];
    await myExec(`node parse.js ${filename}`);
    await myExec(`node generate.js ${filename}.ast`);
    const baseDir = path.dirname(filename);
    const jsFilename = path.join(baseDir, path.basename(filename, '.mrus') + '.js');
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

main()
    .then(() =>{
        const filename = process.argv[2];
        console.log('');
        console.log(chalk.bgGreenBright("✅ EXECUTED ✅"));
    })
    .catch(err => {
        console.error(chalk.bgRedBright('⚠️ ERROR ⚠️'), chalk.bgRed(err));
    });
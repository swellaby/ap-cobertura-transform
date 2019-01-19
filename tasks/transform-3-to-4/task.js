'use strict';

const taskLib = require('azure-pipelines-task-lib');
const coberturaTransform = require('cobertura-transform');

const failTask = (err, inputFilePath, outputFilePath) => {
    taskLib.error('Fatal error encountered while attempting transform. Enable debugging to see error details');
    const errorMessage = `Unable to create transformed Cobertura 4 report at ${outputFilePath} from Cobertura 3 report at ${inputFilePath}`;
    taskLib.debug(`Error details: ${err && err.message ? err.message : 'unknown'}`);
    taskLib.setResult(taskLib.TaskResult.Failed, errorMessage);
};

const run = () => {
    let inputFilePath;
    let outputFilePath;
    try {
        inputFilePath = taskLib.getInput('cobertura3FilePath', true);
        outputFilePath = taskLib.getInput('cobertura4FilePath', true);
        coberturaTransform.transformCoberturaThreeToFour(inputFilePath, outputFilePath).catch(err => {
            failTask(err, inputFilePath, outputFilePath);
        });
    } catch (err) {
        failTask(err, inputFilePath, outputFilePath);
    }
};

module.exports = {
    run
};

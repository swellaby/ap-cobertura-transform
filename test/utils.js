'use strict';

const validInputFilePath = '/usr/foo/cobertura3.xml';
const validOutputFilePath = '/usr/bar/cobertura4.xml';

const invalidInputFileErrorMessage = 'Invalid value specified for inputFilePath. inputFilePath must be a string';
const invalidOutputFileErrorMessage = 'Invalid value specified for outputFilePath. outputFilePath must be a string';

const transformFailureBaseErrorMessage = (filePath) => `Failed to transform file: ${filePath}.`;
const defaultTransformFailureBaseErrorMessage = transformFailureBaseErrorMessage(validInputFilePath);
const transformFailureFullErrorMessage = (details, filePath) => `${transformFailureBaseErrorMessage(filePath)} Details: ${details}`;
const defaultTransformFailureErrorMessageDetails = 'oh nose!';
const defaultTransformFailureFullErrorMessage = transformFailureFullErrorMessage(defaultTransformFailureErrorMessageDetails, validInputFilePath);
const invalidCoberturaXmlErrorMessageDetails = 'Invalid Cobertura XML. XML must comply with http://cobertura.sourceforge.net/xml/coverage-03.dtd';
const invalidCoberturaXmlFullErrorMessage = transformFailureFullErrorMessage(invalidCoberturaXmlErrorMessageDetails, validInputFilePath);

const sampleInputContents = '<xml></xml>';

module.exports = {
    validInputFilePath,
    validOutputFilePath,
    invalidInputFileErrorMessage,
    invalidOutputFileErrorMessage,
    transformFailureBaseErrorMessage,
    defaultTransformFailureBaseErrorMessage,
    transformFailureFullErrorMessage,
    defaultTransformFailureErrorMessageDetails,
    defaultTransformFailureFullErrorMessage,
    sampleInputContents,
    invalidCoberturaXmlErrorMessageDetails,
    invalidCoberturaXmlFullErrorMessage
};

import process from 'process'

process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
process.report.reportOnSignal = true;
process.report.filename = 'report.json';

function simpleError() {
  throw new Error("Ups");
}

simpleError()





var HtmlReporter = require('./libraries/nightwatch/node_modules/nightwatch-html-reporter');
var reporter = new HtmlReporter({
    openBrowser: true,
    reportsDirectory: __dirname + '/reports',
    themeName: 'default',
    uniqueFilename: true,
    reportFilename: 'Report_.html'
});
module.exports = {
    reporter: reporter.fn
};
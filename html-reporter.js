var HtmlReporter = require('./node_modules/nightwatch-html-reporter');
var fs = require('fs');
var path = require('path');
var handlebars = require('./node_modules/handlebars');

/* Same options as when using the built in nightwatch reporter option */
var reporter = new HtmlReporter({
  openBrowser: true,
  reportsDirectory: __dirname + '/reports/',
  themeName: 'default',
  logLevel: 0,
});
module.exports = {
  write : function(results, options, done) {
    var reportFilename = options.filename_prefix + '.html';//(Math.floor(Date.now() / 1000)) + < went before html
    var reportFilePath = path.join(__dirname, options.output_folder, reportFilename);
    fs.readFile('./reports/dummy.hbs', function(err, data) {
      if (err) throw err;
      var template = data.toString();
      var html = handlebars.compile(template)({
        results   : results,
        options   : options,
        timestamp : new Date().toString(),
        browser   : options.filename_prefix.split('_').join(' ')
      });
      fs.writeFile(reportFilePath, html, function(err) {
        if (err) throw err;
        console.log('Report generated: ' + reportFilePath);
        done();
      });
    });
  },
  "reporter" : reporter.fn
};
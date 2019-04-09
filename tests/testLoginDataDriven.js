const email = 'vi.hoang0706@gmail.com';
const password = 'a123456789';
module.exports = {
    '@tags': ['loginDataDriven'],

    before : function(browser) {
        var login = browser.page.Login();
        login.navigate().maximizeWindow();
      },

    'Login Page Initial Render': function (browser) {
        var login = browser.page.Login();
        login.gotoPage().validateForm();
    },
    'Data-driven Testing for login with Invalid account': function (browser) {
        var login = browser.page.Login();
        var Excel = require('exceljs');
        //Read a file
        var workbook = new Excel.Workbook();
        workbook.xlsx.readFile("data/Sample.xlsx").then(function () {
            //Get sheet by Name
            var worksheet = workbook.getWorksheet('Sheet1');
            var row = worksheet.lastRow;
            //Count actual number of row
            var rowCount = worksheet.actualRowCount;
            var columnCount = worksheet.columnCount;
            for (let i = 2; i <= rowCount; i++) {
                for(let j=1; j<columnCount;j++){
                    var username = worksheet.getRow(i).getCell(j).text;
                    var pass = worksheet.getRow(i).getCell(++j).text;
                    var actutalEmailValidationError = worksheet.getRow(i).getCell(++j).text;
                    var actutalPassValidationError = worksheet.getRow(i).getCell(++j).text;
                    var actutalError = worksheet.getRow(i).getCell(++j).text;
                    login.gotoPage().fillInLoginForm(username, pass)
                    login.checkMessageExist('@errorEmailValidationMess', actutalEmailValidationError);
                    login.checkMessageExist('@errorPasswordValidationMess', actutalPassValidationError);
                    login.checkMessageExist('@errorMessage', actutalError);
                    login.clearValue('@inputEmail')
                         .clearValue('@inputPassword');
                }
            }
            row.commit();
        });
    },
    'Login with valid account': function (browser) {
        var login = browser.page.Login();
        browser.maximizeWindow()
        login.navigate()
            .gotoPage()
            .fillInLoginForm(email, password)
            .pause(1000)
            .checkLoginSucessfully()
            .logout()
    },
    after: (browser, done) => {
        browser.end();
        done();
    },
};
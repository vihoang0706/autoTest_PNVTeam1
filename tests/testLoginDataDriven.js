const email = 'vi.hoang0706@gmail.com';
const password = 'a123456789';
module.exports = {
    '@tags': ['loginDataDriven'],

    'Login Page Initial Render': function (browser) {
        var login = browser.page.Login();
        browser.maximizeWindow()
        login.navigate()
            .validateForm();
    },
    'Data-driven Testing for login with Invalid account': function (browser) {
        var login = browser.page.Login();
        login.navigate()
            .maximizeWindow();
        var Excel = require('exceljs');
        //Read a file
        var workbook = new Excel.Workbook();
        workbook.xlsx.readFile("data/Sample.xlsx").then(function () {
            //Get sheet by Name
            var worksheet = workbook.getWorksheet('Sheet1');
            var row = worksheet.lastRow;
            //Count actual number of row
            var rowCount = worksheet.actualRowCount;
            for (let i = 1; i <= rowCount; i++) {
                login.gotoPage()
                    .setValue('@inputEmail', worksheet.getRow(i).getCell(1).text)
                    .setValue('@inputPassword', worksheet.getRow(i).getCell(2).text)
                    .pause(1000)
                    .click('@buttonLogin')
                var actutalEmailValidationError = worksheet.getRow(i).getCell(3).text;
                var actutalPassValidationError = worksheet.getRow(i).getCell(4).text;
                var actutalError = worksheet.getRow(i).getCell(5).text;
                login.checkMessageExist('@errorEmailValidationMess', actutalEmailValidationError);
                login.checkMessageExist('@errorPasswordValidationMess', actutalPassValidationError);
                login.checkMessageExist('@errorMessage', actutalError);
                login.clearValue('@inputEmail')
                    .clearValue('@inputPassword');
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
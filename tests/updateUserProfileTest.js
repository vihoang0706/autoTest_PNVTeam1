const email = 'vi.hoang0706@gmail.com';
const password = 'a123456789';
module.exports =  {
    '@tags' :['user_profile'],
    before: function(browser){
        var login = browser.page.loginPage();
        login.navigate();
        login.gotoPage();
        login.fillInLoginForm(email,password);
    },
    
    'User can not edit your account with invalid information' : function (browser) {
        // var editUser = browser.page.updateUserProfilePage();
        var Excel = require('exceljs'); 
        var workbook = new Excel.Workbook(); 
        workbook.xlsx.readFile('data/updateUser.xlsx') .then(function() { 
            var updateUser = browser.page.updateUserProfilePage();
            var worksheet = workbook.getWorksheet('updateuser');
            var endRow = worksheet.actualRowCount;
            var totalColumn = worksheet.columnCount;
            for (let i = 2; i <= endRow; i++) {
                row = worksheet.getRow(i);
                for(let j = 2; j <= totalColumn; j++) {
                    updateUser.goToUserProfilePage();
                    updateUser.updateUserProfile(row.getCell(j).text, row.getCell(++j).text, 
                    row.getCell(++j).text, row.getCell(++j).text,
                    row.getCell(++j).text, row.getCell(++j).text, 
                    row.getCell(++j).text, row.getCell(++j).text, row.getCell(++j).text);
                    // if(row.getCell(++j)!='') {
                    //     updateUser.checkErrorMessage('@nameError',row.getCell(++j).text);
                    //     updateUser.checkErrorMessage('@emailError',row.getCell(++j).text);
                    // }   
                }        
            }
            row.commit();
        });
    },      
    'User can edit your account after login': function (browser){
        var editUser = browser.page.updateUserProfilePage();
        var image = 'images/bupbe.png';
        var image_name = 'bupbe.png';
        var name = 'PNV Team';
        var email = 'hienpnv@gmail.com';
        var password = 'hiennguyen98';
        var confirm_password = 'hiennguyen98';
        var account = 'Nguyen Thi Hien';
        var gender = 'Nữ';
        var address = '101 Lê Hữu Trác';
        var phone_number = '0972616834';
        
        // editUser.gotoLoginPage();
        // editUser.login('hienpnv@gmail.com','hiennguyen98');
        editUser.goToUserProfilePage();
        editUser.updateUserProfile(image, name, email, password, confirm_password, account, gender, address, phone_number);
        editUser.logOutWebsite();
        editUser.gotoLoginPage();
        editUser.login('hienpnv@gmail.com','hiennguyen98');
        editUser.checkloginsuccess();
        editUser.goToUserProfilePage();
        editUser.checkUserProfileSuccess(image_name, name, email, account, gender, address, phone_number);
    },

    after: function(browser){
        browser
        .pause(1000)
        .end()
    },
}
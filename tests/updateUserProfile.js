module.exports =  {
    tags :['user_profile'],
    before: function(browser){
        var launchBrowser = browser.page.updateUserProfilePage();
        launchBrowser.navigate();
    },
    
    'User can edit your account after login': function (browser){
        var editUser = browser.page.updateUserProfilePage();
        // var imageUploaded = ;
        var image = '//C:\Users\InternDN19.01.06\Desktop\image_team1.jpg';
        var name = 'PNV Team';
        var email = 'hienpnv@gmail.com';
        var password = 'hiennguyen98';
        var confirm_password = 'hiennguyen98';
        var account = 'Nguyen Thi Hien';
        var gender = 'Nữ';
        var address = '101 Lê Hữu Trác';
        var phone_number = '0972616834';

        editUser.gotoLoginPage();
        editUser.login('hienpnv@gmail.com','hiennguyen98');
        // editUser.checkloginsuccess();   
        editUser.goToUserProfilePage();
        editUser.login(image, name, email, password, confirm_password, account, gender, address, phone_number);
    },

    after: function(browser){
        browser
        .pause(1000)
        .end()
    },
}
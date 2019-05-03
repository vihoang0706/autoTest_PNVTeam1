module.exports = {
    commands: [{
        getContainValue(element, callback) {
            this
                .useXpath()
                .getText(element, function (result) {
                    callback(result.value);
                });
        },
        getCollumnValue(username, type, callback) {
            var collumnActualUsername ='//table//tbody/tr//td[@data-colname="Username"]/strong/a[text()="'+ username +'"]';
            var collumnActualName ='//td[@class="name column-name"  and ancestor::tr/td[@data-colname="Username"]/strong/a[text()="'+ username +'"]]';
            var collumnActualEmail ='//td[@class="email column-email" ]/a[ancestor::tr/td[@data-colname="Username"]/strong/a[text()="'+ username +'"]]';
            var collumnActualRole ='//td[@class="role column-role"  and ancestor::tr/td[@data-colname="Username"]/strong/a[text()="'+ username +'"]]';
            switch (type) {
                case "Username":
                    this.getContainValue(collumnActualUsername, callback);
                    break;
                case "Name":
                    this.getContainValue(collumnActualName, callback);
                    break;
                case "Email":
                    this.getContainValue(collumnActualEmail, callback);
                    break;
                case "Role":
                    this.getContainValue(collumnActualRole, callback);
                    break;
            }
        },
        deleteUser(username) {
            var self = this;
            var collumnActualUsername ='//table//tbody/tr//td[@data-colname="Username"]/strong/a[text()="'+ username +'"]';
            self
                .useXpath()
                .moveToElement(collumnActualUsername, 0, 0) 
                .click('@linkDelete');
            self.getAttribute('@inputConfirmDeletion','disabled',function(result){
                if(result.value == "true"){
                    self
                        .click('inputDeleteAllContent')
                        .click('@inputConfirmDeletion');
                } else {
                    self.click('@inputConfirmDeletion');
                }
            })
        }
    }],
    elements: {
        linkDelete: {
            selector: '(//span[@class="delete"]/a[@class="submitdelete"])[last()]',
            locateStrategy: 'xpath'
        },
        inputConfirmDeletion: 'input[id=submit]',
        inputDeleteAllContent: 'input[id=delete_option0]',
    }
}
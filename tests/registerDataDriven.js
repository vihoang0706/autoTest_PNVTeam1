
var using = request('jasmine-data-provider');

    describe('Register Test', function(){
        function Regis(){
            return [
                {name:'', email:'', password:'', confirmPass:''},
                {name:'Van Tao', email:'thienbinh@ccnd.com', password:'qwertyuiop', confirmPass:'qwertyuiop'},
                {name:'Van Tao', email:'', password:'qwertyuiop', confirmPass:'qwertyuiop'},
                {name:'Van Tao', email:'thienbinh@ccnd.com', password:'', confirmPass:''},
                {name:'Van Tao', email:'thienbinh@ccnd.com', password:'qwertyuiop', confirmPass:''},
                {name:'Van Tao', email:'thienbinh@ccnd.com', password:'', confirmPass:'qwertyuiop'},
                {name:'Van Tao', email:'thienbinh@ccnd.com', password:'qwertyuiop', confirmPass:'1234567890'},
                {name:'Van Tao', email:'taonguyen991@gmail.com', password:'qwertyuiop', confirmPass:'qwertyuiop'},
                {name:'Van Tao', email:'1225ccnd@ccnd.com', password:'qwertyuiop', confirmPass:'qwertyuiop'},
            ];
        }
        
    
    it('uses BDD to run the Google simple test', function(browser) {
        browser
          const register = browser.page.registerPage()
          register
            .navigate()
            .maximizeWindow()
           using(Regis, function (data) {
            register.fillInRegisterForm()
        });
        
    });
});


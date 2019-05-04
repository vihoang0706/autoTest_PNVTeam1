const csvjson = require('csvtojson');
module.exports = {
    'Demo test' : async client => {
        const datas = await csvjson().fromFile(client.globals.paths.data);
        const login = client.page.adminUserLoginPage();
        client.url('http://localhost/team1_theme2/wordpress/wp-login.php')
        for(let[index,data] of datas.entries()) {
            login.login(data.username, data.password);
            login.getErrorMessage(function(atualErrorMessage){
                client.assert.equal(atualErrorMessage,data.errorMessage);
            });
        }
    }
}
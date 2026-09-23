const LoginPage = require("./LoginPage");
const Pim = require("./Pim");
const Recruitment=require("./Recruitment");
const TestFail = require("./testFail");

class PoManager {
    constructor(page)
    {
        this.page=page;
        this.login=new LoginPage(page);
        this.Pim=new Pim(page);
        this.job=new Recruitment(page);
        this.testFail=new TestFail(page);
    }
    getLoginPage()
    {
        return this.login;
    }
    getPim()
    {
        return this.Pim;
    }
    getRecruitment()
    {
        return this.job;
    }
    gettestFail()
    {
        return  this.testFail;
    }
    


}

module.exports=PoManager;


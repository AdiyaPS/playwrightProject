class LoginPage
{
    constructor(page)
    {
        this.page=page;

        this.userName=page.getByPlaceholder("Username");
        this.password=page.getByPlaceholder("Password");
        this.signin=page.getByRole('button', {name : 'Login'});
    }

    async goto()
    {
        await this.page.goto(process.env.BASE_URL);
    }
    async login(userName,password)
    {
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.signin.click();
    }
}
module.exports=LoginPage;

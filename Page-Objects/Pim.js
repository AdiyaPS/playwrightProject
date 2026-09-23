class Pim
{
    constructor(page)
    {
        this.page = page;
        this.button = page.getByRole('link', { name : "PIM" }); //PIM Link
        this.employeeList = page.getByRole('link', {name : 'Employee List'}); //Emp List link

        this.add =page.locator("//button[normalize-space()='Add']");
        this.firstName = page.getByPlaceholder("First Name");
        this.middleName = page.getByPlaceholder("Middle Name");
        this.lastName = page.getByPlaceholder("Last Name");
        
        this.imageUpload = page.locator("input[type='file']"); //img

        this.checkBox = page.locator("span.oxd-switch-input"); //checkbox
        
        this.userName = page.locator("//label[text()='Username']/following::input[1]");
        this.enableRadio = page.locator("//input[@type='radio' and @value ='1']");
        this.password = page.locator("//input[@type='password']").nth(0);
        this.confirmPassword = page.locator("//input[@type='password']").nth(1);
        this.submit = page.locator("//button[@type='submit']");
    }
    async employeeDetails(firstName,middleName,lastName,userName,password,confirmPassword)
    {
        await this.button.click();
        await this.employeeList.click();
        await this.add.click();

        //Add Employee details
        await this.firstName.fill(firstName);
        await this.middleName.fill(middleName);
        await this.lastName.fill(lastName);
        await this.imageUpload.setInputFiles("C:/PlaywrightProject/test-image/sample.jpg");
        await this.page.waitForLoadState();
        await this.checkBox.click();
        
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.confirmPassword.fill(confirmPassword);
        await this.submit.click();

        
        
        }
}
module.exports=Pim;


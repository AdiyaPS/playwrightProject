class TestFail
{
    constructor(page)
    {
        this.page=page;
        this.button = page.getByRole('link', { name : "PIM" }); //PIM Link
        this.employeeList = page.getByRole('link', {name : 'Employee List'}); //Emp List link

        this.add =page.locator("//button[normalize-space()='Add']");
        this.submit = page.locator("//button[@type='submi']"); // Error
    
    }
    async details()
    {
        await this.button.click();
        await this.employeeList.click();
        await this.add.click();
        await this.submit.click();

    }
}
module.exports=TestFail;
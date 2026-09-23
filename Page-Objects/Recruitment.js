class Recruitment{
    constructor(page){
        this.page=page;
        this.recruitment =page.getByRole('link', {name : 'Recruitment'});
        this.candidates=page.getByRole("link", {name : "Candidates"});
        this.add=page.locator("//button[normalize-space()='Add']");
       
        this.firstName=page.getByPlaceholder("First Name");
        this.lastName=page.getByPlaceholder("Last Name");
        this.select=page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow']");
        this.position=page.getByText("Senior QA Lead");
        this.email=page.locator("//input[@placeholder='Type here']").first();
       
        this.resume=page.locator("input[type='file']");
        this.submit=page.locator("//button[@type='submit']");
        this.shortlist=page.locator("//button[normalize-space()='Shortlist']");
        //this.save=page.getByRole("button", {name : 'Save'});
        this.vacancy=page.locator("//div[@class='oxd-select-text-input']").nth(1)
        this.post=page.getByText("Senior QA Lead").nth(0);

        this.search=page.getByRole('button', {name : 'Search'});
        this.delete=page.locator("//button//i[contains(@class, 'bi-trash')]").first()
        this.confirm=page.getByRole('button', { name: 'Yes, Delete' });
    }

    async job(firstName,lastName,email)
    {
        await this.recruitment.click();
        await this.candidates.click();
        await this.add.click();

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.select.click();
        await this.page.waitForLoadState();
        await this.position.click();
        await this.email.fill(email);
        await this.resume.setInputFiles("C:/PlaywrightProject/test-image/Resume.docx");
        await this.submit.click();
        await this.shortlist.click();
        //await this.save.click();
        await this.candidates.click();
        //div[@class='oxd-select-text-input']
        await this.vacancy.click();
        await this.post.click();
        await this.search.click();
        
        await this.delete.click();
        await this.confirm.click();
    }
}
module.exports=Recruitment;
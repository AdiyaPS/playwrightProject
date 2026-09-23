const { customTest, expect } = require('../utils/base-test');

customTest('Login Test', async ({ page, TestData, PoManager }) => {

    const loginPage = PoManager.getLoginPage();

    await loginPage.goto();

    await loginPage.login(
        TestData.validuser.username,
        TestData.validuser.password
    );

    await expect(page).toHaveURL(/dashboard/);

    console.log("Signed in successfully");
});


customTest('Add Employee Test', async ({ page, TestData, PoManager }) => {

    const loginPage = PoManager.getLoginPage();

    await loginPage.goto();

    await loginPage.login(
        TestData.validuser.username,
        TestData.validuser.password
    );

    const pim = PoManager.getPim();

    await pim.employeeDetails(
        TestData.Pim.firstName,
        TestData.Pim.middleName,
        TestData.Pim.lastName,
        TestData.Pim.userName,
        TestData.Pim.password,
        TestData.Pim.confirmPassword
    );

});


customTest('Recruitment Test', async ({ page, TestData, PoManager }) => {

    const loginPage = PoManager.getLoginPage();

    await loginPage.goto();

    await loginPage.login(
        TestData.validuser.username,
        TestData.validuser.password
    );

    const recruitment = PoManager.getRecruitment();

    await recruitment.job(
        TestData.Recruitment.firstName,
        TestData.Recruitment.lastName,
        TestData.Recruitment.email
    );

    console.log("Deleted successfully");
});


customTest('Locator Failure Test', async ({ page, TestData, PoManager }) => {

    const loginPage = PoManager.getLoginPage();

    await loginPage.goto();

    await loginPage.login(
        TestData.validuser.username,
        TestData.validuser.password
    );

    const testFail = PoManager.gettestFail();

    await testFail.details();

});
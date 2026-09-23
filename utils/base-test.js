const base=require('@playwright/test');
const testdata=require("../utils/testdata.json");
const PoManager = require('../Page-Objects/pomanager');

const customTest=base.test.extend({
    
    TestData: async({},use) => {
        await use(testdata);
    },

    PoManager : async({page},use) => {
        const pomanager=new PoManager(page);
        await use(pomanager);
    }
    
});
exports.customTest=customTest;
exports.expect=base.expect;



import test, {expect} from "@playwright/test" 
import { faker } from '@faker-js/faker';
const data = require("../fixtures/fixtures.json")

test("WebTables", async ({page})=>{


await page.goto("/")
await page.locator(".card-body").getByText('Elements').click()
await page.locator('.text').getByText('Web Tables').click()

await page.waitForLoadState("domcontentloaded")

    await expect(await page.locator(".text-center")).toBeVisible()
    await expect(page.url()).toContain("https://demoqa.com/webtables")

    
    await page.locator("#addNewRecordButton").click()

    await page.locator("#firstName").fill(data.firstname)
    await page.locator("#lastName").fill(data.lastname)
    await page.locator("#userEmail").fill(data.userEmail)
    await page.locator("#age").fill(data.age)
    await page.locator("#salary").fill(data.salary)
    await page.locator("#department").fill(data.department)

    await page.locator("#submit").click()

    await expect(await page.locator(`//div[@class="rt-tr-group"][4]//div[@class="rt-td"][1]`)).toHaveText(data.firstname)
    await expect(await page.locator(`//div[@class="rt-tr-group"][4]//div[@class="rt-td"][2]`)).toHaveText(data.lastname)
    await expect(await page.locator(`//div[@class="rt-tr-group"][4]//div[@class="rt-td"][4]`)).toHaveText(data.userEmail)
    await expect(await page.locator(`//div[@class="rt-tr-group"][4]//div[@class="rt-td"][3]`)).toHaveText(data.age)
    await expect(await page.locator(`//div[@class="rt-tr-group"][4]//div[@class="rt-td"][5]`)).toHaveText(data.salary)
    await expect(await page.locator(`//div[@class="rt-tr-group"][4]//div[@class="rt-td"][6]`)).toHaveText(data.department)






})
test("WebTables fakerjs", async ({page})=>{


const firstname = faker.person.firstName()
const lastname = faker.person.lastName()
const email = faker.internet.email()
const age = faker.number.int({ min: 10, max: 100 }).toString()
const salary = faker.number.int({ min: 100, max: 10000 }).toString()
const department = faker.commerce.department()

console.log(firstname)
console.log(lastname)
console.log(email)
console.log(age)
console.log(salary)
console.log(department)


    await page.goto("/")
    await page.locator(".card-body").getByText('Elements').click()
    await page.locator('.text').getByText('Web Tables').click()
    
    await page.waitForLoadState("domcontentloaded")
    
        await expect(await page.locator(".text-center")).toBeVisible()
        await expect(page.url()).toContain("https://demoqa.com/webtables")
    
        
        await page.locator("#addNewRecordButton").click()
    
        await page.locator("#firstName").fill(firstname)
        await page.locator("#lastName").fill(lastname)
        await page.locator("#userEmail").fill(email)
        await page.locator("#age").fill(age)
        await page.locator("#salary").fill(salary)
        await page.locator("#department").fill(department)
    
        await page.locator("#submit").click()
    
        await expect(await page.locator(`//div[@class="rt-tr-group"][4]//div[@class="rt-td"][1]`)).toHaveText(firstname)
        await expect(await page.locator(`//div[@class="rt-tr-group"][4]//div[@class="rt-td"][2]`)).toHaveText(lastname)
        await expect(await page.locator(`//div[@class="rt-tr-group"][4]//div[@class="rt-td"][4]`)).toHaveText(email)
        await expect(await page.locator(`//div[@class="rt-tr-group"][4]//div[@class="rt-td"][3]`)).toHaveText(age)
        await expect(await page.locator(`//div[@class="rt-tr-group"][4]//div[@class="rt-td"][5]`)).toHaveText(salary)
        await expect(await page.locator(`//div[@class="rt-tr-group"][4]//div[@class="rt-td"][6]`)).toHaveText(department)
    
    })
import test, { expect } from "@playwright/test"
import { faker } from '@faker-js/faker';
import { WebTablesPage } from "../pages/WebTablesPage";

const data = require("../fixtures/fixtures.json")

test("WebTables", async ({ page }) => {
    const webtables = new WebTablesPage(page)

    await page.goto("/")

    await webtables.clicks(page)

    await page.waitForLoadState("domcontentloaded")

    await expect(await page.locator(".text-center")).toBeVisible()
    await expect(page.url()).toContain("https://demoqa.com/webtables")


    await webtables.addBtn.click()
    await webtables.FillTable(data.firstname, data.lastname, data.userEmail, data.age, data.salary, data.department, page)

    await webtables.submit.click()

    await webtables.ValidateTable(data.firstname, data.lastname, data.userEmail, data.age, data.salary, data.department, page)


})
test("WebTables fakerjs", async ({ page }) => {
    const webtables = new WebTablesPage(page)

    const firstname = faker.person.firstName()
    const lastname = faker.person.lastName()
    const email = faker.internet.email()
    const age = faker.number.int({ min: 10, max: 100 }).toString()
    const salary = faker.number.int({ min: 100, max: 10000 }).toString()
    const department = faker.commerce.department()


    await page.goto("/")

    await webtables.clicks(page)

    await page.waitForLoadState("domcontentloaded")

    await expect(await page.locator(".text-center")).toBeVisible()
    await expect(page.url()).toContain("https://demoqa.com/webtables")


    await webtables.addBtn.click()

    await webtables.FillTable(firstname,lastname, email, age, salary, department, page)

    await webtables.submit.click()

    await webtables.ValidateTable(firstname,lastname, email, age, salary, department, page)

})
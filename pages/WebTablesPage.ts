import { expect, Locator, Page } from "@playwright/test"

export class WebTablesPage {

    readonly page: Page
    readonly cardBodyElements: Locator
    readonly webTables: Locator
    readonly addBtn: Locator
    readonly firstname: Locator
    readonly lastname: Locator
    readonly email: Locator
    readonly age: Locator
    readonly salary: Locator
    readonly department: Locator
    readonly submit: Locator
    readonly validateLocator : Locator

    constructor(page: Page) {
        this.page = page
        this.cardBodyElements = page.locator(".card-body").getByText('Elements')
        this.webTables = page.locator('.text').getByText('Web Tables')
        this.addBtn = page.locator("#addNewRecordButton")
        this.firstname = page.locator("#firstName")
        this.lastname = page.locator("#lastName")
        this.email = page.locator("#userEmail")
        this.age = page.locator("#age")
        this.salary = page.locator("#salary")
        this.department = page.locator("#department")
        this.submit = page.locator("#submit")

    }

    async FillTable(firstname, lastname, email, age, salary, department, page: Page) {

        await this.firstname.fill(firstname)
        await this.lastname.fill(lastname)
        await this.email.fill(email)
        await this.age.fill(age)
        await this.salary.fill(salary)
        await this.department.fill(department)

    }

    async clicks(page: Page) {

        await this.cardBodyElements.click()
        await this.webTables.click()
    }

    async ValidateTable(firstname, lastname, email, age, salary, department, page: Page) {


        await expect(await page.locator(`//div[@class="rt-tr-group"][4]//div[@class="rt-td"][1]`)).toHaveText(firstname)
        await expect(await page.locator(`//div[@class="rt-tr-group"][4]//div[@class="rt-td"][2]`)).toHaveText(lastname)
        await expect(await page.locator(`//div[@class="rt-tr-group"][4]//div[@class="rt-td"][4]`)).toHaveText(email)
        await expect(await page.locator(`//div[@class="rt-tr-group"][4]//div[@class="rt-td"][3]`)).toHaveText(age)
        await expect(await page.locator(`//div[@class="rt-tr-group"][4]//div[@class="rt-td"][5]`)).toHaveText(salary)
        await expect(await page.locator(`//div[@class="rt-tr-group"][4]//div[@class="rt-td"][6]`)).toHaveText(department)
        
    }
}
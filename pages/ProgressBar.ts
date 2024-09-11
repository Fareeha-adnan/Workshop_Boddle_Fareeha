import { expect, Locator, Page } from "@playwright/test"


export class ProgressBarPage {


    readonly page: Page
    readonly widgets: Locator
    readonly progressbar: Locator
    readonly startResetBtn: Locator
    readonly validateprogressbar: Locator
    readonly resetbtn: Locator

    constructor(page: Page) {
        this.page = page
        this.widgets = page.locator(".card-body").getByText('Widgets')
        this.progressbar = page.locator('.text').getByText('Progress Bar')
        this.startResetBtn = page.locator("#startStopButton")
        this.validateprogressbar = page.locator("#progressBar")
        this.resetbtn= page.locator("#resetButton")

    }

    async gotoProgressBarPage(page: Page) {
        await this.widgets.click()
        await this.progressbar.click()

        await expect(await page.locator(".text-center")).toBeVisible()
    }

    async checkbuttonstext(page: Page) {

    }
}

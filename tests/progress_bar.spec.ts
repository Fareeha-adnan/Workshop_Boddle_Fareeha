import test, { expect } from "playwright/test";
import { ProgressBarPage } from "../pages/ProgressBar";
import { TIMEOUT } from "dns";



test("checkbuttonstext", async ({ page }) => {

    const progressbartest = new ProgressBarPage(page)

    await page.goto("/")
    await progressbartest.gotoProgressBarPage(page)

    await progressbartest.startResetBtn.click()
    await expect(progressbartest.startResetBtn.getByText('Stop')).toBeVisible()


    await expect(progressbartest.validateprogressbar).toHaveText('100%', {timeout:20000})

    await expect(progressbartest.resetbtn.getByText('Reset')).toBeVisible()
})






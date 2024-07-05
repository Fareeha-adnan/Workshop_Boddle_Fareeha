import test, { expect } from "@playwright/test";



test("radio buttons practice", async({page})=>{
    await page.goto("https://demoqa.com/")
    await page.locator(".card-body").getByText('Elements').click()
    await page.locator('.text').getByText('Radio Button').click()
    await page.waitForLoadState("domcontentloaded")
    await expect(await page.locator(".text-center")).toBeVisible()
    await expect(page.url()).toContain("https://demoqa.com/radio-button")
    async function selectingRadioButton(index){
      const locator = `//div[@class="custom-control custom-radio custom-control-inline"][${index}]`
      const label = await page.locator(`${locator}/label`).innerText()
      await page.locator(`${locator}/input`).check({force:true})
      const isChecked = await page.locator(`${locator}/input`).isChecked()
      expect(isChecked).toBeTruthy()
      return label
    }
    const label1 = await selectingRadioButton("1")
    await expect(await page.locator('.mt-3')).toHaveText('You have selected '+label1)
    const label2 = await selectingRadioButton("2")
    await expect(await page.locator('.mt-3')).toHaveText('You have selected '+label2)
  })
import test, { expect } from "playwright/test";
import { ToolTipsPage } from "../pages/ToolTipsPage";

test("tooltips", async ({ page }) => {

    await page.goto("/")
    await page.locator(".card-body").getByText('Widgets').click()
    await page.locator('.text').getByText('Tool Tips').click()

    await expect(await page.locator(".text-center")).toBeVisible()
    await expect(page.url()).toContain("https://demoqa.com/tool-tips")

    await page.locator(".btn.btn-success").hover()
    const tooltiptxt = await page.locator(".tooltip-inner").textContent()


    expect(tooltiptxt).toBe('You hovered over the Button')
    
})
test("tooltipsExercise", async ({ page }) => {
 
    const tooltip = new ToolTipsPage(page)

    await page.goto("/")
    await tooltip.goToToolTip(page)
    await tooltip.hover(page)
    
})
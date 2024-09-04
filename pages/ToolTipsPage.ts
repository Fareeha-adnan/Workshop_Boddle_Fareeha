import { expect, Locator, Page } from "@playwright/test"


export class ToolTipsPage{


    readonly page: Page
    readonly widgets: Locator
    readonly toolitp: Locator
    readonly hover_btn: Locator
    readonly get_text : Locator

    constructor(page: Page) {
        this.page = page
        this.widgets = page.locator(".card-body").getByText('Widgets')
        this.toolitp = page.locator('.text').getByText('Tool Tips')
        this.hover_btn = page.locator(".btn.btn-success")
        this.get_text = page.locator(".tooltip-inner")
        
}

async GoToToolTip(page:Page){
    await this.widgets.click()
    await this.toolitp.click()

}
async Hover(page:Page){
    await this.hover_btn.hover()

    const tooltiptxt = await this.get_text.textContent()

    
    expect(tooltiptxt).toBe('You hovered over the Button')
}}

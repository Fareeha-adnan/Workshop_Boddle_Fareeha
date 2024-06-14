import test, { expect } from "@playwright/test";


test("Click_Button",async ({page})=>{ 
await page.goto('https://demoqa.com/buttons')

  await page.locator("button#doubleClickBtn").dblclick()
  
  
  await expect(await page.locator("p#doubleClickMessage")).toHaveText("You have done a double click")
  const text= await page.locator("p#doubleClickMessage").innerText()
  expect(text).toBe("You have done a double click")
})

test("Right_Click_Button",async ({page})=>{ 
    await page.goto('https://demoqa.com/buttons')
    
      await page.locator("button#rightClickBtn").click({button:"right"})
      
      
      //await expect(await page.locator("p#rightClickMessage")).toHaveText("You have done a right click")
      const text= await page.locator("p#rightClickMessage").innerText()
      expect(text).toBe("You have done a right click")

    })

    test("Dynamic_Click_Button",async ({page})=>{ 
        await page.goto('https://demoqa.com/buttons')
        
          await page.locator('xpath=//button[text()="Click Me"]').click()
          
          
          //await expect(await page.locator("p#dynamicClickMessage")).toHaveText("You have done a dynamic click")
          const text= await page.locator("p#dynamicClickMessage").innerText()
          expect(text).toBe("You have done a dynamic click")
    
        })
    


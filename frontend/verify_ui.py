import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Verify landing page
        await page.goto('http://localhost:3000/')
        await page.wait_for_timeout(2000)
        await page.screenshot(path='landing_page.png', full_page=True)
        print("Captured landing page screenshot.")

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())

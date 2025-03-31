import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures';

Given('navigate to {string}', async ({ page }, url: string) => {
    await page.goto(url);
});

Given('I am on Playwright home page', async ({ page }) => {
    await page.goto('https://playwright.dev');
});

When('CLick on quickstart guide', async ({ page }) => {
    await page.getByRole('link', { name: 'Quick Start' }).click();
});

Then('assert the page description', async ({ page }) => {
    const description = await page.getByRole('main');
    await expect(description).toBeDefined();
});

When('click link {string}', async ({ page }, name: string) => {
    await page.getByRole('link', { name }).click();
});

Then('Verify in title {string}', async ({ page }, text: string) => {
    await expect(page).toHaveTitle(new RegExp(text));
});

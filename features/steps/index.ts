import { auto } from "@auto-browse/auto-browse";
import { Given, When, Then } from './fixtures';


When(/^(.*)$/, async ({ page }, action: string) => {
    await auto(action, { page });
});

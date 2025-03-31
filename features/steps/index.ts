import { auto } from "@auto-browse/auto-browse";
import { Given, When as aistep, Then } from './fixtures';


aistep(/^(.*)$/, async ({ page }, action: string) => {
    await auto(action, { page });
});

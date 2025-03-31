import { auto } from "@auto-browse/auto-browse";
import { aistep } from './fixtures';


aistep(/^(.*)$/, async ({ page }, action: string) => {
    await auto(action, { page });
});

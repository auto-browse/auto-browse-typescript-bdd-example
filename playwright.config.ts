import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

const testDir = defineBddConfig({
    features: 'features/*.feature',
    steps: 'features/steps_without_auto-browse/*.ts',
});

export default defineConfig({
    testDir,
    timeout: 180000,
    reporter: [
        cucumberReporter('html', {
            outputFile: 'cucumber-report/index.html',
            externalAttachments: true,
        }),
        ['html', { open: 'always' }],
    ],
    use: {
        screenshot: 'on',
        trace: 'on',
        video: 'on',
        headless: false
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});
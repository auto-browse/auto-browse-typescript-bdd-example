# Auto Browse TypeScript BDD Example

## Setup Instructions

1. Clone it to your local machine

```bash
git clone https://github.com/auto-browse/auto-browse-typescript-bdd-example.git
```

2. Change directory to auto-browse-typescript-bdd-example

```bash
cd auto-browse-typescript-bdd-example
```

3. Create a .env file in the root directory with your OpenAI API key

```env
OPENAI_API_KEY=your_openai_api_key_here
LLM_MODEL=gpt-4o-mini  # Optional, defaults to gpt-4o-mini
```

4. Install dependencies

```bash
npm install --legacy-peer-deps
```

5. Run the tests

```bash
npm run test
```

## Test Reports

After test execution:

- Cucumber report will be generated in `cucumber-report` directory
- To view the Playwright HTML report, run:
  ```bash
  npx playwright show-report
  ```
- Test execution videos (`.webm` files) can be found in `test-results` directory under each test execution

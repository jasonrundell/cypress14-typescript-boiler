# Cypress 14 TypeScript Boilerplate

A modern, production-ready Cypress testing framework boilerplate with TypeScript support, designed for React-based frontend projects. This boilerplate provides a solid foundation for writing maintainable, type-safe end-to-end tests.

## 🚀 Features

- ⚡ Cypress 14 with TypeScript support
- 📦 Pre-configured with essential plugins and dependencies
- 🧪 Built-in support for component testing
- 🔍 Type-safe test assertions and commands
- 📝 ESLint and Prettier configuration
- 🎯 Example test suites and custom commands
- 🔄 CI/CD ready configuration

## 📋 Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- A modern web browser (Chrome, Firefox, or Edge)

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/jasonrundell/cypress14-typescript-boiler.git
cd cypress14-typescript-boiler
```

2. Install dependencies:

```bash
npm install
```

3. Start Cypress:

```bash
npm run cypress:open
```

## 📁 Project Structure

```
cypress14-typescript-boiler/
├── cypress/
│   ├── e2e/           # End-to-end test files
│   ├── fixtures/      # Test data
│   ├── support/       # Custom commands and utilities
│   └── types/         # TypeScript type definitions
├── .eslintrc.js       # ESLint configuration
├── .prettierrc        # Prettier configuration
├── cypress.config.ts  # Cypress configuration
├── package.json       # Project dependencies
└── tsconfig.json      # TypeScript configuration
```

## 🧪 Writing Tests

### Example Test

```typescript
describe("Home Page Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load the home page successfully", () => {
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });

  it("should have exactly one h1 heading", () => {
    cy.get("h1").should("have.length", 1);
  });
});
```

## 🔧 Custom Commands (Coming soon)

This boilerplate includes several custom commands to make your tests more maintainable:

```typescript
// Example custom command
Cypress.Commands.add("login", (email: string, password: string) => {
  cy.visit("/login");
  cy.get('[data-testid="email-input"]').type(email);
  cy.get('[data-testid="password-input"]').type(password);
  cy.get('[data-testid="submit-button"]').click();
});
```

## 🧰 Available Scripts

- `npm run cypress:open` - Open Cypress Test Runner
- `npm run cypress:run` - Run tests in headless mode
- `npm run test` - Run all tests

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Cypress](https://www.cypress.io/) - The amazing testing framework
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- All contributors who have helped shape this boilerplate

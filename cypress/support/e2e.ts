// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

declare global {
  namespace Cypress {
    interface Chainable {
      // Add custom commands here
      // Example:
      // login(email: string, password: string): Chainable<void>
    }
  }
}

// Prevent TypeScript errors
export {};

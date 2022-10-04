# Arcaden

An arcade game management system that requires token to play the arcades, and compensates through the token. You can purchase tokens with your balance, and spend it on playing games.

## Compilation Instructions (built in Angular 14)

- clone the repository and navigate inside the Arcaden directory of the cloned folder
- Run `ng serve` and navigate to `http://localhost:4200`

## Service Architecture

- Arcade service is a generic service that allows users to interact with arcade game.
- User service provides access to user level functionalities.

## Models
- Arcade (prototype of a arcade game)
- Transaction (prototype of a transaction done by the user)
- User (prototype of a user)

Please follow the instructions on the homepage to learn how to navigate around. 

### Few important instructions

1. Clicking on the topbar 'game title' takes user to the homepage.
2. To add tokens and balances, and add or change user, click on the dropdown with the user icon.

Deployed app can be found at: `https://sprightly-scone-6be198.netlify.app/`

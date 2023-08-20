# Crown Clothing
FrontEnd Application for a clothing store!

## Getting Started

In your terminal after you clone your project down, remember to run either yarn or npm install to build all the dependencies in the project.

Remember to replace the config variable in your firebase.utils.js with your own config object from the firebase dashboard! Navigate to the project settings gear icon > project settings and scroll down to the config code. Copy the object in the code and replace the variable in your cloned code.

Set up environment variables to configure the Stripe API:

```
REACT_APP_STRIPE_PUBLISHABLE_KEY=<values>
STRIPE_SECRET_KEY=<values>
```

## Running the Project

1. In the terminal, run: `npm run start`
2. Browse to the clothing store frontend at [localhost:3000](http://localhost:3000) and check out the clothing store!

## Packages Used

* dotenv - Loads environment variables from .env file
* firebase - Firebase JavaScript library for web and Node.js
* react-redux - Official React bindings for Redux
* react-router-dom - Declarative routing for React web applications
* redux - Predictable state container for JavaScript apps
* redux-logger - Logger for Redux
* redux-persist - Persist and rehydrate redux stores
* redux-saga - Saga middleware for Redux to handle Side Effects
* redux-thunk - Thunk middleware for Redux
* reselect - Selectors for Redux
* sass - A pure JavaScript implementation of Sass
* stripe - Stripe API wrapper
* styled-components - CSS for the <Component> Age. Style components your way with speed, strong typing, and flexibility

## Concepts

* Routing + React-Router
* Authentication + Firebase
* Firebase Database Storage
* React Context for State Management
* CSS-In-JS + Styled Components
* Deploying with Netlify
* Reducers, Redux, Redux-Thunk, Redux-Saga, Redux-Toolkit
* Serverless Functions + Stripe
* TypeScript

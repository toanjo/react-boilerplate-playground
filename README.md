This is my boilerplate and playground for React projects, based on [Create React App](https://github.com/facebook/create-react-app).
It extends Create React App with some of my personal preferences for starting a React Project.

**This is an often-changing starter project that varies with my preferences at any given time.**

## Todo

  - Add feature flag to middleware
  - Add a loader component
  - Make the default styles / themes nicer
  - Update / Review README.md
  - Consider adding useMemo

## What's Included

  - [React Router](https://reacttraining.com/react-router/) for routing within the application.
  - [Redux](https://redux.js.org/) and [react-redux](https://react-redux.js.org/) for state management.
  - [styled-components](https://www.styled-components.com/) for styling and theming. 
  - [Axios](https://github.com/axios/axios) for a communication middleware.
  - All the awesome things already included in Create React App.

## Project Structure

The base of the project has the **index.js**, the root component **App** and a **store.js** file, which creates the store for redux.

  - **Actions** is where actions are defined. Includes *api.js* which exports all actions related to external service requests.
  - **Components** is where all the components for the app will be. I use a folder for each, containing an *index.js* and a *styles.js* for, respectively, the component and the styles.
  - **Reducers** is where the reducers for the app will be defined. Includes a single baseReducer that responds to the API middleware success and error actions, acting on the app's state.
  - **Services** includes an API middleware. This middleware is used on the creation of the redux store and handles all API requests, later dispatching a success or error action.
  - **Utils** contains a *defaults.js* file on which constants such as URLs or API Keys can be stored, as well as the *styles.global.js*, where global styles can be defined for the app.

## What's Missing

Right now I don't have a starter piece of code for implementing tests. Be sure to check [Create React App's documentation on the subject](https://create-react-app.dev/docs/running-tests).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
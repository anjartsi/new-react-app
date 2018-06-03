## What is this?
This is the backbone of a simple React app, with most of the most common tools added and configured. 

## Tools 
1. [Redux](https://redux.js.org/): to keep the app's state localized to a single store.
2. [React CSS Modules](https://github.com/gajus/react-css-modules): to modularize css/scss files so that each component can have its own style without overly lengthy class names.
3. [SASS](https://sass-lang.com/): to make styling less painful
4. [Absolute Path for imports](https://medium.com/@kkomaz/another-solution-to-absolute-path-setup-in-create-react-app-cccb38d8eea8): to import files using absolute paths, use `import file from '@/file'` where ` @ ` refers to the `src/` directory

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), and then ejected.
Below you will find some information on how to perform common tasks. In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.


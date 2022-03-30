# Słuchaj.fun
![Screenshot of the website](https://i.imgur.com/PnLgjWQ.png)

Made in few hours, [Słuchaj.fun](https://sluchaj.fun) is a clone of famous [Heardle](https://heardle.app) - "that daily music game". <br />
It contains Polish songs, that are played through the YouTube iFrame API.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Tech stack
* [React](https://reactjs.org)
* [TypeScript](https://www.typescriptlang.org)
* [styled-components](https://styled-components.com)
* [YouTube iFrame API](https://developers.google.com/youtube/iframe_api_reference)

# To do
* Add Storybook
* Add tests
* Disable/bypass iFrame's Media Session API

# Contributing
We're open to contributions! Feel free to open an issue or pull request.

Keep in mind, that this repository follows the [Conventional Commits](https://conventionalcommits.org/) specification.

Please format the code with ESLint and Prettier as well.

`npx eslint src/ --fix`

# Building (default React stuff)

In the project directory, you can run:

### `yarn`
Installs all the required dependencies.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

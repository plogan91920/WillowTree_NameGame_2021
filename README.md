# The Name Game™ - 2021 Edition

This is the 2021 edition of the WillowTree Name Game™, designed to help prospective employees learn their coworkers names. This particular version has been developed by Patrick Logan toward his bid for the open Senior Web Engineer and Platform Software Engineer positions at their Charlottesville, VA campus.

## Features

### Name Game™

As the primary offering of this application, the Name Game™ is a fully functional test of the player's abilities to recognize their prospective coworkers faces. Displaying 6 faces at a time and a single name, it is up to the player to find the correct match. Players are graded in the end first by their accuracy and then by their speed, incentivising users to know the names rather than rapidly guess. Scores are shown at the end of the game and the top ten scores are saved for future viewing.

### Practice Mode

Prior to attempting the game, players may wish to improve their knowledge of their coworkers in order to achieve higher scores. Practice Mode is an infinite variant of the Name Game that will continually present the player with questions in order to help players learn through repetition. No score is kept during Practice Mode.

### Scores Page

Players who wish to view their past scores may do so on the Scores page. This page will list your 10 best scores including the number of correct answers and the average time of each answer during the game.

### Optional Settings

The Name Game™ comes with two optional settings for players convience: Assist Mode and Dark Mode. These options may be accessed on the Settings Page and can be toggled on and off.

#### Assist Mode

Assist Mode provides users who are particularly struggling with additional help toward figuring out the answer to a question. With Assist Mode active, players will begin recieving help after 10 seconds as the game removes incorrect answers in 3 second intervals. This setting is one of the Legacy requirements from the 2018 version of the Name Game™.

#### Dark Mode

For those who feel that looking at bright colors on their screen is like staring into the sun, Dark Mode has been provided for their convience. Enable Dark Mode to swap much of the color pallete at your own risk as the color scheme was picked by a developer.

## Requirements

The client has provided a number of requirements, as well as a representative design of the product.

The [original requirements](https://bitbucket.org/pwlogan91920/wt-name-game/src/master/) were provided two years ago and [have since been updated](https://github.com/willowtreeapps/wat-test-project) with a new design. As the requirements were to demonstrate new proficiency since the previous application, I decided that the best product for the client would follow the new design and implement some of the old features.

### Design
The design provided includes web designs at resolution 1440 x 1024 for several key screens. While the design does include alternate tabs for other devices those tabs are device specific and were used as inspiration for the responsive layouts rather than following them directly.

### Function



## Maintenance

Here are some brief thoughts on overall Maintenance. Most individual files should be fairly self documented, however there are a few additional relevant thoughts.

### Config

A few key settings can be found in the Config.Json for quick reference or editing. These settings include the API endpoints, the number of questions in a round of the Name Game™, and the times (in seconds) for Assist Mode.

### TODO

There are a few //Todo: tasks in the API helper component; these are reminders to update the code once the API has functionality to handle scores, instead of saving them locally as they are now.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
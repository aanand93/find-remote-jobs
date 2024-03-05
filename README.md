# Find Remote Jobs app

## Project Description

> This is a remote job search website built using React. I am utilizing Jobicy's API to pull remote jobs from their database.

## Screenshots

> Home.js

<img width="481" alt="Screenshot 2024-03-05 at 12 57 46 PM" src="https://github.com/aanand93/find-remote-jobs/assets/77586218/7c330959-f84c-4add-bdc0-e2d2223823a1">

> Jobs.js dynamically generated grid via api call

<img width="958" alt="Screenshot 2024-03-05 at 12 58 42 PM" src="https://github.com/aanand93/find-remote-jobs/assets/77586218/606dd2f4-34d5-47ef-91c4-aa2b21567ae1">

## Link to API and Documentation

> API: https://jobicy.com/api/v2/remote-jobs

> Docs: https://jobicy.com/jobs-rss-feed#section3

## Example data response from Jobicy API

```json
{
	"id": "Unique Job ID",
	"url": "Job link",
	"jobTitle": "Job title",
	"companyName": "Company name",
	"companyLogo": "Company logo link",
	"jobIndustry": "Job function (industry)",
	"jobType": "Job type (full-time, contract, part-time or internship)",
	"jobGeo": "Geographic restriction for employment (or Anywhere if not applicable)",
	"jobLevel": "Seniority level (or Any if not applicable)",
	"jobExcerpt": "Excerpt job description (max 55 characters)",
	"jobDescription": "Full job description (HTML)",
	"pubDate": "Publication date and time (UTC+00:00)",
	"annualSalaryMin": "Annual min salary (if applicable)",
	"annualSalaryMax": "Annual max salary (if applicable)",
	"salaryCurrency": "ISO 4217 salary currency code (if applicable)"
}
```

## Docker

> Step 1: Download Docker and follow the getting started guide

- https://www.docker.com/products/docker-desktop/

> step 2: To run a development server use the script

- `$ docker-compose up --build`

> step 3: To shut down the server use `ctrl c` or run the script

- `$ docker-compose down`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

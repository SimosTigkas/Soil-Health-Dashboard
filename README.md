# Soil Health Dashboard

This project is an interactive dashboard built with React that displays Soil Moisture and Temperature metrics using a line chart and summary cards.


## Redirect to the project folder
```bash
cd Soil-Health-Dashboard/
```   

## Installation

Open the project folder in your editor.

Install all dependencies:

```bash
npm install
```


## Run the project

Start the development server with:

```bash
npm run dev
```

Then open the app at the link that appears in the terminal.

## End-to-End (E2E) Testing
This project uses Cypress to perform a basic E2E test for the metric toggle functionality.

### 1. Install Cypress
Open another terminal and type:

```bash
npm install --save-dev cypress
```

### 2. Open Cypress Test Runner
```bash
npx cypress open
```
This launches the Cypress Test Runner interface.
A cypress/ folder is automatically created with example tests.

### 3. Run the existing test
In the Cypress Test Runner GUI, click the metricToggle.cy.js test file.

### 4. Check Results
GUI: you will see the browser open and the steps executed.

## Tips:
Make sure the dev server is running before executing the Cypress test.

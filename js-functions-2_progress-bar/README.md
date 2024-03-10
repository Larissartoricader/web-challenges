# progress-bar

## Task

## Notes

- You only have to touch the `./js/index.js` file.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open [localhost:3000](http://localhost:3000) in a browser.

> Alternatively you can use the Live Preview Extension for Visual Studio Code to view this project.  
> Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.

Use `npm run test` to run the tests.

### CodeSandbox Cloud

Select the "Preview: 3000" tab to view this project.

Select the "Tests: logs" tab to view the tests.

> The `npm run start` and `npm run test` scripts run automatically.

### Scripts

You can use the following commands:

- `npm run start` to start a development server
- `npm run test` to run the tests
- `npm run lint` to run the linter

/\*
Progress Bar

Build a progress bar that indicates how much the user has scrolled down the page.
For that:

- change the starting width of the progressBar in the CSS file to 0%
- write a function "calculateScrollPercentage" which calculates and returns in percent
  how far the user has scrolled down the page.
  Use the following attributes to achieve this:

  - window.scrollY: the Y position of the window on the total webpage
  - window.innerHeight: height of the window
  - document.body.clientHeight: height of the webpage

- change the width of the progressBar whenever the user scrolls down or up. Use your
  function to calculate the current scroll percentage.

(HINT: you can add a 'scroll' event listener to the document )
(HINT: you can change the width of an element like this: element.style.width = '10px')
\*/

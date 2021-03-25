# Zoopla Tech Challenge - Quality Team

Welcome!

Thank you again for considering Zoopla for the next stage of your career. This tech challenge is designed as a chance for you to show us what you can do.

We appreciate that you are taking time out of your schedule to do this, and we thank you and promise to give you feedback on your submission.

If you run out of time, first of all don’t panic. Secondly, just let us know what you would have done next or differently if you’d had more time.

This test is designed for us to get an insight into how you think, work, and what you’re comfortable with. We believe everyone and everything can always improve, so if you have any feedback for us on this challenge, please do share it. :) 

## The Challenge
Your task, should you choose to accept it, is to create a basic automation suite to verify several user journeys on the  [zoopla.co.uk](http://zoopla.co.uk/)  site, and then submit a PR to this repo as if it was part of your day to day work here at Zoopla.

The user journeys we would like you to automate are:
- Register for daily email updates on rental property in London for 1 bed properties between £800 and £1000 per month
- Change the frequency of an existing email update
- Search for a particular property in the house prices search and confirm that it appears as the first result
- Search houses for sale including the key word “garage” and check that results have garages
- Save a search for property within 15 minutes drive of SE1 2LH.
- Check that saved searches can be retrieved

> NOTE: Please ONLY submit the forms _required_ for this technical test.

Zoopla's core languages are:
- JavaScript
- Python

We are also migrating our End-to-End automated regression suite to Cypress.

Please don’t feel you *must* use the languages above, or Cypress to complete this challenge; we'd rather see an excellent solution which suitably demonstrates your skillset.

The challenge should take no longer than 2 hours, so please prioritise your effort to focus on the most important pages, and try and limit yourself to this timeframe.

Thank you, and good luck!

The Zoopla Quality Team
-------------------------
-------------------------

# What is Cypress.io

Most testing tools (like Selenium) operate by running outside of the browser and executing remote commands across the network. Cypress is the exact opposite. Cypress is executed in the same run loop as your application.

Behind Cypress is a Node server process. Cypress and the Node process constantly communicate, synchronize, and perform tasks on behalf of each other. Having access to both parts (front and back) gives us the ability to respond to your application’s events in real time, while at the same time work outside of the browser for tasks that require a higher privilege.

Cypress also operates at the network layer by reading and altering web traffic on the fly. This enables Cypress to not only modify everything coming in and out of the browser, but also to change code that may interfere with its ability to automate the browser.

Cypress ultimately controls the entire automation process from top to bottom, which puts it in the unique position of being able to understand everything happening in and outside of the browser. This means Cypress is capable of delivering more consistent results than any other testing tool.

Because Cypress is installed locally on your machine, it can additionally tap into the operating system for automation tasks. This makes performing tasks such as taking screenshots, recording videos, general file system operations and network operations possible.
API link - https://docs.cypress.io/api/api/table-of-contents.html

# Getting started

Clone repo locally

Run `npm install` or `npm i` in your terminal while youre in the project folder - this will download all dependecies locally

# How to run the tests

Theres 2 ways to runs tests,
1 - Either through the terminal command line

`npm run test` This will run all the tests in the test.spec file in chrome by default and in headless mode

2 - Through the Cypress Visual Test Runner

`npm run open` This will launch the Test Runner where you'll be able to select the tests to run along with other option

# Browser Support

Cypress comes out the box supporting the following browsers, Chrome, Firefox and Electron

To run test on different browsers through the terminal you can include the following argument to the script

Chrome `--browser chrome`
Firefox `--browser firefox`
Electron `--browser electron`

-------------------------
-------------------------

# Notes

Initial implementation did not include page object but when i was looking at the code it looked awful. I Wasn't happy with the locators I used but I used the simplest one I could find to get the test to work.I then spent a little more time to hide all the locators in the page object files so the tests look a lot neater.

I've used `click({ force: true })` in a couple of places but I couldn't work out how to hover over the header to display the dropdown, I tried `cy.get('.menu-item').trigger('mouseover')` and a few other options but it was driving me mad and was spending waaaay too long on it so took the easy option.

I only created one general function for the login but if I had a bit more time I could have created additional ones. I noticed I repeated the location code quite a bit so I could have turned that into a function but time permitted I opted against it. One was enough to showcase I knew how it could be achieved.

I combined the first 2 tests together. I initially was planning to keep them separate but while I was running and writing the code I realised I was at the page where I could amend the alert so I went ahead and took that approach. I decided this would also reduce execution time rather than spinning up another browser to run the steps again.

I struggled to automate the fourth scenario, mainly because I went down a rabbit hold and came to a conclusion that I had to inject native JS code. Basically the approach I was looking at was to trigger `document.querySelectAll` and then store that in a variable, then do a get request for all that within a forEach to check the results contains garage.You can see I went down a rabbit hole with this one so I decided to not spend too much time on this but to explain my approach rather.

Test data - I hate relying on test data but as this was a test I wanted to complete as much as possible in the least amount of time and creating a user and then using that seemed like the most efficient option. This isn't something I like to do and in the real world I would explore sql scripts to inject predefined data, or maybe even create a new account on every run, that could be an overkill and fill up the db quite quick depending on how many times the tests were run etc.

Oh, I also notice the tests took ages to run, mainly because of the number of XHR requests being fired off and waiting to complete. I didn't look into why they were, probably ads being loaded.
I spent a little over 3hrs and probably could have spent longer but it got to a point my wife was screaming at me and the kids were all over me so decided to keep it to what I had.

At the time of committing this I had a green run but I'm a bit concerned with the test data I'm using and relying on alerts and saved search. I'm not happy about this but the time limit was throwing me off.

It's better to have test coverage, even if it looks ugly, than not having test coverage. Idea here would be to deal with pr comments and then refactor as part of tech debt if time is sensitive...other refactor before merging.

Happy PR'ing

/paresh
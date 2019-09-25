# Code for CIDM4382 Fall 2019

Code:
* Nickname
* Getting MEAN
* VATSIM Harvester
* ZAB Phraseology Helper

Very useful links:
* [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

## Getting Book Code - Chapter 04 Example:

1. `git clone -b chapter-04 https://github.com/cliveharber/gettingMean-2.git`
2. `cd gettingMean-2`
3. `npm install`

## Steps for Heroku

1. Ensure that the sections covering Heroku and Heroku CLI *Appendix B* have been followed:
    1. Install Heroku Toolbelt: https://devcenter.heroku.com/articles/heroku-cli
    2. Localized (from gitbash only on Windows): `curl https://cli-assets.heroku.com/install.sh | sh`
    3. Using NPM: `npm install -g heroku`
2. Ensure the *engines* section of `package.json` has beed added
3. Ensure that a Procfile has been created which contains: `web: npm start`
4. You can test heroku compatitbility with `heroku local`
5. run `heroku create`
6. updates: 
    1. `git add --all`
    2. `git commite -m 'message'`
    2. `git push heroku master`
5. View on heroku: `heroku open`

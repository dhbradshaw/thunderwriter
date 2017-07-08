# Thunderwriter

Demo: https://thunderwriter.surge.sh/

I want to start writing fiction regularly.  Since I'm using React for
Brighthike, I thought it would be fun to use React to shape the app in which I
write.  I'll add (and probably subtract?) features as I go along.  However,
here's a first minimum.  Thunderwriter

* Maintains a running word count.
* Saves your work in the browser as you type so you don't lose words on refresh.
* Changes color when you reach your word count goal.

## Usage

Just go to https://thunderwriter.surge.sh/ and start typing.  When you hit 500 words, the background will change color.

If you like what you've written, copy it over to Google Docs or something for editing.  Then start again.

## Installation

If you want to install tinker with this locally, here's what you do:

Clone this repository:

    git clone git@github.com:dhbradshaw/thunderwriter.git

Change directory to the new project directory

    cd thunderwriter

Install the node dependencies

    npm install

Start up the development server

    npm start

Open your local version at http://localhost:3000/ or whatever node tells you is the address.  Try changing one of the style objects in src/App.js and see what it does to the look and feel of the app.

## Build

The development server creates a version optimized for rapid development, not deployment.  To create a version optimized for deployment, run

    npm run build

The resulting build folder can easily be deployed, for example, on Github Pages, Amazon S3, or Surge.

## Usage

## License
License: MIT

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

1.  Go to https://thunderwriter.surge.sh/
2.  Start typing.  When you hit 500 words, the background will change color.
3.  If you like what you've written, copy it over to Google Docs or something for editing.  Then start again.

Double click to change preferences such as font size, background colors, and word count goal.  Then press submit.

To restore a default preference, just blank out the field and press "submit".

## Installation

If you want to install tinker with this locally, here's what you do:

1. Clone this repository:

    git clone https://github.com/dhbradshaw/thunderwriter.git

2. Change directory to the new project directory

    cd thunderwriter

3. Install the node dependencies

    npm install

4. Start up the development server

    npm start

Open your local version at http://localhost:3000/ or whatever node tells you is the address.  Try changing one of the style objects in src/App.js and see what it does to the look and feel of the app.

## Build

The development server creates a version optimized for rapid development, not deployment.  To create a version optimized for deployment, run

    npm run build

The resulting build folder can easily be deployed, for example, on Github Pages, Amazon S3, or Surge.

## License
License: MIT

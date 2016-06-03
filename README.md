also to see this client side you will need the following
//
open node_modules/livereload-js/dist/livereload.js and add a line after the 765 conditional for css
      if (options.liveJS) {
        if (path.match(/\.js$/i)) {
          debugger; //do something w/ the path here
          return;
        }
      }

 AND this after line 406 (future flag to opt-in)

 liveJS: (_ref = message.liveCSS) != null ? _ref : true,

//

[![view on npm](http://img.shields.io/npm/v/ember-cli-styles-reloader.svg)](https://www.npmjs.org/package/ember-cli-styles-reloader)
[![npm module downloads per month](http://img.shields.io/npm/dm/ember-cli-styles-reloader.svg)](https://www.npmjs.org/package/ember-cli-styles-reloader)
[![Build Status](https://travis-ci.org/xomaczar/ember-cli-styles-reloader.png?branch=master)](https://travis-ci.org/xomaczar/ember-cli-styles-reloader)

# Ember-cli-styles-reloader
Reloads changed styles (css|scss|sass|less|styl) without reloading the entire ember-cli app.

## Installation

Run either command below depending on Ember version in your project folder.

For Ember CLI >= `2.3.0`:
```shell
npm uninstall ember-cli-styles-reloader --save-dev
```
## Seriously, starting from ember-cli version 2.3.0 - styles reloading is supported out of the box.

For Ember CLI >= `0.2.3`:

```shell
ember install ember-cli-styles-reloader
```

For Ember CLI < `0.2.3`:

```shell
ember install:addon ember-cli-styles-reloader
```

## Configurations

* All style changes can be animated to smoothly transition between old/new change sets.
By default this feature is disabled, in order to not interfere with existing transition(s) defined
in your app. To enable it:

```javascript
//your-app/config/environment.js

 ENV['ember-cli-styles-reloader'] = {
    animateChanges: true
};
```

## Running

* `ember server`
* Visit your app at http://localhost:4200

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

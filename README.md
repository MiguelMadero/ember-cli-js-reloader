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

[![view on npm](http://img.shields.io/npm/v/ember-cli-js-reloader.svg)](https://www.npmjs.org/package/ember-cli-js-reloader)
[![npm module downloads per month](http://img.shields.io/npm/dm/ember-cli-js-reloader.svg)](https://www.npmjs.org/package/ember-cli-js-reloader)
[![Build Status](https://travis-ci.org/MiguelMadero/ember-cli-js-reloader.png?branch=master)](https://travis-ci.org/MiguelMadero/ember-cli-js-reloader)

# ember-cli-js-reloader
Reloads changed JS and HBS files without reloading the entire ember-cli app. For now, it's constrainted to components and HBS. 

Most of the code is based on [ember-cli-styles-reloader](https://github.com/xomaczar/ember-cli-styles-reloader)
by [xomaczar](https://github.com/xomaczar) and all credit goes out to him. 

## Installation

Run either command below depending on Ember version in your project folder.

For Ember CLI >= `2.3.0`:
```shell
npm uninstall ember-cli-js-reloader --save-dev
```
## Seriously, starting from ember-cli version 2.3.0 - styles reloading is supported out of the box.

For Ember CLI >= `0.2.3`:

```shell
ember install ember-cli-js-reloader
```

For Ember CLI < `0.2.3`:

```shell
ember install:addon ember-cli-js-reloader
```

## Configurations

* All style changes can be animated to smoothly transition between old/new change sets.
By default this feature is disabled, in order to not interfere with existing transition(s) defined
in your app. To enable it:

```javascript
//your-app/config/environment.js

 ENV['ember-cli-js-reloader'] = {
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

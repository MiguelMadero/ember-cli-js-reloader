/* jshint node: true */
'use strict';

var path = require('path');

// default reload css extensions
var styleExtensions = ['js'];
var reloadJsPattern = new RegExp('\.(' + styleExtensions.join('|') + ')$');

var noop = function(){};

module.exports = function StylesReloader(options){
  var options = options;
  var fsWatcher = options.watcher;
  var ui = options.ui;
  var _isRunning = false;
  var lsProxy = options.ssl ? require('https') : require('http');

  // build app style pattern
  // maybe?? reducers??
  var appStylePath = path.join(options.project.root, 'app', 'components', '*');
  var appStylePattern = new RegExp('^' + appStylePath);
  var appStyleResource = options.project.pkg.name + '.js';

  // livereload hostname
  var liveReloadHostname = [
    (options.ssl ? 'https://' :'http://'),
    (options.liveReloadHost || options.host),
    ':',
    options.liveReloadPort
  ].join('');


  function shouldReload(filePath){
    return filePath.match(reloadJsPattern);
  };

  function getReloadResource(filePath){
    return filePath.match(appStylePattern) ? appStyleResource : 'vendor.js';
  };

  function fileDidChange(results){
    var filePath = results.filePath || '';

    ui.writeLine(filePath); //THIS IS THE FILE
    // /Users/toranb/Projects/ember-redux-ddau-example
    // /app/components/users-table/component.js
    // define('example/components/users-table/component')

    if (shouldReload(filePath)){
      var reloadResource = getReloadResource(filePath);
      ui.writeLine('TORAN GO!!');
      ui.writeLine('Reloading ' + reloadResource + ' only');
      try {
          ui.writeLine('so it does what??' + liveReloadHostname);
      lsProxy.get('http://localhost:49152/changed?files=' + reloadResource)
          .on('error', noop);
      } catch(e) {
          ui.writeLine('??what the fuu' + e);
      }
    }
  };

  function mergeReloadFilters(){
    options.project.liveReloadFilterPatterns.push(reloadJsPattern);
  };

  return {

    run: function(){
      if (!options.liveReload) {
        ui.writeLine('StylesReloader is disabled');
        return;
      }

      if (this.isRunning()){
        return;
      }

      ui.writeLine('StylesReloader watches ' + styleExtensions.join('|'));
      if (fsWatcher) {
        mergeReloadFilters();
        fsWatcher.on('change', fileDidChange.bind(this));
        _isRunning = !_isRunning;
      }
    },

    isRunning: function(){
      return _isRunning;
    }
  };
};

var path = require('path');

exports.extend = function (app, config) {

  // application id
  config.appID = app.manifest.appID || "";

  // target build directory relative to app base directory
  config.localBuildPath = path.relative(config.appPath, config.outputPath);

  // Generate a default bundleID

  // construct a bundleID the same way Android constructs the packageName:
  var studio = app.manifest.studio && app.manifest.studio.domain;
  if (!studio) {
    studio = "my-studio.com";
  }

  var names = studio.split(/\./g).reverse();
  studio = names.join('.');
  var defaultName = studio + "." + app.manifest.shortName;

  config.bundleID = app.manifest.ios && app.manifest.ios.bundleID || defaultName;
  config.packageName = app.manifest.android && app.manifest.android.packageName || defaultName;

}

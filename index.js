var thrust = require('node-thrust');

module.exports = function(url, width, height) {
  thrust(function(err, api) {
    var win = api.window({
      root_url: url,
      size: {
        width: width,
        height: height
      }
    })
    win.show();
    win.focus();
  });
}

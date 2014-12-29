var thrust = require('node-thrust');
var ThrustStream = require('thrust-stream');

module.exports = function(url, width, height, cb) {
  thrust(function(err, api) {
    if (err) {
      server.close();
      server.unref();
      if (cb) cb(err);
      return;
    }

    var win = api.window({
      root_url: url,
      size: {
        width: width,
        height: height
      }
    })
    win.show();
    win.focus();

    var ts = new ThrustStream(win);

    ts.on("data", function(data) {
      console.log(data);
    });

    process.stdin.on('data', function(data) {
      var json = data.toString().trim();
      var obj = JSON.parse(json);
      ts.write(obj);
    })
    
    if (cb) cb(null);
  }, {quiet: true});
}

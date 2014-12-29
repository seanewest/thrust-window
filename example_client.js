var ThrustStream = require('thrust-stream');

var ts = new ThrustStream(THRUST);
ts.on("data", function(data) {
  ts.write(data)
});

var sample = {"somekey": "hello from the client!"};
ts.write(sample);

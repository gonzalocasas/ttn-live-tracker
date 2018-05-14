let app = require('express')();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let ttn = require('ttn');

const appID = HERE_YOUR_APP_ID
const accessKey = HERE_YOUR_ACCESS_KEY

// Run the webserver on port 8080
server.listen(8080);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

const dataClient = ttn.data(appID, accessKey)
  .catch(console.error);

// Add Socket.io clients
io.on('connection', function (socket) {

  dataClient.then(function (client) {
    console.log('Browser client connected.');

    client.on('uplink', function (devID, payload) {
      console.log('Received uplink from ' + devID)
      socket.emit('uplink', payload)
    })
  });
});

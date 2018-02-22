var WebSocket = require('ws');
var HOST = "ws://clipshare47.herokuapp.com/"
var ws = new WebSocket(HOST);
const clipboardy = require('clipboardy');

//

// ws.on('open', function open() {
//   ws.send(clipboardy.readSync());
//   console.log("Writing: " + clipboardy.readSync());
// });

ws.on('message', function incoming(data) {
  if(data == clipboardy.readSync()) {

  } else {
  clipboardy.writeSync(data);
  console.log("Saving to Clipboard: " + data);
}
});

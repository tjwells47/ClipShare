var WebSocket = require('ws');
var HOST = "ws://clipshare47.herokuapp.com/"
var ws = new WebSocket(HOST);
const clipboardy = require('clipboardy');

ws.on('open', function open() {
setTimeout(function timeout() {
    ws.send(clipboardy.readSync(), function(){
        ws.close();
    });
  }, 500);



});

ws.on('close', function close() {
  console.log('disconnected');
});



// ws.on('message', function incoming(data) {
//   console.log(data);
//   clipboardy.writeSync(data);
// });

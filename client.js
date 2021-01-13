const net = require('net')
// const host = require('./constants');
// const port = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding('utf8');
  conn.on('connect', function() {
    console.log('Connection established')
    conn.write('Name: JTH')
  })
//   conn.on('connect', function(){
//     conn.write('Move: up')
//     conn.write('Move: up')
// })
  
  conn.on('data', function(data) {
    console.log('Message from server: ', data)
  });
  return conn; 
}

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)

module.exports = connect;  
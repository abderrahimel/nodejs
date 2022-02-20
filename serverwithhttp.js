// .createServer() method takes a single argument in the form of a callback function. This callback function has two primary arguments; 
//  req, res
// we use the .end() method to send the string ‘Server is Running!’ to the client, which will display on the web page.
const http = require('http');

//  create server 
const server = http.createServer((req, res) =>{
  res.end('Hello World');
  
});

// listen
server.listen(4001, ()=>{
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});

// http://localhost:4001/

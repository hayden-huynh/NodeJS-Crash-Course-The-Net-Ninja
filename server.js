const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
  /* ========== Basic Request/Response ==========
  // console.log(req.url, req.method);

  // Set header content type
  // res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');

  // The data to be sent back
  // res.write('<head><link rel="stylesheet" href="#"></head>');
  // res.write('<p>hello, ninjas</p>');
  // res.write('<p>hello again, ninjas</p>');

  // Send back an html file
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end()
    } else {
      // res.write(data);
      res.end(data); // Same as call res.write(data) then call res.end()
    }
  });

  // Send the response away
  // res.end();
  */

  let path = './views/';

  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about'); // Redirect to some other page
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end()
    } else {
      // res.write(data);
      res.end(data); // Same as call res.write(data) then call res.end()
    }
  });

  // ========== lodash ==========
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log('Hello from lodash');
  });
  greet();
  greet();

});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
})
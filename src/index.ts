import * as http from 'http';
import * as dotenv from 'dotenv';

dotenv.load();

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

console.log(process.env.VERSION);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Current app version: ${process.env.VERSION}\n`);
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

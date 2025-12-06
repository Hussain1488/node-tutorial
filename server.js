import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT;

console.log('Current directory:', __dirname);
console.log('Current file:', __filename);

const server = http.createServer(async (reg, res) => {
  // res.write('Hello World');
  // res.end();
  try {
    let filePath;
    if (reg.method === 'GET') {
      if (reg.url === '/') {
        filePath = path.join(__dirname, 'public', 'index.html');

      } else if (reg.url === '/about') {
        filePath = path.join(__dirname, 'public', 'about.html');
      } else {
        throw new Error('Page Not Found');
      }
    } else {
      throw new Error('Method Not Allowed');
    }

    const Data = await fs.readFile(filePath);
    res.setHeader('Content-Type', 'text/html');
    res.end(Data);

    // try {
    //   if (reg.method === 'GET') {
    //     if (reg.url === '/') {
    //       res.setHeader('Content-Type', 'text/html');
    //       res.end('<h1>Home Page</h1>');
    //     } else if (reg.url === '/about') {
    //       res.setHeader('Content-Type', 'text/html');
    //       res.end('<h1>About Page</h1>');
    //     } else {
    //       res.setHeader('Content-Type', 'text/html');
    //       res.end('<h1>404 Page Not Found</h1>');
    //     }
    //   } else {
    //     throw new Error('Method Not Allowed');
    //   }


  } catch (error) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('500 Server Error: ' + error.message);
  }



  console.log(reg.url);
  // console.log(reg.method);

  // res.setHeader('Content-Type', 'text/html');
  // // res.statusCode = 404;
  // res.end('<h1>Hello World</h1>');

  // res.writeHead(500, { 'Content-Type': "Application/json" });
  // res.end(JSON.stringify({ name: "Hussain", age: 25 }));
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
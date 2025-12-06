import http from 'http';

const PORT = process.env.PORT;

const server = http.createServer((reg, res) => {
  // res.write('Hello World');
  // res.end();

  console.log(reg.url);
  console.log(reg.method);

  res.setHeader('Content-Type', 'text/html');
  // res.statusCode = 404;
  res.end('<h1>Hello World</h1>');

  // res.writeHead(500, { 'Content-Type': "Application/json" });
  // res.end(JSON.stringify({ name: "Hussain", age: 25 }));
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
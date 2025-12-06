import { createServer } from 'http';

const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'David', age: 28 }
];

// Logger medelware (optional)

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
}

const jsonMedelware = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
}

// route handler for /api/users



const server = createServer((reg, res) => {
  logger(reg, res, () => {
    if (reg.method === 'GET' && reg.url === '/api/users') {
      // console.log('Users sent');
      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify(users));
      res.end();
    } else if (reg.method == 'GET' && reg.url.match(/\/api\/users\/([0-9]+)/)) {
      const id = parseInt(reg.url.split('/')[3]);
      const user = users.find(u => u.id === id);
      res.setHeader('Content-Type', 'application/json');
      if (user) {

        res.write(JSON.stringify(user));

      } else {
        res.statusCode = 404;

        res.write('User Not Found');
      }
      res.end();

    } else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  });


});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
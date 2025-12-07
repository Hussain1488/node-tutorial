import { createServer } from 'http';
import { json } from 'stream/consumers';

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
const getUserHandler = (req, res) => {
  // console.log('Users sent');
  res.write(JSON.stringify(users));
  res.end();
}

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
  console.log('Get user by ID');
  const id = parseInt(req.url.split('/')[3]);
  const user = users.find(u => u.id === id);
  res.setHeader('Content-Type', 'application/json');
  if (user) {

    res.write(JSON.stringify(user));

  } else {
    res.statusCode = 404;

    res.write('User Not Found');
  }
  res.end();

}

// Not Found handler
const notFoundHandler = (req, res) => {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
}


const server = createServer((reg, res) => {
  logger(reg, res, () => {
    jsonMedelware(reg, res, () => {
      if (reg.method === 'GET' && reg.url === '/api/users') {
        console.log('Users sent');
        getUserHandler(reg, res);
      } else if (reg.method == 'GET' && reg.url.match(/\/api\/users\/([0-9]+)/)) {
        getUserByIdHandler(reg, res);
      } else {
        notFoundHandler(reg, res);
      }
    });
  });


});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
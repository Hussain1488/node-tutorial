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

const createUserHandler = (req, res) => {
  console.log('Creating User');
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newUser));
  });
}


const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMedelware(req, res, () => {
      if (req.method === 'GET' && req.url === '/api/users') {
        console.log('Users sent');
        getUserHandler(req, res);
      } else if (req.method == 'GET' && req.url.match(/\/api\/users\/([0-9]+)/)) {
        getUserByIdHandler(req, res);
      } else if (req.url === '/api/users' && req.method === 'POST') {
        console.log('Create User');
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });


});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
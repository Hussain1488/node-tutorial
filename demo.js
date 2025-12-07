// import fs from 'fs';


// // ReadFile()

// fs.readFile('./demo/first.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log('Error reading file:', err);
//   } else {
//     console.log('File content:', data);
//   }
// });

// //  readFileSync()

// const data = fs.readFileSync('./demo/first.txt', 'utf-8');

// console.log('Synchronous file content:', data);

//  -------------> Async/Await & .then with fs.promises

import { log } from 'console';
import fs from 'fs/promises';

//  -----> .then

// fs.readFile('./demo/first.txt', 'utf-8')
//   .then((data) => {
//     console.log('File content using .then:', data);
//   }) 
//   .catch((err) => {
//     console.log('Error reading file', err); 
//   })

//  -----> Async/Await

const readFileAsynce = async () => {
  try {
    const data = await fs.readFile('./demo/first.txt', 'utf-8');
    console.log('File content with async/await:', data);
  } catch (err) {
    console.log('Error reading file with async/await:', err);
  }
}

const writeFileAsync = async () => {
  try {
    await fs.writeFile('./demo/first.txt', '\nThis is an example of writing to a file asynchronously.');
    console.log('File written successfully');
  } catch (err) {
    console.log('an error happend: ', err);
  }
}

const appendFileAcync = async () => {
  try {
    await fs.appendFile('./demo/first.txt', '\nThis is an example of appending to a file asynchronously.');
    console.log('File appended successfully');

  } catch (err) {
    console.log('an error happend: ', err);
  }
}

appendFileAcync();
readFileAsynce();
// writeFileAsync();
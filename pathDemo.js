import path from 'path';

const filePath = './dir1/dir2/file.txt';

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));

console.log(path.parse(filePath));


const filePath2 = path.join('dir1', 'dir2', 'file.txt');
console.log('Joined path:', filePath2);

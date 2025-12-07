import crypto from 'crypto';

// createHash()

const hash = crypto.createHash('sha256');

hash.update('Hi every body');

console.log('Hash:', hash.digest('hex'));

// for Random bytes (like user guid)

const randomBytes = crypto.randomBytes(16);

console.log('Random Bytes:', randomBytes.toString('hex'));
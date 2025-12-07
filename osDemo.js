import os from 'os';

console.log('Operating System Info:', os.userInfo());

console.log('Operating System Info:', os.userInfo().username);

console.log('System Uptime (seconds):', os.uptime());

console.log('System Uptime (hours):', (os.uptime() / 3600).toFixed(2));

console.log('Total Memory (bytes):', os.totalmem());

console.log('Free Memory (bytes):', os.freemem());

console.log('CPU Info:', os.cpus());

console.log('CPU Count:', os.cpus().length);

console.log('Home Directory:', os.homedir());

console.log('Operating System Type:', os.type());

console.log('Operating System Platform:', os.platform());

console.log('Operating System Release:', os.release());

console.log('Network Interfaces:', os.networkInterfaces());


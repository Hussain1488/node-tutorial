import url from 'url';

const urlString = 'https://example.com/search?q=hello+world';

let urlObj = new URL(urlString);

console.log(urlObj);


console.log(url.format(urlObj));

const paras = new URLSearchParams(urlObj.search)

console.log(paras.get('q'));

paras.append('lang', 'en');
console.log(paras);

paras.delete('lang');
console.log(paras);


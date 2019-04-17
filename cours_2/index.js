const randomstring = require('randomstring');
const figlet = require('figlet');
const date = require('date-and-time');

console.log(randomstring.generate());

figlet('Hello World!!', function(err, data) {
    console.log(data)
});

const res = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');    // => '2015/01/02 23:14:05'

console.log(res);
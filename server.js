//서버
var http = require('http');

//디비 연결
const { Client } = require('pg');   //모듈 없을시 터미널에서 npm install pg 실행

const database = new Client({
    user: 'mjkim',
    host: '34.64.238.35', // 구글 클라우드 sql서버 이용
    database: 'mjkimdb',
    password: 'mjkim',
    port: 5432
});

database.connect();
database.query('SELECT * from users', (err, res) => {
    console.log(err, res);
    database.end();
})

// 서버 연결
// var server = http.createServer();

// var port=8888;
// var host= 'localhost';

// server.listen( port, host,'50000', function() {
//     console.log("웹 서버 시작/ 포트번호: "+port)
// });

// server.on('connetion', function() {
//     console.log('접속');
// });

// server.on('request', function() {
//     console.log('요청들ㅇ옴');
// });
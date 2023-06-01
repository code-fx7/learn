'use strict';

// Das http Modul ist ein Objekt und hat einen Rückgabewert,
// deshalb muss es in einer Variablen(Konstanten) gespeichert werden.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html'
  });
  res.write('<h1>Hallo Welt!\n</h1>');
  res.write(`<p>Verb: ${req.method}, Pfad: ${req.url}</p>`);
  res.end();
});

server.listen(3_000);

// Abfragen im Terminal:
// Nach Änderungen im Code muss der Server neu gestartet werden.
// Terminal 1: node app.js

// Terminal 2: curl hhtp://localhost:3000
//                  curl http://localhost:3000
//                  curl http://localhost:3000/articles/5
//                  curl -X POST http://localhost:3000/articles/5
//                  curl -i http://localhost:3000
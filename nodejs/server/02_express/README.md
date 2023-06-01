https://www.youtube.com/watch?v=5s7eFzI_fNo&ab_channel=thenativewebGmbH

Zum starten der Mongodb Datenbank im 1. terminal (02_express) node app.js ausführen

Im 2. Terminal

Alle Todos abfragen
curl http://localhost:3000/todos
Mit Http Headers 
curl -i http://localhost:3000/todos

Neues Todo anlegen
curl -X POST -H 'content-type:application/json' -d '{"description":"Improve error handling"}' http://localhost:3000/note-todo

Als erledigt markieren
curl -X POST http://localhost:3000/mark-todo-as-done/04793360-88f2-42b4-bf30-33aaa597212b
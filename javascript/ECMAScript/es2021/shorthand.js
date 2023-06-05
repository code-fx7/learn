'use strict';

const runServer = function (port) {
  port ??= 3000;

  console.log(`Server is running on port ${port}.`);
}

runServer();
runServer(0);
runServer(4000);

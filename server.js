var connect = require('connect');
var serveStatic = require('serve-static');

function setCustomCacheControl(res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
}

var port = process.env.PORT || 8080;

connect()
  .use(
    serveStatic(__dirname),
    {
      maxAge: '1d',
      setHeaders: setCustomCacheControl,
    },
  )
  .listen(port, () => console.log(`Server running on ${port}...`));
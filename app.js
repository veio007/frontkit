var connect = require("connect");
var serveStatic = require("serve-static");

var app = connect();
app.use(serveStatic("."));
app.listen(8086);
console.log("server starting in port 8086")
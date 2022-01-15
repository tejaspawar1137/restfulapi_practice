const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const Student = require("./models/students");
require("./db/connection");
app.use(express.json());

 const Studentrouter = require('./routers/student')
        app.use(Studentrouter)
app.listen(port, () => {
  console.log("localhost is listening on", port);
});
 
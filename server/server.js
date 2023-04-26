const jsonserver = require("json-server");

const middleware = jsonserver.defaults();
const server = jsonserver.create();

server.get("/flight-list", (req, res) =>
  res.send(require("./flight-list.json"))
);

server.listen(8080, () => console.log("Listening at 8080"));

const jsonserver = require("json-server");

const middleware = jsonserver.defaults();
const server = jsonserver.create();
const cors = require("cors");

server.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
server.options("*", cors());

server.get("/flight-list", (req, res) =>
  res.send(require("./flight-list.json"))
);

server.listen(8080, () => console.log("Listening at 8080"));
